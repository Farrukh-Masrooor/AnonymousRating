/**
 * 
 */

Ext.define('MyApp.view.main.MyGrid',{
	
	extend:'Ext.grid.Panel',
	xtype:'mygrid',
	title: 'Products Ratings',
	height: 600,
	scrollable:true,
    id:'mainGridID',

    store: {
        type: 'mystore'
    },
    requires: [
            'Ext.plugin.Viewport',
            'Ext.window.MessageBox',
        ],

    tbar: [{
            text: 'Add Product',
            tooltip: 'Add a new Product',
            listeners:{
                click:function(){

                //alert("cllick");
                //this.up('app-main').destroy();
                    Ext.create({
                        xtype:'addProduct'
                    });
                }
            }

        }, {
            text: 'Add Company',
            tooltip: 'Add a new Company of a product',
            listeners:{
                click:function(){

                //alert("cllick");
                //this.up('app-main').destroy();
                    Ext.create({
                        xtype:'CompanyWindow'
                    });
                }
            }
        },
        {
            text: 'Add Category',
            tooltip: 'Add a new Category of  products',
            listeners:{
                click:function(){

                //alert("cllick");
                //this.up('app-main').destroy();
                    Ext.create({
                        xtype:'userform'
                    });
                }
            }

        }

        ],
	columns:[
		{
			
			dataIndex: 'productName',
			text: 'productName',
			flex:1,
			filter: {
                        type: 'string',
                        itemDefaults: {
                            emptyText: 'Search for...'
                        }
                    }
		},
		{
			
			dataIndex: 'productRating',
			text: 'productRating',
			editor: {
       		     xtype: 'textfield',
         	     allowBlank: false,

     			},
			flex:.5,

		},

		{
            menu: false,
            dataIndex: 'company.companyName',
            text: 'companyName',
            flex:1,


        },
        {
            menu: false,
            dataIndex: 'company.category.category',
            text: 'category',
            flex:0.5
        },
        {
            text: 'NoOfUsersRated',
            hidden:true,
            dataIndex: 'noOfUsersRated',
            flex:.5
        },
        {
            xtype:'actioncolumn',
            text:'Add  Features',
            width:100,

            items: [{
                iconCls: 'x-fa fa-cog',
                tooltip: 'Edit',
                handler: function(grid, rowIndex, colIndex,item,e , record) {
                    var me=this,
                    productId= record.data.id;

                    Ext.Ajax.request({
                        scope:this,
                        method  : 'GET',
                        url:'http://localhost:1011/features',
                        params: {
                                "productId" : productId
                            },
                        success: function(record,res){
                            alert("suuccess");
                            var res = Ext.decode(record.responseText);
                            Ext.create({
                                xtype:'addFeatureWindow',
                                productId:productId,
                                prevRecord:res
                            });

                        },
                        failure: function(){
                            alert("failed");
                        }

                    });

                }
            },]
        }
	],


        plugins: {

        		rowediting: {
                     clicksToMoveEditor: 1,
                     autoCancel: false
                 },
        		gridfilters: true
             },

         listeners: {
            cancelEdit: function(rowEditing, context) {
                // your stuff will go here
            },
            edit: function(editor, e) {
                var data=e.record.data,
                oldRating=e.value,
                newRating=parseInt(e.newValues.productRating),
                noOfUsersRated=data.noOfUsersRated;
                newRating=(oldRating*noOfUsersRated+newRating)/(noOfUsersRated+1);
                data.noOfUsersRated=data.noOfUsersRated+1;
                data.productRating=newRating;
                Ext.Ajax.request(
                {
                    scope:this,
                    method  : 'PUT',
                    jsonData: data,
                    url:'http://localhost:1011/product',
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



});