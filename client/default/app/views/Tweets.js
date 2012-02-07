app.views.Tweets = Ext.extend(Ext.Panel, {
  title: 'Tweets',
  iconCls: 'time',
  cls: 'tweets',
  width: '100%',
  layout: {
    type: 'vbox'
  },
  dockedItems: [
    {
      xtype: 'toolbar',
      title: '@feedhenry mentions'
    }
  ],
  items: [
    {
      xtype: 'list',
      width: '100%',
      store: app.stores.tweets,
      itemTpl: '<img style="float: left; margin: 0px 8px 8px 0px;" src="{profile_image_url}" />' + 
      '<strong>{from_user}</strong>' +
      '{text}',
      flex: 1,
      plugins: [{
        ptype: 'pullrefresh'
      }]
    }
  ]
  
});