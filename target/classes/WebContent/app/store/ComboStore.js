/**
 * 
 */

Ext.define('MyApp.store.ComboStore',{
	
	extend: 'Ext.data.Store',
	alias: 'store.categoryStore',

	
	 proxy: {
         type: 'ajax',
         url:'http://localhost:1011/category',
         reader: {
             type: 'json',
            rootProperty: ''
         }
     },
     autoLoad: true
});