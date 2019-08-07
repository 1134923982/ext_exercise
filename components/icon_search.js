Ext.ns('first')

first.search = Ext.extend(Ext.Button, {
    colspan: 1,
    icon: './img/search.png',
    scale: 'large',
    cls: 'search-icon',
    width: 30,
    height: 30
});

Ext.reg('first.search', first.search)
