/**
 * Created by carlos.bastidas on 7/12/2019.
 */
({
    addError: function (componentName, component) {
        var cmp = component.find(componentName);
        if (cmp != null && cmp.get("v.value") != null && cmp.get("v.value") != '') {
            $A.util.removeClass(cmp, 'slds-has-error');
            return cmp.get("v.value");
        } else {
            this.error  =  true;
            $A.util.addClass(cmp, 'slds-has-error');
            return null;
        }
    },
    addErrorOne: function (componentName, component) { 
        var cmp = component.find(componentName);
        var prueba = cmp.get("v.value");
        if (prueba && (prueba.length >= 1 && prueba.length <= 2)) {
            this.error1  =  true;
            this.addErrorRed(cmp);
            component.set("v.error1", true);
            return null; 
        }
    },
    
    
    validEmailFormat: function (componentName, component) {
        var cmp = component.find(componentName);
        var valueMail = cmp.get("v.value");
        var mailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        debugger;
        if(!valueMail != null && !valueMail.match(mailFormat)){
             this.addErrorRed(cmp);
             return true;
        }else{ 
            return false;
            //this.error2  =  true;  
        }
        this.addErrorRed(cmp);   
        return false;
    },
    
    validIdentity: function (componentName, component) {
        var cmp = component.find(componentName);
        var valRut = cmp.get("v.value");
        var rutFormat = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/; 
        debugger;
        if(valRut != null && !valRut.match(rutFormat)){
             $A.util.addClass(cmp, 'slds-has-error');
             component.set("v.error6", true);
             this.error6  = true;
        }
        this.error6  = false;
    },
         
    validPhoneFormat: function (componentName, component) {
        var cmp = component.find(componentName);
        var valuePhone = cmp.get("v.value");
        var movilPhoneformat = /^(9)(\s?)[98765]\d{7}$/;
        var mainPhone = /^(52)(\s?)[98765]\d{7}$/;
        //  falta local 52(7121212)
      debugger;
        if (valuePhone != null && valuePhone.match(movilPhoneformat)){
             return true;
             this.addErrorRed(cmp);
             this.error3  =  true;  
             component.set("v.errorAcc1", true);
            
        }else if(valuePhone != null && valuePhone.match(mainPhone)){
            return true;
            this.addErrorRed(cmp);
            this.error3  =  true;  
            component.set("v.errorAcc1", true);
            
        }
        this.addErrorRed(cmp);
        return false;
        
    },
    
    addErrorRed: function (cmp) {
        $A.util.addClass(cmp, 'slds-has-error');
    },

    resetErrorOne: function (component) {
        this.error1  =  false;
        component.set("v.error1", false);
    },
    error: false,
    error1: false,
    error2: false,
    error3: false,
    error6: false
});