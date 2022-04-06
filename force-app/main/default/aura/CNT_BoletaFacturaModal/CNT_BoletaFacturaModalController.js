({
    doInit: function(component, event, helper) {
        var inv = component.get("v.newInvoice");
        helper.fetchPickListVal(component, 'Office__c', 'v.oficinaOptions', inv);
        helper.fetchPickListVal(component, 'Book_Code__c', 'v.bookCodeOptions', inv);
        helper.fetchPickListVal(component, 'Municipality__c', 'v.muniOptions', inv);
        helper.fetchPickListVal(component, 'City__c', 'v.cityOptions', inv);
        //helper.fetchPickListVal(component, 'Sector__c', 'v.sectorOptions', inv);
        helper.getAutofilledFields(component, component.get("v.recordId"));
        helper.getProductList(component);
        var controllingFieldAPI = component.get("v.controllingFieldAPI");
        var dependingFieldAPI = component.get("v.dependingFieldAPI");
        var objDetails = component.get("v.newInvoice");
        
        helper.fetchPicklistValues(component,objDetails,controllingFieldAPI, dependingFieldAPI);
        component.set('v.newInvoice.AgreementAmount__c',1);
    },

    nextStepHandler: function(component, event, helper) {
        if (component.get("v.value") == "Boleta") {
            component.set("v.openBoletaForm", true);
            component.set("v.selectRecordType", false);
            
            var controllerValueKey = 'B';
            var depnedentFieldMap = component.get("v.depnedentFieldMap");
            
            if (controllerValueKey != '--None--') {
                var ListOfDependentFields = [];
                for (var key in depnedentFieldMap) {
                    if (key.split(';')[1] == controllerValueKey) {
                        controllerValueKey = key;
                        ListOfDependentFields = depnedentFieldMap[controllerValueKey];
                    }
                }
                             
                if(ListOfDependentFields.length > 0)
                    helper.fetchDepValues(component, ListOfDependentFields);    
                else
                    component.set("v.listDependingValues", { key: '0', value: '--None--'});                                
            } else {
                component.set("v.listDependingValues", { key: '0', value: '--None--'});
            }
            
            helper.getAmonutFromServer(component);            
        } else if (component.get("v.value") == "Factura") {
            component.set("v.openFacturaForm", true);
            component.set("v.selectRecordType", false);
            helper.getAmonutFromServer(component);
            
        } else {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Error!",
                "message": "Debe seleccionar un tipo de documento",
                "type": "error"
            });
            toastEvent.fire();
        }

    },

    cancelCloseHandler: function(component, event, helper) {
        $A.get("e.force:closeQuickAction").fire();
    },

    handleChange: function(component, event) {
        var changeValue = event.getParam("value");
        component.set("v.newInvoice.DocumentType__c", changeValue);
    },

    saveInvoice: function(component, event, helper) {
		var paymenttype = component.get("v.newInvoice.Payment_Type__c");
        var paymentmethod = component.get("v.newInvoice.Payment_Method__c");     

        var allValid = component.find('field').reduce(function(validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);


        if (allValid) {
            if (component.get("v.value") == "Boleta") {
                if (paymentmethod.trim == '' || paymentmethod == 0) {
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Error!",
                        "message": "Debe informar el campo metodo de pago.",
                        "type": "error"
                    });
                    toastEvent.fire();
                } else
                	helper.saveInvoice(component);
            } else {
                var hes = component.get("v.newInvoice.HES__c");
                var oc = component.get("v.newInvoice.OC__c");
                if ((hes != null && hes.trim() != '' && oc != null && oc.trim() != '') ||
                     ((oc == null || oc.trim() == '') && (hes == null || hes.trim() == ''))) {
                   
                    if (paymentmethod.trim == '' || paymentmethod == 0 || paymenttype.trim == '' || paymenttype == 0){
                        var toastEvent = $A.get("e.force:showToast");
                        toastEvent.setParams({
                            "title": "Error!",
                            "message": "Debe informar el campo metodo de pago y tipo de pago.",
                            "type": "error"
                        });
                    	toastEvent.fire();
                    } else                      
                    	helper.saveInvoice(component);
                } else {
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Error!",
                        "message": "Debe informar el campo OC y HES o no otogarles valores.",
                        "type": "error"
                    });
                    toastEvent.fire();
                }
            }
        } else {
            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Error!",
                "message": "Debe completar todos los campos obligatorios del formulario.",
                "type": "error"
            });
            toastEvent.fire();
        }


    },

    onChangeProduct: function(component, event, helper) {
        var changeValue = component.get("v.newInvoice.Product__c");
        if (changeValue != '') {
            helper.getProductInfo(component, changeValue);
        } else {
            component.set('v.newInvoice.Product_Code__c', '');
            component.set('v.newInvoice.Description_Product__c', '');
            component.set('v.newInvoice.AF__c', false);
        }

    },

    totatAmountCalc: function(component, event, helper) {
        var precio = component.get("v.newInvoice.Amount__c");
        var cantidad = component.get("v.newInvoice.AgreementAmount__c");
        if (precio != null || precio != 0) {
            if(cantidad != null && cantidad != 0){
               precio *= cantidad;
               component.set("v.newInvoice.InvoicedAmount__c", precio);
               component.set("v.newInvoice.TotalBilling__c", precio.toString());
            }
        } 

        var total = component.get("v.newInvoice.TotalBilling__c");
        var getiva = component.get("v.newInvoice.Taxes__c");
        //if(component.get("v.value") == "Factura"){
            if(total != null && getiva != null){
                var iva = total * 0.19;
                var total_pagar = iva + parseInt(total);
                component.set("v.newInvoice.Taxes__c",  Math.round(iva));
                component.set("v.newInvoice.InvoicedAmount__c", Math.round(total_pagar).toString());
                component.set("v.newInvoice.TotalAmountBilled__c", Math.round(total_pagar).toString());
            }
       /* } else {
            if(total != null){
                component.set("v.newInvoice.InvoicedAmount__c", total);
                component.set("v.newInvoice.TotalAmountBilled__c", total.toString());
            }
        }   */     
    },
	
    // Modificación para Custom Dependent Picklist 25-01-2021 cigatica@ayesa.com
    
    onControllerFieldChange: function(component, event, helper) {     
        var controllerValueKey = event.getSource().get("v.value"); // get selected controller field value
        var depnedentFieldMap = component.get("v.depnedentFieldMap");        
        
        if (component.get("v.value") == "Boleta") 
            controllerValueKey = 'B';
        
        if (controllerValueKey != '--None--') {
            var ListOfDependentFields = [];
            for (var key in depnedentFieldMap) {
                if (key.split(';')[1] == controllerValueKey) {
                    controllerValueKey = key;
                    ListOfDependentFields = depnedentFieldMap[controllerValueKey];
                }
            }
            
            if(ListOfDependentFields.length > 0){
                component.set("v.bDisabledDependentFld" , false);  
                helper.fetchDepValues(component, ListOfDependentFields);    
            }else{
                component.set("v.bDisabledDependentFld" , true); 
                component.set("v.listDependingValues", { key: '0', value: '--None--'});
            }  
            
        } else {
            component.set("v.listDependingValues", { key: '0', value: '--None--'});
            component.set("v.bDisabledDependentFld" , true);
        }
    },
    
    // Fin Modificación

})