/**
 * Created by carlos.bastidas on 4/17/2019.
 */
({
    doInit: function (component, event, helper) {
        var objName = component.get('v.sObjectName');
        var rId = component.get('v.recordId');

        helper.getRecordTypeId(component);
        helper.generateAccountTypeValues(component);

        if (objName === 'Contact') {
            component.set('v.contactId', rId);
            debugger;
            var podComp  = component.find('PointofDelivery__c');
            
        }
        if (objName === 'PointofDelivery__c') {
            component.set('v.PoDId', rId);
            helper.getAddresPod(component);
            //GMEG
            //if(!component.get('v.cancellationContract')){
            helper.getInfoPreviousCase(component);
            //}
        }
        if (component.get('v.natJurValue') != null) {
            var contactId = component.get('v.contactId');
            helper.setDataOwner(component, event, contactId);
        }
        setTimeout(function () {
            component.set('v.renderContract', true);
        }, 5000);
    },
    save: function (component, event, helper) {
        helper.save(component, event);
        event.preventDefault();
    },
    changeOwner: function (component, event, helper) {
        helper.changeOwner(component, event);
    },
    // this function automatic call by aura:waiting event
    showSpinner: function (component, event, helper) {
        // make Spinner attribute true for display loading spinner
        component.set("v.Spinner", true);
    },
    // this function automatic call by aura:doneWaiting event
    hideSpinner: function (component, event, helper) {
        // make Spinner attribute to false for hide loading spinner
        component.set("v.Spinner", false);
    },
    handleApplicantNameChange: function (component, event, helper) {
        let newApplicantName = event.getSource().get("v.value");
        component.set("v.contractNew.CNT_Applicant_Name__c", newApplicantName);
    },
    contractForm: function (component, event, helper) {
    }

})