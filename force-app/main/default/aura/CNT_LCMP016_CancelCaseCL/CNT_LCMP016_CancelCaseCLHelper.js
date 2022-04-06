/**
 * Created by carlos.bastidas on 5/8/2019.
 */
({
    closeModal: function () {
        $A.get("e.force:closeQuickAction").fire();
    },
    
    cancelCase: function (component) {
        debugger;
        component.get("v.simpleCase");
    },
    
    insufprivileges: function(component, event, helper){
        alert('El caso no puede ser cancelado. Usted no posee los privilegios suficientes');
    },
    alreadycanceled: function(component, event, helper){
        alert('El caso ya esta cancelado');
    },
    completePotency: function(component, event, helper){
        alert('Por favor, complete la potencia antes de continuar.');
    },
    caseClosed: function(component, event, helper){
        alert('El caso esta cerrado. El caso no puede ser cancelado en este estado.');
    },
    notPossibleCancel: function(component, event, helper){
        alert('No es posible cancelar este caso.');
    },
    successful: function(component, event, helper){
        alert('El caso de baja ha sido cancelado exitosamente.');
    },
     okCancel: function(component, event, helper){
        alert('El caso ha sido cancelado exitosamente.');
    },
    successfullySyn: function(component, event, helper){
        alert('La solicitud ya se ha completado con éxito en Synergia. El caso no puede ser cancelado en este estado.');
    },
    waitingforSynergia: function(component, event, helper){
        alert('La solicitud de Cancelacion se ha enviado a Synergia. Espere a que la solicitud regrese a Salesforce.');
    },
     paralizedSale: function(component, event, helper){
        alert('El caso esta en estado paralizado. No se puede cancelar');
    },

})