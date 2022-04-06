({
	init : function(cmp,event,helper){
        console.log('inDoInit');
        cmp.set("v.spinnerControl", true);
        this.sendSEC(cmp, event);
        //cmp.set("v.spinnerControl", false);
    },
    sendSEC: function(cmp,event,helper){
    	var casePId = cmp.get("v.recordId");
        var action = cmp.get("c.invokePutCaseSEC");
        var action2 = cmp.get("c.createCaseComment");
        action.setParams({ "recordCaseId": casePId });
        action2.setParams({ "recordCaseId": casePId });
        action.setCallback(this, function (response) {
            var status = response.getState();
            var result = response.getReturnValue();
            console.log('getCase result='+result);
            var errorMessage;
            var errorCodigo;
            var dismissActionPanel = $A.get("e.force:closeQuickAction");
            if(result && result.Codigo == 0) {
                console.log('result.recordId='+result.Glosa);
                //var recordIdToRedirect = /*(result.convertedAccountId) ? (result.convertedAccountId) :*/ result.recordId; 
                errorMessage = result.Glosa;
                var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        title : errorMessage,
                        message: ' ',
                        key: 'info_alt',
                        type: 'success',
                        mode: 'dismissible',
                        mode: 'pester',
                        duration: '5000'
                    });
                    //console.log('recordIdToRedirect='+recordIdToRedirect);
                //his.closeCurrentTab(cmp, event, helper, recordIdToRedirect);
                cmp.set("v.spinnerControl", false);
                toastEvent.fire();
                dismissActionPanel.fire();
                
            }else{
                if(result && result.Codigo != 0) {
                    console.log('result.Codigo='+result.Codigo);
                        errorCodigo = result.Codigo;
                        errorMessage = result.Glosa;
                            var toastEvent = $A.get("e.force:showToast");
                            toastEvent.setParams({
                                title : $A.get("Error"),
                                message: 'Mensaje: ' + errorMessage + '. Codigo de Error: ' + errorCodigo,
                                key: 'info_alt',
                                type: 'error',
                                mode: 'dismissible',
                                mode: 'pester',
                                duration: '5000'
                            });
                            toastEvent.fire();
                         
                        //this.showErrorOnField(cmp, result.fieldName);
                        cmp.set('v.spinnerControl', false);
                        dismissActionPanel.fire();

                    }
            }
            
           
        });
        action2.setCallback(this,function(response){
            var state= response.getState();
            $A.log(response);
            if(state == "SUCCESS"){
                console.log('Resultado: ' + response.getReturnValue());
                if(response.getReturnValue() == true){
                    console.log('Se generó correctamente el comentario de caso');
                }else{
                    console.log('ERROR, NO se generó el comentario de caso');
                }
            }
        });
        $A.enqueueAction(action);
        $A.enqueueAction(action2);
    }/*,
    closeCurrentTab : function(cmp, event, helper, recordIdToRedirect) {
        var casoOldId = cmp.get("v.recordId");
        console.log('recordIdToRedirect='+recordIdToRedirect);
        var urlEvent = $A.get("e.force:navigateToURL");
        urlEvent.setParams({
          "url": "/lightning/r/Case/"+recordIdToRedirect+"/view?ws=%2Flightning%2Fr%2FCase%2F"+casoOldId+"%2Fview"
        });
        urlEvent.fire();
        
    },
    closeQuickAndErrorMessage: function (component, event, message) {
        $A.get("e.force:closeQuickAction").fire();
        
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            title: $A.get("Attention"),
            message: message,
            key: 'info_alt',
            type: 'error',
            mode: 'dismissible',
            mode: 'pester'
        });
        toastEvent.fire();
        cmp.set("v.spinnerControl", false);
    }*/
})