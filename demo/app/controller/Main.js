Ext.define('Demo.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            btnLogin : '#btnLogin',
            
        },
        control: {
            btnLogin:{
                tap: 'onLogin'
            }
        }
    },
    

    onLogin : function(){
        if(Ext.ComponentQuery.query('#userText')[0].getValue() == 'root'
            && Ext.ComponentQuery.query('#passText')[0].getValue() == '123'
        ){
          //Ext.Viewport('main').destroy();
            Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
            Ext.Viewport.setActiveItem({ xtype: 'homePanel' }); 
            
        }else{
            alert('datos errados');
        }

        //alert(Ext.ComponentQuery.query('#passText')[0].getValue());
    },

    //called when the Application is launched, remove if not needed
    launch: function() {

        Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);  
        Ext.Viewport.setActiveItem({ xtype: 'homePanel' }); 
       // alert("hola");    
       // console.log('hols');
    }
});
