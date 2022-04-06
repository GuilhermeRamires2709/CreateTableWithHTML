/*
   * created by Yisuka Marquez 
   */
({ redirect: function (component, url, label) {
    var workspaceAPI = component.find("workspace");
    if(url.length != 0){
        this.isConsoleNavigation(component).then(function(response) {
            if(response){
                workspaceAPI.getFocusedTabInfo().then(function(response) {
                    var focusedTabId = response.tabId;
                    workspaceAPI.openSubtab({
                        parentTabId: focusedTabId,
                        url: url,
                        focus: true
                    }).then(function(subTabId){
                        workspaceAPI.setTabLabel({
                            tabId: subTabId,
                            label: label
                        });
                    }).catch(function(error) {
                        console.log(error);
                    });
                });
            }
            else {
                var urlEvent = $A.get("e.force:navigateToURL");
                urlEvent.setParams({
                    "url": url
                });                   
                urlEvent.fire();                     
            }
        });
    }else{
        this.showNotice(component, "Error", "Error", 'URL Not Found');
    }        
},
   })