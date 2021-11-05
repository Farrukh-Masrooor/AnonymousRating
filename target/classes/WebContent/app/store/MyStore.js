/**
 * 
 */

Ext.define('MyApp.store.MyStore',{
	extend: 'Ext.data.Store',

	alias: 'store.mystore',
	//fields: ['productName', 'productRating', 'extraFeatures','company.companyName','company.category'],

	fields: [
                    {name: 'productName', type: 'string'},
                    {name: 'productRating', type: 'number'},
                    {name: 'extraFeatures', type: 'string'},
                    {name: 'company.companyName', type: 'string',mapping : 'company.companyName'},
                    {name: 'company.category.category', type: 'string',mapping : 'company.category.category'},

                ],

	proxy: {
                type: 'ajax',
                url:'http://localhost:1011/product',
                reader: {
                    type: 'json',
					rootProperty: ''
                }
            },
            autoLoad: true
});