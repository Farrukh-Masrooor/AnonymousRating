Ext.define('MyApp.view.main.AddFeatureWindow',{

	extend:'Ext.window.Window',
	frame:true,
    height: 600,
    width: 650,
    autoShow:true,
    layout:'anchor',
    scrollable:true,
    modal:true,
    xtype:'addFeatureWindow',
    id:'addFeatureWindowForm',
    title: 'ADD Company',

    constructor: function (config) {
            var me =this,
            prevRec=config.prevRecord;
    	    me.callParent([config]);
             console.log(config);
             if(!Ext.isEmpty(prevRec)){
                me.addFeatures(prevRec)
             }

         },



    items:[{
        xtype:'form',
        id:'formFeatureAdd',
        scrollable:true,
        frame: true,
        scrollable:true,


        padding:10,
        items:[
            {
               xtype:'button',

               text: 'Add feature',
               listeners:{
                    click: function(){
                        var me = this;
                        var w=me.up('#addFeatureWindowForm');
                        var c=w.down('#resultSetContainer');
                        var r=w.getFeatureComponent();
                        c.add(r);
                    }
               }

            },

            {
                xtype: 'container',
                itemId: 'resultSetContainer',
                layout: 'vbox',
            }

        ]
        }

    ],

    buttons:[{
        text:'Submit',
         listeners:{
            click: function(){
            var form= this.up();
            var s=form.up().down('#formFeatureAdd').getForm(),
            data=s.getValues(),
            w=form.up();
            data.productId=w.productId;
            Ext.Ajax.request(

                {
                    scope:this,
                    method  : 'POST',
                    jsonData: data,
                    url:'http://localhost:1011/features',
                    headers : {
                        "Content-Type":"application/json"
                    },
                    success: function(){
                        alert("suuccess");
                        var r=this.up('#addFeatureWindowForm');
                        r.destroy();
                    },
                    failure: function(){
                        alert("failed");
                    }
            });
         }
    }
    }],

    getFeatureComponent: function(record){
        return Ext.create('Ext.form.Panel',{
            width: 640,
            items:[
                {
                    xtype:'fieldcontainer',
                    layout:'hbox',
                    itemId:'fc1',

                   items:[
                        {
                           xtype:'textfield',
                           name: 'featureName',
                           fieldLabel: 'FeatureName',
                           value: !Ext.isEmpty(record)?record.featureName:''
                       },
                       {
                          xtype:'numberfield',
                          name: 'rating',
                          fieldLabel: 'Feature Rating',
                          value: !Ext.isEmpty(record)?record.rating:''

                      },
                      {
                        xtype:'numberfield',
                        name: 'id',
                        fieldLabel: '',
                        hidden:true,
                        value: !Ext.isEmpty(record)?record.id:''

                    }
                   ]
                },
            ]
        });
    },
    addFeatures: function(prevRec){
        var me= this,

                c=me.down('#resultSetContainer');
                for(var i=0;i<prevRec.length;i++){
                    var r=me.getFeatureComponent(prevRec[i]);
                    c.add(r);
                    }
    }
});