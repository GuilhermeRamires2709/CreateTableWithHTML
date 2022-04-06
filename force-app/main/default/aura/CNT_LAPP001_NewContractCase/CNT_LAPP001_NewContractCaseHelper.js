({
	showNotice: function(component, variant, header, message) {
        component.find("notificationsLib").showToast({
            "variant": variant,
            "header": header,
            "mode":"sticky",
            "message": message
        });
    },
    callAction : function(component, action, successHandler, errorHandler) {
        console.log('callAction');
        action.setCallback(this, function (response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                successHandler(response);
            } else if (state === "ERROR") {
                if (errorHandler) {
                    errorHandler(response);
                } else {
                    var errorMessage = "";
                    var errors = response.getError();
                    if (errors && errors[0] && errors[0].message) {
                        errorMessage = errors[0].message;
                    }
                    if (errorMessage === "") {
                        errorMessage = "Unknown Error";
                    }
                    console.log(errorMessage);
                    this.showNotice(component, "Error", "Error", errorMessage);
                }
            }
        });
        $A.enqueueAction(action);
    },
    

})