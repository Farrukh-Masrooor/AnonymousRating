Ext.define('MyApp.view.main.CartForm',{

	extend:'Ext.window.Window',
    title: 'Welcome',

    xtype: 'form-checkout',
    frame:true,
    height: 300,
    width: 909,
    autoShow:true,
    layout:'anchor',
    scrollable:true,
    modal:true,


    items:[

		{
        xtype:'form',

        scrollable:true,
        frame: true,
        scrollable:true,
        url:'http://localhost:1011/product',
        method:'POST',

        padding:10,
        items:[
				{
                xtype:'fieldcontainer',
                layout:'vbox',
                itemId:'fc1',

                items:[

                        {
                        xtpe:'combo',
                        name: 'category',
                        fieldLabel: 'category',
                        store:{type:'categoryStore'}

                        },
                        {
                            xtpe:'textfield',
                            name: 'companyName',
                            fieldLabel: 'companyName',

                        },

				]
		},






	],
		}],
    buttons:[
            {

            text:'Reset',
            handler:'resetForm',

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
                    json['companyName']=s.findField('companyName').value;
                    json['category']=s.findField('category').value;
                    json['product']=product;
                    Ext.Ajax.request(

                            {
                                scope:this,
                                method  : 'POST',
                                jsonData: json,
                                url:'http://localhost:1011/company',
                                headers : {
                                    "Content-Type":"application/json"
                                },
                                success: function(){
                                    alert("suuccess");

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