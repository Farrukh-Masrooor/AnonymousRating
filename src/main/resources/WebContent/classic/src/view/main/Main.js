Ext.define('MyApp.view.main.Main',{
	extend: 'Ext.panel.Panel',
	title: 'Welcome to Annonymous Rating',
	scrollable:true,
	autoScroll:true,
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
    ],
	plugins: 'viewport',
	items:[
		{
			xtype:'mygrid'
		}
	]
});