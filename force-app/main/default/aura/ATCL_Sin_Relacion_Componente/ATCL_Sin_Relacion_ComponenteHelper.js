({
    handleConfirmDialogYes : function(component, event, helper) {
        var idServiceProduct = component.get("v.recordId");
        component.set('v.showConfirmDialog', false);
        var dismissActionPanel = $A.get("e.force:closeQuickAction");

        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title : 'Se ha eliminado correctamente la relación entre el Contacto y Suministro',
            message: ' ',
            key: 'info_alt',
            type: 'success',
            mode: 'dismissible',
            mode: 'pester',
            duration: '5000'
        });
        toastEvent.fire();
        dismissActionPanel.fire();
        
        var record = component.get('v.record');
        var workspaceAPI = component.find("workspace");
        
        workspaceAPI.openTab({url:'/lightning/r/Contact/'+ record.Contact__c + '/view', focus: true});
        workspaceAPI.closeTab({idServiceProduct});
                               
  },
                               
})