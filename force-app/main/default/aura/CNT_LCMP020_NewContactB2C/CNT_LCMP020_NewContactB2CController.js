({
    onGetFormValues : function(component, event, helper) {
        var contactRecord = component.get('v.contactRecord');
        helper.error = false;
        helper.error4 = false;
        helper.error5 = false;
        helper.error6= false;
        
        contactRecord.LastName = helper.addError('LastName', component);
        //contactRecord.MothersLastName__c = helper.addError('MothersLastName__c', component);
        contactRecord.FirstName = helper.addError('FirstName', component);
        //contactRecord.Document_Type__c = helper.addError('Document_Type__c', component);
        contactRecord.IdentityNumber__c = helper.addError('IdentityNumber__c', component);
        contactRecord.Email = helper.addError('Email', component);
        contactRecord.MobilePhone = helper.addError('MobilePhone', component);
        contactRecord.PreferredChannelContact__c = helper.addError('PreferredChannelContact__c', component);

        contactRecord.RecordTypeId = component.get('v.recordTypeId');
               if (!helper.error) {
            helper.validPhoneFormat('MobilePhone', component);
            debugger;
            helper.addErrorOne('FirstName', component);
            debugger;
            helper.addErrorOne('LastName', component);
            helper.validIdentity('IdentityNumber__c', component);
            
            if(!helper.error4 || !helper.error5 || !helper.error6){     
                return contactRecord;
            }
            
        } 
         return 'ERR';
    }
});