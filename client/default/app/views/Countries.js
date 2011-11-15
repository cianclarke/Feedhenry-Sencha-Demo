app.views.Countries = Ext.extend(Ext.Panel, {
  title: 'Countries List',
  iconCls: 'bookmarks',
  cls: 'countries',
  width: '100%',
  layout: {
    type: 'vbox'
  },
  dockedItems: [
    {
      xtype: 'toolbar',
      title: 'Countries List'
    }
  ],
  items: [
    {
      html: 'Scroll through the list of countries - select one for more info'
    },
    {
      xtype: 'list',
      width: '100%',
      store: app.stores.countries,
      itemTpl: '{name}',
      flex: 1,
      grouped: true,
      indexBar: true,
      onItemDisclosure: function(r, b, i){
        Ext.dispatch({
          controller: app.controllers.countries,
          action: 'show',
          record: r,
          button: b,
          index: i
        });
      }
    }
  ]
  
});