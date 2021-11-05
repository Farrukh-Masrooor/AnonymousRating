/**
 * 
 */

Ext.define('MyApp.view.main.UserForm',{
	extend:'Ext.window.Window',
	title: 'User Form',
    height: 200,
    width: 350,
	autoShow:true,
	xtype:'userform',
	id:'categoryFormWindow',

	defaults:{
		padding: 20
	},
    layout: 'fit',
    items:[{
        xtype:'form',
        id:'categoryForm',
        scrollable:true,
        //frame: true,
        scrollable:true,
        url:'http://localhost:1011/product',
        method:'POST',

        padding:10,
        items:[{
                xtype:'fieldcontainer',
                layout:'vbox',
                itemId:'fc1',
                defaultType: 'textfield',
                items:[
                    {
                    xtpe:'textfield',
                    name: 'category',
                    fieldLabel: 'Category',

                },
                ]

        }]
    }],

		buttons:[
			{
				text:'Submit',
				name:'button',
				listeners:{
				    click: function(){
				        var form= this.up();
                        var s=form.up().down('#categoryForm').getForm(),
                        data=s.getValues();
                        Ext.Ajax.request({
                            scope:this,
                            method  : 'POST',
                            jsonData: data,
                            url:'http://localhost:1011/category',
                            headers : {
                                "Content-Type":"application/json"
                            },
                            success: function(){
                                alert("suuccess");
                                var r=this.up('#categoryFormWindow');
                                r.destroy();
                            },
                            failure: function(){
                                alert("failed");
                            }
                        });
				    }
				}
			}
		]
		
	
}
);