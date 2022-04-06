({
	close: function(cmp, event) {
        var cmpTarget = cmp.find('divId');
        $A.util.addClass(cmpTarget, 'slds-hide');
    },
})