/**
 * Created by alonso sotomayor.
 */
({
    getRecordTypeId: function (component) {
        var action = component.get('c.getRecordTypeId');
        var objName = component.get('v.sObjectName');
        
        var lowService = component.get('v.cancellationContract');
        
        if (lowService) {
            objName = 'cancellationContract';
        }
        
        action.setParams({
            'objectName': objName
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                // set contactApplicant
                var id = response.getReturnValue();
                component.set('v.recordTypeIdCase', id);
            }
        });
        $A.enqueueAction(action);
    },
    changeOwner: function (component, event) {
        var val = event.getParams().value[0];
        if (val != null && typeof val === 'string') {
            this.setDataOwner(component, event, val);
        }
    },
    
    setDataOwner: function (component, event, val) {
        var action = component.get('c.searchContactOwner');

        console.log('action'+ action);
        action.setParams({
            "contactId": val
        });
        console.log('')
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                // set contactApplicant
                var account = response.getReturnValue();
                component.set('v.accountApplicant', account);
                this.setNaturalJuridica(component);
            }
        });
        $A.enqueueAction(action);
    },
    
    generateAccountTypeValues: function (component) {
        const values = [
            {'label': 'Natural', 'value': 'Nat'},
            {'label': 'Juridica', 'value': 'Jur'}
        ];
        component.set("v.optionsAccountType", values);
        //component.set("v.natJurValue", 'Nat');
    },
    setNaturalJuridica: function (component) {
        const acc = component.get('v.accountApplicant');
        component.set('v.company', '');
        console.log('acc' + acc);
        if (acc.AssociatedAccountType__c.includes('B2B')) {
        //if(acc.RecordType.Name.includes('B2B')) {
            component.set("v.natJurValue", "Jur");
            component.set('v.company', acc.Account.Name);
        //} else if(acc.RecordType.Name.includes('B2C')){
        } else if (acc.RecordType.Name.includes('B2C')) {
            component.set('v.accountContactLegalReprecentId', null);
            if(component.find('CustomerSignedId')){
                component.find('CustomerSignedId').reset();
            }
            component.set("v.natJurValue", "Nat");
        } else {
            component.set('v.accountContactLegalReprecentId', null);
            if(component.find('CustomerSignedId')){
                component.find('CustomerSignedId').reset();
            }
            component.set("v.natJurValue", "Nat");
        }
    },
    save: function (component, event) {
        let caseValues = {};
        let contractValues = {};
        const natJur = component.get("v.natJurValue");
        var fields = event.getParam("fields");
        let sObjectName = component.get('v.sObjectName');  

        // Contract
        //contractValues.CNT_Record_Type_Case__c = component.find('CNT_Record_Type_Case__c').get("v.value");
        //(JSON.stringify(component.find('CNT_Applicant_Name__c').get("v.value")) != "[]")
        contractValues.CNT_Applicant_Name__c = component.find('CNT_Applicant_Name__c').get("v.value")  != null && component.find('CNT_Applicant_Name__c').get("v.value") !== '' && JSON.stringify(component.find('CNT_Applicant_Name__c').get("v.value")) != "[]"  ? component.find('CNT_Applicant_Name__c').get("v.value") : null;
        contractValues.CNT_Type_Case_Applicant__c = component.find('CNT_Type_Case_Applicant__c').get("v.value");

        if(natJur === "Jur") {
            contractValues.CustomerSignedId = component.find('CustomerSignedId').get("v.value")  != null && component.find('CustomerSignedId').get("v.value") !== '' && JSON.stringify(component.find('CustomerSignedId').get("v.value")) != "[]"  ? component.find('CustomerSignedId').get("v.value") : null;
            contractValues.CNT_Contact_Type_Legal_Represent__c = component.find('CNT_Contact_Type_Legal_Represent__c').get("v.value");
            caseValues.CNT_Name_of_the_legal_represent__c = component.find('CustomerSignedId').get("v.value")  != null && component.find('CustomerSignedId').get("v.value") !== '' && JSON.stringify(component.find('CustomerSignedId').get("v.value")) != "[]"  ? component.find('CustomerSignedId').get("v.value") : null;
        } 

        // Case
        caseValues.ContactId = fields['ContactId'] != null && fields['ContactId'] !== '' ? fields['ContactId'] : null;
        caseValues.CNT_Owner_Type__c = component.find("CNT_Owner_Type__c").get('v.value');
        caseValues.Reason = fields['Reason'];
        caseValues.SubCause__c = fields['SubCause__c'];
        caseValues.Category__c = fields['Category__c'];
        caseValues.PointofDelivery__c = fields['PointofDelivery__c'];
        caseValues.RecordTypeId = component.get('v.recordTypeIdCase');
        caseValues.Address__c = component.get('v.addressId') != null && component.get('v.addressId') !== '' ? component.get('v.addressId') : null;
        
        if(sObjectName === 'Contact'){
            contractValues.CNT_Record_Type_Case__c = 'CL Alta Contrato';
        }
        if(sObjectName === 'cancellationContract'){
            contractValues.CNT_Record_Type_Case__c = 'CL Baja de Contrato';
        }
        if (sObjectName === 'PointofDelivery__c' ) {
            caseValues.CNT_Potencia__c = component.get('v.previousCase').CNT_Potencia__c;
            caseValues.CNT_Conexion_Transitoria__c = component.get('v.previousCase').CNT_Conexion_Transitoria__c;
            caseValues.CNT_Public_Ilumination__c = component.get('v.previousCase').CNT_Public_Ilumination__c;
            contractValues.CNT_Record_Type_Case__c = 'CL Cambio de Contrato';
        }
        console.log('Case values ::: '+ caseValues);
        console.log('Contract Values ::: '+ contractValues);
        this.caseSave = caseValues;
        this.contractSave = contractValues;
        component.set('v.contactsErros',false);

        var action = component.get('c.validateCase');
        action.setParams({
            "cs": caseValues,
            "cn": contractValues,
            "natJur": natJur
        });
        action.setCallback(this, function (response) {
            var state = response.getState();
            
            if (state === 'SUCCESS') {
                var errors = JSON.parse(response.getReturnValue());
                this.activeError(component, errors, natJur);
                
                if (!component.get('v.error')) {

                    var val = component.get('c.validateContacts');
                    val.setParams({
                        "cs": this.caseSave,
                        "cn" : this.contractSave
                    });
                    val.setCallback(this, function (r) {
                        var sts = r.getState();
                        
                        if (sts === 'SUCCESS') {
                            let dat = r.getReturnValue();
                            debugger;
                            if(JSON.parse(dat).length != 0){
                                component.set('v.contactsErros',true);
                                component.set('v.contactsErrosDetail',JSON.parse(dat));
                            } else {
                                var act = component.get('c.saveCase');
                                act.setParams({
                                    "cs": this.caseSave,
                                    "contractData" : this.contractSave
                                });
                                act.setCallback(this, function (res) {
                                    var sts = res.getState();
                                    
                                    if (sts === 'SUCCESS') {
                                        if(res.getReturnValue().includes('Error:')){
                                            component.set('v.errorAsset',true);
                                            component.set('v.errorAssetData',res.getReturnValue());
                                        } else if(component.get('v.mCase')) {
                                                this.caseSave.Id = res.getReturnValue();
                                                var compEvent = component.getEvent("addCaseInRow");
                                                compEvent.setParam("caseAdd", this.caseSave);
                                                compEvent.fire();
                                                
                                                this.resetFields(component);
                                        } else {
                                            this.navToRecord(res.getReturnValue(),component);
                                            
                                        }
                                    }
                                });
                                $A.enqueueAction(act);
                            }
                            
                        } 
                    });
                    $A.enqueueAction(val); 
                }
            }
        });
        $A.enqueueAction(action);
    }, activeError: function (component, errors, natJur) {
        component.set('v.error', false);
        
        this.acError('CNT_Applicant_Name__c', errors.CNT_Applicant_Name__c, component);
        this.acError('ContactId', errors.ContactId, component);
        this.acError('Reason', errors.Reason, component);
        this.acError('SubCause__c', errors.SubCause__c, component);
        this.acError('Category__c', errors.Category__c, component);
        this.acError('CNT_Type_Case_Applicant__c', errors.CNT_Type_Case_Applicant__c, component);
        this.acError('CNT_Owner_Type__c', errors.CNT_Owner_Type__c, component);
        
        if (natJur != null && natJur === 'Jur') {
            this.acError('CustomerSignedId', errors.CustomerSignedId, component);
            this.acError('CNT_Contact_Type_Legal_Represent__c', errors.CNT_Contact_Type_Legal_Represent__c, component);
        }
    },
    acError: function (componentName, active, component) {
        var cmp = component.find(componentName);
        if (active) {
            if (cmp) {
                component.set('v.error', true);
                $A.util.addClass(cmp, 'slds-has-error');
            }
        } else {
            if (cmp) {
                $A.util.removeClass(cmp, 'slds-has-error');
            }
        }
    },
    navToRecord: function (id,component) {
        if(!component.get('v.isInApp')){
            var navEvt = $A.get("e.force:navigateToSObject");
            navEvt.setParams({
                "recordId": id
            });
            navEvt.fire();
        }else{
            window.location = '/'+id;
        }
        /*component.find("navId").navigate({
            type: 'standard__recordPage',
            attributes: {
                recordId : id, // Hardcoded record id from given objectApiName
                actionName: 'view',  //Valid values include clone, edit, and view.
                objectApiName: 'Case' //The API name of the record’s object
            }}, true);*/
    },
    getAddresPod: function (component) {
        var action = component.get('c.getAddresPod');
        var podId = component.get('v.PoDId');
        
        action.setParams({
            "pointId": podId
        });
        
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var resp = response.getReturnValue();
                if (resp != null && resp !== "") {
                    component.set('v.addressId', resp);
                }
                
            }
        });
        $A.enqueueAction(action);
    },
    resetFields: function (component){
        component.find('ContactId').reset();
        component.set('v.contactOwnerId', null);
        component.find('CNT_Applicant_Name__c').reset();
        component.set('v.contactId', null);
        if(component.find('CustomerSignedId')) {
            component.find('CustomerSignedId').reset();
        }
        component.set('v.accountContactLegalReprecentId', null);
    },
    getInfoPreviousCase: function (component) {
        var action = component.get('c.getDataPreviousCase');
        var podId = component.get('v.PoDId');
        
        action.setParams({
            "podId": podId
        });
        
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                var resp = response.getReturnValue();
                if (resp != null && resp !== "") {
                    console.log(JSON.stringify(resp));
                    component.set('v.previousCase',resp);
                }
            }
        });
        $A.enqueueAction(action);
    },
    caseSave: {},
    contractSave: {}
    
})