/**
 * Created by carlos.bastidas on 7/3/2019.
 */

({
    onGetFormValues: function (component, event, helper) {
        var accRecord = component.get('v.accountRecord');
        helper.error = false;
        helper.error1 = false;
        helper.error2 = false;
        helper.error3 = false;
        helper.error6 = false;
        
        accRecord.Name = helper.addError('Name', component);
        accRecord.IdentityNumber__c = helper.addError('IdentityNumber__c', component);
        //accRecord.IdentityType__c = helper.addError('IdentityType__c', component);
        accRecord.PrimaryEmail__c = helper.addError('PrimaryEmail__c', component);
        accRecord.MainPhone__c = helper.addError('MainPhone__c', component);
        accRecord.CNT_Legal_Type__c = helper.addError('CNT_Legal_Type__c', component);
        accRecord.Address__c = helper.addError('Address__c', component);
       
        accRecord.RecordTypeId = component.get('v.recordTypeId');
         if(helper.error) {
             return 'ERR';   
         }else{ 
            helper.addErrorOne('Name', component);
            helper.validEmailFormat('PrimaryEmail__c', component);
            helper.validPhoneFormat('MainPhone__c', component);
            helper.validIdentity('IdentityNumber__c', component);

            if(!helper.error1 && !helper.error2 && !helper.error3 && !helper.error6){
                return accRecord;
            }    
         }
    }
});