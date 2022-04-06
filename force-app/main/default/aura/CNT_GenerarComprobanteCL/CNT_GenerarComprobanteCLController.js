/*
   * created by Yisuka Marquez 
   */
({
    doInit: function (component, event, helper) {
        const server = component.find('server');
        console.log(server);
        let recordId = component.get("v.recordId");
        debugger;
        console.log(recordId);
        
        //llamada al servidor para verificar que tipo de cupon se debe emitir (presupuesto o costo de estudio)
        server.callServerPromise(

        component.get("c.factibilityValue"),
         {
          contractObject: recordId 
         }
         ).then($A.getCallback(response => {
            console.log('Response doInit ' + response); 
            console.log(response);
            if (response === 'PRE') {
            	//redirecciona al componente de Presupuesto si es factible
                var url = '/apex/CNT_VFP063_ProofPaymentCL?Id=' + recordId;
                window.open(url); 
                $A.get("e.force:closeQuickAction").fire();     
            } else if (response ==='CE'){
                var url = '/apex/CNT_VFP063_ProofStudyCL?Id=' + recordId;
                window.open(url);
                $A.get("e.force:closeQuickAction").fire();

           } else if (response==='No hay URL') {
                alert('Cupón no disponible');
                $A.get("e.force:closeQuickAction").fire();
           }

             
           }))
               .catch($A.getCallback(errors => {
                console.log(JSON.parse(JSON.stringify(errors)));
            }));

    },

})