Ext.define('Demo.controller.Home', {
    extend: 'Ext.app.Controller',
    view : 'Home',
    config: {
        refs: {
            inibtn : '#inibtn',
            panelHome: '#panelHome'
        },
        control: {
            inibtn:{
                tap: 'doClick'
            }
        }
    },

    doClick : function(){
        //alert("click");
        if(this.getPanelHome().getItems().items.length == 2 ){
            this.getPanelHome().removeAt(1);
        }


        if(this.getPanelHome().getItems().items.length == 1 ){
             console.log(this.getPanelHome().getItems().items.length);
        }
    },

    launch: function() {
        //alert(this.getPanelHome());
        //alert(inibtn);
    }

    
});
