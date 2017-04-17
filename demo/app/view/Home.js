Ext.define('Demo.view.Home', {
   
    extend: 'Ext.Container',
    xtype: 'homePanel',
    controller : 'Home',
    id: 'panelHome',
    requires: [
        'Ext.Menu'
    ],
    config: {
        layout: {
            type: 'card'
        },
        items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            title: 'Sencha Login',
            items: [
                {
                    xtype: 'button',
                    id: 'listButton',
                    iconCls: 'list',
                    ui: 'plain',
                    handler: function(){
                        if(Ext.Viewport.getMenus().left.isHidden()){
                            Ext.Viewport.showMenu('left');
                        }
                        else
                        {
                            Ext.Viewport.hideMenu('left');
                        }
                    }
                }
            ]
        },
        {
            xtype: 'panel',
            html: 'asd'
        
        }
        
        ]
    },



        initialize: function(){
        Ext.Viewport.setMenu(this.createMenu(),{
            side: 'left',
            reveal: true
        });
    },
 
    createMenu: function(){
        var menu = Ext.create('Ext.Menu', {
            width: 250,
            scrollable: 'vertical',
            style : '    background-color: #1d1d1d; background-image: -webkit-linear-gradient(top, rgba(255, 60, 94, 0), rgba(255, 31, 49, 0) 3%, rgba(0, 0,0 , 0));padding: 0;',
            items: [
                {
                    xtype: 'panel',
                    html: 'asd'

                },
                {
                    xtype: 'button',
                    text: 'Option 1',
                    ui: 'mainmenu',
                    style: '-webkit-border-radius: 0;-moz-border-radius: 0;-ms-border-radius: 0;-o-border-radius: 0;border-radius: 0;background-image: none;background-color: #262626;border-top: 1px solid #313131;border-bottom: 1px solid #161616;border-width: 1px 0;height: 3em;',
                    id: 'inibtn',
                },
                {
                    xtype: 'button',
                    text: 'Option 2',
                },
                {
                    text: 'More Info',
                    xtype: 'container',
                    style: 'background: #1d1d1d;'
                }
            ]
        });
        return menu;
    }
                
});
