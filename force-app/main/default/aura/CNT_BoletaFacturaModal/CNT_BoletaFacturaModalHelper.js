({
    fetchPickListVal: function(component, fieldName, element, obj) {
        var action = component.get("c.getSelectedOptions");        
        action.setParams({
            "objObject": obj,
            "fld": fieldName
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                var fieldMap = [];
                for (var key in result) {
                    fieldMap.push({
                        key: key,
                        value: result[key]
                    });
                }
                component.set(element, fieldMap);
            }
        });
        $A.enqueueAction(action);
    },

    getAutofilledFields: function(component, recordId) {
        var action = component.get("c.getAutofilledFields");
        action.setParams({
            "cntBudgetId": recordId
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            var result = response.getReturnValue();
            if (state === "SUCCESS") {
                if (result[0] != null) {
                    component.set('v.newInvoice.PointofDelivery__c', result[0]);
                    component.set('v.podName', result[4]);
                }
                if (result[1] != null) component.set('v.newInvoice.RUT__c', result[1]);
                if (result[2] != null) component.set('v.newInvoice.Sales_Number__c', result[2]);
                if (result[3] != null) component.set('v.newInvoice.Contract_Number__c', result[3]);
                if (result[5] != null) component.set('v.newInvoice.TotalAmountBilled__c', Math.round(result[5]).toString());
                component.set("v.newInvoice.InvoicedAmount__c", Math.round(result[5]));
                if (result[5] != null) component.set('v.newInvoice.Amount__c', Math.round(result[5]));        
                
                console.log('Amount__c: ' + component.get('v.newInvoice.Amount__c'));
                console.log('TotalAmountBilled__c: ' + component.get('v.newInvoice.TotalAmountBilled__c'));
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        console.log("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
    
    getAmonutFromServer: function(component) {

        //if(component.get("v.value") == "Factura") {
            if (component.get('v.newInvoice.TotalAmountBilled__c') != null) {
                var num = Math.round(component.get('v.newInvoice.TotalAmountBilled__c'));
                var neto = num / 1.19;
                var iva = num - neto;
                component.set('v.newInvoice.Taxes__c', Math.round(iva));
                component.set('v.newInvoice.TotalBilling__c', Math.round(neto));
                component.set("v.newInvoice.InvoicedAmount__c", Math.round(neto));
                component.set('v.newInvoice.Amount__c', Math.round(neto));
                
                console.log('num: ' + num);
                console.log('iva: ' + iva);
                console.log('neto: ' + neto);
            }
        //}
        
        console.log('Taxes__c: ' + component.get('v.newInvoice.Taxes__c'));
        console.log('TotalBilling__c: ' + component.get('v.newInvoice.TotalBilling__c'));
        console.log('Amount__c: ' + component.get('v.newInvoice.Amount__c'));
        console.log('TotalAmountBilled__c: ' + component.get('v.newInvoice.TotalAmountBilled__c'));
        console.log('InvoicedAmount__c: ' + component.get('v.newInvoice.InvoicedAmount__c'));                            
    },

    getProductList: function(component) {
        var action = component.get("c.getProductList");

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var result = response.getReturnValue();
                component.set('v.productOptions', result);
            }
        });
        $A.enqueueAction(action);
    },

    getProductInfo: function(component, productName) {
        var action = component.get("c.getProductInfo");
        action.setParams({
            "productName": productName
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            var result = response.getReturnValue();

            if (state === "SUCCESS") {
                if (result[0] != null) component.set('v.newInvoice.Product_Code__c', result[0]);
                if (result[1] != null) component.set('v.newInvoice.Description_Product__c', result[1]);
                if (result[2] != null) {
                    var bool = false;
                    if (result[2] == "true") {
                        bool = true;
                    }
                    component.set('v.newInvoice.AF__c', bool);
                }
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " +
                            errors[0].message);
                    }
                } else {
                    console.log("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },

    saveInvoice: function(component) {

        var action = component.get("c.saveBudget");
        action.setParams({
            "newInvoice": component.get("v.newInvoice"),
            "cntBudgetId": component.get("v.recordId")
        });

        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Success!",
                    "message": "El registro de " + component.get("v.value") + " se ha guardado correctamente.",
                    "type": "success"
                });
                toastEvent.fire();

                var urlEvent = $A.get("e.force:navigateToURL");
                urlEvent.setParams({
                    "url": "/lightning/r/Invoice__c/" + response.getReturnValue() + "/view"
                });
                urlEvent.fire();
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
                        alert("Error message: " +
                            errors[0].message);
                    }
                } else {
                    alert("Unknown error");
                }
            }
        });
        $A.enqueueAction(action);
    },
	
    // Modificación para Custom Dependent Picklist 25-01-2021 cigatica@ayesa.com
    
    fetchPicklistValues: function(component,objDetails,controllerField, dependentField) {
        // call the server side function  
        var action = component.get("c.getDependentMap");
        // pass paramerters [object definition , contrller field name ,dependent field name] -
        // to server side function 
        action.setParams({
            'objDetail' : objDetails,
            'contrfieldApiName': controllerField,
            'depfieldApiName': dependentField 
        });
        //set callback   
        action.setCallback(this, function(response) {
            if (response.getState() == "SUCCESS") {
                //store the return response from server (map<string,List<string>>)  
                var StoreResponse = response.getReturnValue();
                                
                // once set #StoreResponse to depnedentFieldMap attribute 
                component.set("v.depnedentFieldMap",StoreResponse);
                
                // create a empty array for store map keys(@@--->which is controller picklist values) 
                var listOfkeys = []; // for store all map keys (controller picklist values)
                var ControllerField = []; // for store controller picklist value to set on lightning:select. 
                
                // play a for loop on Return map 
                // and fill the all map key on listOfkeys variable.
                
                for (var singlekey in StoreResponse) {
                    var vals = singlekey.split(';');
                    listOfkeys.push({
                        key: vals[1],
                        value: vals[0]
                    });
                }
                
                //set the controller field value for lightning:select
                if (listOfkeys != undefined && listOfkeys.length > 0) {
                    ControllerField.push({
                        key: '0',
                        value: '--None--'
                    });
                }
                
                for (var i = 0; i < listOfkeys.length; i++) {
                    if (listOfkeys[i].value != 'BOLETA')                    
                    	ControllerField.push({
                            key: listOfkeys[i].key,
                            value: listOfkeys[i].value
                        });
                }  
                
                // set the ControllerField variable values to country(controller picklist field)
                component.set("v.listControllingValues", ControllerField);
            }else{
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Error!",
                    "message": "Ha ocurrido un error, favor intente más tarde",
                    "type": "error"
                });
                toastEvent.fire();
            }
        });
        $A.enqueueAction(action);
    },
    
    fetchDepValues: function(component, ListOfDependentFields) {
        // create a empty array var for store dependent picklist values for controller field  
        var dependentFields = [];
        dependentFields.push({
                key: '0',
                value: '--None--'
            });
        
        for (var i = 0; i < ListOfDependentFields.length; i++) {
            dependentFields.push({
                key: ListOfDependentFields[i][1],
                value: ListOfDependentFields[i][0]
            });        
        }
        // set the dependentFields variable values to store(dependent picklist field) on lightning:select
        component.set("v.listDependingValues", dependentFields);
        
    },
    
    // Fin Modificación

})