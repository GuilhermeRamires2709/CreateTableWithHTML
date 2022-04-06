/**
 * Created by carlos.bastidas on 5/8/2019.
 * Modify by Yisuka Marquez 12/7/2019
 */
({
    
   closeModal : function(component, event, helper) {
      // Close the action panel
      var dismissActionPanel = $A.get("e.force:closeQuickAction");
      dismissActionPanel.fire();
    },
    
   cancelCase: function (component, event , helper) {

        const server = component.find('server');
        let recordId = component.get("v.recordId");
        //var contractObject = component.get("v.simpleRecord");
        debugger;
        server.callServerPromise(
        component.get("c.cancelarCaseButton"),
            { 
              caseId: recordId
            }
              ).then($A.getCallback(response => {
                 console.log(response);
            debugger;
                    if (response === "The case cannot be canceled or does not have sufficient privilege."){
                        helper.insufprivileges(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                    }else if (response === "The case is already canceled.") { 
                        helper.alreadycanceled(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire(); 
                    }else if (response === "Please, complete Potency before continue"){
                        helper.completePotency(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                    }else if (response === "The case is closed. The case cannot be canceled in this state." ){
                        helper.caseClosed(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                    }else if (response === "This is not possible cancel this case."){ 
                        helper.notPossibleCancel(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                    }else if (response === "This case has been canceled."){
                        helper.successful(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                   }else if (response === "OK") {
                        helper.okCancel(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                   }else if (response === "The request has already been successfully completed in Synergia. The case cannot be canceled in this state."){ 
                        helper.successfullySyn(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire(); 
                   }else if (response ==="Request cancellation from Synergia or Wait for the request to return to Salesforce."){
                        helper.waitingforSynergia(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                   }else if (response === "El caso esta en estado paralizado. No se puede cancelar."){
                        helper.paralizedSale(response);
                        $A.get("e.force:closeQuickAction").fire();
                        $A.get('e.force:refreshView').fire();
                   }
               }))
                .catch($A.getCallback(errors => {
                 console.log(JSON.parse(JSON.stringify(errors)));
           }));
     },
      
})