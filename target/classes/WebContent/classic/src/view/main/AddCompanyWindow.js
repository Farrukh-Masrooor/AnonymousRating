Ext.define('MyApp.view.main.AddCompanyWindow',{

	extend:'Ext.window.Window',
	frame:true,
    height: 200,
    width: 350,
    autoShow:true,
    layout:'anchor',
    scrollable:true,
    modal:true,
    xtype:'CompanyWindow',
    id:'addCompanyWindowForm',
    title: 'ADD Company',

    items:[{
        xtype:'form',
        id:'formCompanyAdd',
        scrollable:true,
       // frame: true,
        scrollable:true,


        padding:10,
        items:[
           {
               xtype:'textfield',
               name: 'companyName',
               fieldLabel: 'companyName',

           },
           {

           xtype:'combobox',
           fieldLabel:'Category',
           flex:1,
           name:'category',
           store:{
               type:'categoryStore'
           },
           displayField:'category',
           valueField: 'id',
           }
        ]
        }

    ],

    buttons:[{
        text:'Submit',
         listeners:{
            click: function(){
            var form= this.up();
            var s=form.up().down('#formCompanyAdd').getForm(),
            data=s.getValues();
            Ext.Ajax.request(

                {
                    scope:this,
                    method  : 'POST',
                    jsonData: data,
                    url:'http://localhost:1011/company',
                    headers : {
                        "Content-Type":"application/json"
                    },
                    success: function(){
                        alert("suuccess");
                        var r=this.up('#addCompanyWindowForm');
                        r.destroy();
                    },
                    failure: function(){
                        alert("failed");
                    }
            });
         }
    }
    }]
});