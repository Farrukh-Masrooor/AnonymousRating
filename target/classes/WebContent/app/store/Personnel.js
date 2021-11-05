Ext.define('MyApp.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',




    proxy: {
        type: 'ajax',
        url:'http://localhost:1011/company/all',
        reader: {
            type: 'json',
            rootProperty: ''
        }
    }
});
