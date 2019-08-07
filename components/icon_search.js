Ext.ns('first')

first.search = Ext.extend(Ext.Button, {
    colspan: 1,
    icon: './img/search.png',
    scale: 'large',
    cls: 'search-icon',
    cls: 'panel',
    width: 45,
    height: 45
});

Ext.reg('first.search', first.search)
