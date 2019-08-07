Ext.ns('first')

first.img = Ext.extend(Ext.BoxComponent, {
    // xtype: 'box',
    height: 100,
    width: 180,
    cls: 'img',
    autoEl: {
        tag: 'img',
        src: './img/bing.png',
    }
});
Ext.reg('first.img', first.img)
