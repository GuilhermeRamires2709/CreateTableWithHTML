({
    doInit : function(component, event, helper) {
        var record = component.get('v.record');
        if(record != null && record.TypeofRelationship__c == 0) {
             helper.handleConfirmDialogYes(component, event, helper);
        }
        
    },
})