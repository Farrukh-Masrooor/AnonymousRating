Ext.define('MyApp.view.main.AddProduct',{

	extend:'Ext.window.Window',
    title: 'Welcome',
    id: 'form',
    xtype: 'addProduct',
    frame:true,
    height: 300,
    width: 400,
    autoShow:true,
    layout:'anchor',
    scrollable:true,
    modal:true,


    items:[

		{
        xtype:'form',
        id:'formId22',
        scrollable:true,
        //frame: true,
        scrollable:true,
        url:'http://localhost:1011/product',
        method:'POST',

        padding:10,
        items:[
				{
                xtype:'fieldcontainer',
                layout:'vbox',
                itemId:'fc1',
                defaultType: 'textfield',
                items:[


                        {

                           xtype:'combobox',
                           fieldLabel:'companyName',
                           flex:1,
                           name:'company',
                           store:{
                               type:'personnel'
                           },
                           displayField:'companyName',
                           valueField: 'id',
                       },
                        {
                        xtype:'fieldcontainer',
                        layout:'vbox',
                        itemId:'fc12',
                        defaultType: 'textfield',
                        items:[

                                {
                                    xtype: 'numberfield',
                                    name: 'noOfUsersRated',
                                    hidden:true,
                                    value: 1,
                                },
                        		{
                        			xtpe:'textfield',
                        			name: 'productName',
                        		   fieldLabel: 'productName',

                        		},
                        		{
                        			xtype: 'numberfield',
                        			name: 'productRating',
                                    maxValue: 99,
                                    minValue: 0,
                        		    fieldLabel: 'productRating',

                        		}

                        ]
                      }
				]
		},






	],
		}],
    buttons:[
            {

            text:'Reset',
            handler:'resetForm',
            id:'resetButton',
            listeners:{
                click: function(){
                    var form= this.up();
                    var s=form.up().down('#formId22').getForm();
                    s.reset();
                }

            }
            },
            {

            text:'Submit',


            listeners:{
                    click: function(){
                    var form= this.up();
                    var s=form.up().down('#formId22').getForm(),
                    data=s.getValues(),
                    product={},
                    json={};
                    product['productName']=s.findField('productName').value;
                    product['productRating']=s.findField('productRating').value;
                    product['extraFeatures']=s.findField('extraFeatures').value;
                    product['noOfUsersRated']=s.findField('noOfUsersRated').value;
                    json['company']=s.findField('company').value;

                    json['product']=product;
                    Ext.Ajax.request(

                            {
                                scope:this,
                                method  : 'POST',
                                jsonData: json,
                                url:'http://localhost:1011/product',
                                headers : {
                                    "Content-Type":"application/json"
                                },
                                success: function(){
                                    alert("suuccess");
                                    var r=this.up('#form');
                                    r.destroy();
                                    var m=Ext.ComponentQuery.query('#mainGridID')[0];
                                    m.getStore().reload();
                                },
                                failure: function(){
                                    alert("failed");
                                }
                            }
                        );
        			    }
        			}
        		}
        	]
    });