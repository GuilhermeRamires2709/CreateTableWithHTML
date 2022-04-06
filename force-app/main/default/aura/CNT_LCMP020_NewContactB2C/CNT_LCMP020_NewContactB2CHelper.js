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
    validPhoneFormat: function (componentName, component) {
        var cmp = component.find(componentName);
        var valuePhone = cmp.get("v.value");
        var movilPhoneformat = /^(9)(\s?)[98765]\d{7}$/;
        var mainPhone = /^(52)(\s?)[98765]\d{7}$/;
      debugger;
        if (valuePhone != null && valuePhone.match(movilPhoneformat)){
             return true;
             this.addErrorRed(cmp);
             this.error4  =  true;          
        }else if(valuePhone != null && valuePhone.match(mainPhone)){
            return true;
            this.addErrorRed(cmp);
            this.error4  =  true;            
        }
        this.addErrorRed(cmp);
        return false;
        
    },
     addErrorOne: function (componentName, component) { 
        var cmp = component.find(componentName);
        var prueba = cmp.get("v.value");
        if (prueba && (prueba.length >= 1 && prueba.length <= 2)) {
            this.error5  =  true;
            this.addErrorRed(cmp);
            return null;
        }
    },
    
    validIdentity: function (componentName, component) {
        var cmp = component.find(componentName);
        var valueRut = cmp.get("v.value");
        var rutFormat = /^[0-9]+[-|‐]{1}[0-9kK]{1}$/;
        debugger;
        if(valueRut != null && valueRut.match(rutFormat)){
             return true;
             this.addErrorRed(cmp);
             this.error6  =  true;
             component.set("v.error6", true);
        }
        this.addErrorRed(cmp);   
        return false;
    },
    
    addErrorRed: function (cmp) {
        $A.util.addClass(cmp, 'slds-has-error');
    },

    error: false,
    error4: false,
    error5: false,
    error6: false
});