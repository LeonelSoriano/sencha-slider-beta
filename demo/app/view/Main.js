Ext.define('Demo.view.Main', {
   
    extend: 'Ext.Panel',
    xtype: 'main',
    controller : 'Main',
    config: {
        fullscreen: true,
        scrollable: true,
        layout: 'hbox',
        defaults: {
        flex: 1
        },
        items: [{
               //style: "background-color: #CC0000; color:white;",
              // html: "<center>First Item</center>"
        },{
                

            xtype: 'container', 
            layout: 'vbox', 
            flex: 2,
            margin: '7% 0 0 0',
            //style: 'background-color: red',
            items: [
                {
                    xtype: 'textfield',
                    placeHolder: 'User',
                    margin: '5 0 0 0',
                    id: 'userText'
                    //flex: 1,
                },
                {
                    xtype: 'textfield',
                    placeHolder: 'Password',
                    margin: '5 0 0 0',
                    id: 'passText'
                },
                {
                    xtype: 'button', 
                    //flex: 1, 
                    text: 'Login',
                    margin: '5 0 0 0',
                    id: 'btnLogin'
                    
                }
           ]
            
        },{
               //style: "background-color: #006600; color:white;",
               //html: "<center>Third Item</center>"
        }]
    }
});
