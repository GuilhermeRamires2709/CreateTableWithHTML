({
    doInit: function (component, event, helper) {
        var action = component.get('c.getRecordTypeAccountContacts');
        helper.callAction(component, action, function (response) {
            var state = response.getState();
            if (state === 'SUCCESS') {
                if(response.getReturnValue() === 'Error') {
                    alert('Permisos insuficientes para ejecutar esta acción, por favor contacte a su administrador.');
                    window.close();
                } else {
                    component.set("v.recordTypesInput", JSON.parse(response.getReturnValue()));
                    console.log(response.getReturnValue());
                    console.log('aqui');
                }
            }
        });
    },
    showB2bController: function (component, event, helper) {
        component.set("v.showB2CSection", false);
    },
    showB2cController: function (component, event, helper) {
        component.set("v.showB2CSection", true);
    },
    showSpinner: function (component, event, helper) {
        component.set("v.Spinner", true);
    },
    hideSpinner: function (component, event, helper) {
        component.set("v.Spinner", false);
    },
    handleSelect: function (component, event, helper) {
        component.set("v.showB2CSection2", false);
        var selectedMenuItemValue = event.getParam("value");
        console.log(selectedMenuItemValue);
        if (selectedMenuItemValue == "Persona Natural") {
            component.set("v.showB2CSection", true);
        } else if (selectedMenuItemValue == "Persona Jurídica") {
            component.set("v.showB2CSection", false);
        }
        component.set("v.menuSelectedItem", selectedMenuItemValue);
    },
    saveProcess: function (component, event, helper) {
        var accountParam = null;
        var ownerParam = null;
        var applicantParam = null;
        var legalRepParam = null;
        var NaturalParam = false;

        //console.log(action);
        if (component.get('v.showB2CSection')) {
            if (component.get('v.showB2CSection2')) {
                accountParam = component.find("cmpAccB2c").getFormValues();
                ownerParam = component.find("cmpB2c2").getFormValues();
                applicantParam = component.find("cmpB2c").getFormValues();
                legalRepParam = null;
                NaturalParam = true;
            } else {
                accountParam = component.find("cmpAccB2c").getFormValues();
                ownerParam = component.find("cmpB2c").getFormValues();
                applicantParam = null;
                legalRepParam = null;
                NaturalParam = true;
            }

        } else {
            if (!component.find("RepresentanteElse1").get("v.checked") && component.find("PropietarioElse1").get("v.checked")) {
                debugger;
                accountParam = component.find("cmpAccB2b").getFormValues();
                ownerParam = component.find("cmpB2b").getFormValues();
                applicantParam = null;
                legalRepParam = component.find("cmpB2b3").getFormValues();
                NaturalParam = false;
            } else if (!component.find("RepresentanteElse1").get("v.checked") && !component.find("PropietarioElse1").get("v.checked")) {
                if (!component.find("RepresentanteElse2").get("v.checked")) {
                    debugger;
                    accountParam = component.find("cmpAccB2b").getFormValues();
                    ownerParam = component.find("cmpB2b2").getFormValues();
                    applicantParam = component.find("cmpB2b").getFormValues();
                    legalRepParam = component.find("cmpB2b3").getFormValues();
                    NaturalParam = false;
                } else {
                      debugger;
                    accountParam = component.find("cmpAccB2b").getFormValues();
                    ownerParam = component.find("cmpB2b").getFormValues();
                    applicantParam = component.find("cmpB2b2").getFormValues();
                    legalRepParam = null;
                    NaturalParam = false;
                }

            } else if (component.find("RepresentanteElse1").get("v.checked") && !component.find("PropietarioElse1").get("v.checked")) {
                accountParam = component.find("cmpAccB2b").getFormValues();
                ownerParam = component.find("cmpB2b2").getFormValues();
                applicantParam = component.find("cmpB2b").getFormValues();
                legalRepParam = null;
                NaturalParam = false;
            } else {
                accountParam = component.find("cmpAccB2b").getFormValues();
                ownerParam = component.find("cmpB2b").getFormValues();
                applicantParam = null;
                legalRepParam = null;
                NaturalParam = false;
            }
        }
        var action = component.get('c.saveAccountContacts');
        
        if (accountParam != 'ERR' && ownerParam != 'ERR' && applicantParam != 'ERR' && legalRepParam != 'ERR') {
            component.set("v.error", false);
            action.setParams({
                'acc': accountParam,
                'owner': ownerParam,
                'applicant': applicantParam,
                'legalRep': legalRepParam,
                'natural': NaturalParam
            });
            helper.callAction(component, action, function (response) {
                var state = response.getState();
                if (state === 'SUCCESS') {
                    debugger;
                    console.log(response.getReturnValue());
                    var resp = JSON.parse(response.getReturnValue());
                    if (resp.err != undefined && resp.err != null) {
                        console.log(resp.err);
                        debugger;
                        
                        if(resp.err==="Número RUN/RUT no válido"){
                            component.set("v.error1", true);
                            var action = component.get('c.errorFalseRut');
                            $A.enqueueAction(action);
                            return;
                        }
                        
                        if (resp.err==="El Teléfono principal no tiene el formato correcto."){
                            component.set("v.error2", true);
                            var action = component.get('c.errorFalsePhone');
                            $A.enqueueAction(action);
                            return;                     
                        }
                        var compare = "Insert failed. First exception on row 0; first error: CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY";
                        var retval0 = resp.err.startsWith(compare);
                        if(retval0){
                            component.set("v.error1", true);
                            var action = component.get('c.errorFalseRut');
                            $A.enqueueAction(action);
                            return;   
                        }
                        /*"Insert failed. First exception on row 0; first error: CANNOT_INSERT_UPDATE_ACTIVATE_ENTITY, 
                           ALL_Contact_Trigger: execution of BeforeInsert\n\ncaused by: System.ListException: List index out of bounds: 
                           -1\n\nClass.ECH_VFC110_UtilValidation.validarRunRut: line 804, column 1\nClass.ECH_VFC110_UtilValidation.
                           checkIdentityNumberMod11: line 543, column 1\nClass.ECH_VFC110_UtilValidation.doContactValidation: line 501, 
                           column 1\nClass.ECH_VFC116_ContactHandler.OnBeforeInsert: line 45, column 1\nClass.ATCL_CONTACT_DEL_HANDLER.OnBeforeInsert: 
                           line 41, column 1\nTrigger.ALL_Contact_Trigger: line 52, column 1: []"*/
                        
                        if(resp.err==="Both First Name and Last Name have to have at least three (3) characters"){
                            component.set("v.error3", true);
                            var action = component.get('c.errorFalseFirstLastName');
                            $A.enqueueAction(action);
                            return;
                        }
                        if(resp.err==="Número RUN/RUT no válido, contacto ya existente"){
                            component.set("v.error4", true);
                            var action = component.get('c.errorFalseExistingContact');
                            $A.enqueueAction(action);
                            return;                            
                        }
                        if(resp.err==="El móvil no tiene el formato correcto."){
                            
                            component.set("v.error5", true);
                            var action = component.get('c.errorFalseMobilePhone');
                            $A.enqueueAction(action);
                            return; 
                        }
                        if(resp.err ==="Insert failed. First exception on row 0; first error: REQUIRED_FIELD_MISSING, Faltan campos obligatorios: [Nombre de la cuenta]: [Nombre de la cuenta]"){                            
                            component.set("v.error6", true);
                            var action = component.get('c.errorFalseAccountN');
                            $A.enqueueAction(action);
                            return; 
                        }
                        //Email del contacto
                        var compare = "[Email]";
                        var retval1 = resp.err.endsWith(compare);
                        if(retval1){
                            component.set("v.error7", true);
                            var action = component.get('c.errorFalseEmail');
                            $A.enqueueAction(action);
                            return;
                        }
                        //Email de la cuenta
                        var compare2 = "[PrimaryEmail__c]";
                        var retval2 = resp.err.endsWith(compare2);     
                        if(retval2){
                            component.set("v.error8", true);
                            var action = component.get('c.errorFalsePrimaryEmail');
                            $A.enqueueAction(action);
                            return;
                        }
                        
                        helper.showNotice(component, "Error", "Error", resp.err);
                        console.log('error');
                        return;
                    }
                    var action = component.get('c.errorFalseAll');
                    $A.enqueueAction(action);
                    
                    if (component.get('v.showB2CSection')) {
                        if (component.get('v.showB2CSection2')) {
                            console.log('owner,applicant');
                            component.set('v.applicantParam', resp.applicant);
                            component.set('v.ownerParam', resp.owner);
                            component.set('v.NaturalParam', 'Nat');
                            component.set('v.showCaseAction', true);
                        } else {
                            console.log('owner == applicant');
                            component.set('v.applicantParam', resp.owner);
                            component.set('v.ownerParam', resp.owner);
                            component.set('v.NaturalParam', 'Nat');
                            component.set('v.showCaseAction', true);
                        }
                    } else {
                        if (!component.find("RepresentanteElse1").get("v.checked") && component.find("PropietarioElse1").get("v.checked")) {
                            //owner == applicant, legalRep
                            console.log('owner == applicant, legalRep');
                            component.set('v.applicantParam', resp.owner);
                            component.set('v.ownerParam', resp.owner);
                            component.set('v.legalRepParam', resp.legalRep);
                            component.set('v.NaturalParam', 'Jur');
                            component.set('v.showCaseAction', true);
                        } else if (!component.find("RepresentanteElse1").get("v.checked") && !component.find("PropietarioElse1").get("v.checked")) {
                            if (!component.find("RepresentanteElse2").get("v.checked")) {
                                //owner, legalRep, applicant
                                console.log('owner, legalRep, applicant');
                                component.set('v.applicantParam', resp.applicant);
                                component.set('v.ownerParam', resp.owner);
                                component.set('v.legalRepParam', resp.legalRep);
                                component.set('v.NaturalParam', 'Jur');
                                component.set('v.showCaseAction', true);
                            } else {
                                //owner, applicant == legalRep
                                console.log('owner, applicant == legalRep');
                                component.set('v.applicantParam', resp.applicant);
                                component.set('v.ownerParam', resp.owner);
                                component.set('v.legalRepParam', resp.applicant);
                                component.set('v.NaturalParam', 'Jur');
                                component.set('v.showCaseAction', true);
                            }
                        } else if (component.find("RepresentanteElse1").get("v.checked") && !component.find("PropietarioElse1").get("v.checked")) {
                            //owner, applicant == legalRep
                            console.log('owner, applicant == legalRep');
                            component.set('v.applicantParam', resp.applicant);
                            component.set('v.ownerParam', resp.owner);
                            component.set('v.legalRepParam', resp.applicant);
                            component.set('v.NaturalParam', 'Jur');
                            component.set('v.showCaseAction', true);
                        } else {
                            //owner == applicant == legalRep
                            console.log('owner == applicant == legalRep');
                            component.set('v.applicantParam', resp.owner);
                            component.set('v.ownerParam', resp.owner);
                            component.set('v.legalRepParam', resp.owner);
                            component.set('v.NaturalParam', 'Jur');
                            component.set('v.showCaseAction', true);
                        }
                    }
                }
            });
        } else {
            component.set("v.error", true);
            console.log('ESTOY ACA CON CAMPOS VACIOS');
        }
    },
    onCheck: function (component, event, helper) {
        console.log('gmeg');
        var checkCmp = component.find("Propietario1");
        console.log(checkCmp);
        console.log(checkCmp.get("v.checked"));
        component.set('v.showB2CSection2', !checkCmp.get("v.checked"));
    },
    onCheckElse: function (component, event, helper) {
        if (!component.find("RepresentanteElse1").get("v.checked") && component.find("PropietarioElse1").get("v.checked")) {
            component.set('v.showB2CSection3', true);
            component.set('v.showB2CSection2', false);
        } else if (!component.find("RepresentanteElse1").get("v.checked") && !component.find("PropietarioElse1").get("v.checked")) {
            component.set('v.showB2CSection3', false);
            component.set('v.showB2CSection2', true);
            if (!component.find("RepresentanteElse2").get("v.checked")) component.find("RepresentanteElse2").set("v.checked", true);
            component.find("RepresentanteElse2").set("v.disabled", false);
        } else if (component.find("RepresentanteElse1").get("v.checked") && !component.find("PropietarioElse1").get("v.checked")) {
            component.set('v.showB2CSection3', false);
            component.set('v.showB2CSection2', true);
            component.find("RepresentanteElse2").set("v.checked", false);
            component.find("RepresentanteElse2").set("v.disabled", true);
        } else {
            component.set('v.showB2CSection3', false);
            component.set('v.showB2CSection2', false);
        }
    },
    onCheckSection2: function (component, event, helper) {
        if (component.get("v.showB2CSection2") && !component.find("RepresentanteElse2").get("v.checked") && !component.find("RepresentanteElse2").get("v.disabled")) {
            component.set('v.showB2CSection3', true);
        } else {
            component.set('v.showB2CSection3', false);
        }
    },
    
    errorFalseRut : function (component, event, helper){
        component.set("v.error2", false);
        component.set("v.error3", false);
        component.set("v.error4", false);
        component.set("v.error5", false);
        component.set("v.error6", false);
        component.set("v.error7", false);
        component.set("v.error8", false);
    },
    errorFalsePhone : function (component, event, helper){
        component.set("v.error1", false);
        component.set("v.error3", false);
        component.set("v.error4", false);
        component.set("v.error5", false);
        component.set("v.error6", false);
        component.set("v.error7", false);
        component.set("v.error8", false);
    },
    errorFalseFirstLastName : function (component, event, helper){
        component.set("v.error2", false);
        component.set("v.error1", false);
        component.set("v.error4", false);
        component.set("v.error5", false);
        component.set("v.error6", false);
        component.set("v.error7", false);
        component.set("v.error8", false);        
    },
    errorFalseExistingContact : function (component, event, helper){
        component.set("v.error3", false);
        component.set("v.error2", false);
        component.set("v.error1", false);
        component.set("v.error5", false);
        component.set("v.error6", false);
        component.set("v.error7", false);
        component.set("v.error8", false);
    },
    errorFalseMobilePhone : function (component, event, helper){
        component.set("v.error3", false);
        component.set("v.error2", false);
        component.set("v.error1", false);
        component.set("v.error4", false);
        component.set("v.error6", false);
        component.set("v.error7", false);
        component.set("v.error8", false);         
    },
    errorFalseAccountN : function (component, event, helper){
        component.set("v.error5", false);
        component.set("v.error3", false);
        component.set("v.error2", false);
        component.set("v.error1", false);
        component.set("v.error4", false);
        component.set("v.error7", false);
        component.set("v.error8", false);
    },
    errorFalseEmail : function (component, event, helper){
        component.set("v.error5", false);
        component.set("v.error3", false);
        component.set("v.error2", false);
        component.set("v.error1", false);
        component.set("v.error4", false);
        component.set("v.error6", false);
        component.set("v.error8", false);
    },
    errorFalsePrimaryEmail : function (component, event, helper){
        component.set("v.error5", false);
        component.set("v.error3", false);
        component.set("v.error2", false);
        component.set("v.error1", false);
        component.set("v.error4", false);
        component.set("v.error6", false);
        component.set("v.error7", false);
    },
    errorFalseAll : function (component, event, helper){
        component.set("v.error5", false);
        component.set("v.error3", false);
        component.set("v.error2", false);
        component.set("v.error1", false);
        component.set("v.error4", false);
        component.set("v.error6", false);
        component.set("v.error7", false);
        component.set("v.error8", false);
    },
 
 
    
});