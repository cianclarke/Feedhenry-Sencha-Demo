app.views.Countries = Ext.extend(Ext.Panel, {
  title: 'Countries List',
  iconCls: 'bookmarks',
  cls: 'countries',
  layout: 'card',
  initComponent: function(){
    var me = this; // Reference to this panel
    var toolbar = new Ext.Toolbar({
      xtype: 'toolbar',
      title: 'Countries List'
    });
    
    var description = new Ext.Panel({
        html: 'Scroll through the list of countries - select one for more info'
    });
    
    var list = new Ext.List({
      xtype: 'list',
      width: '100%',
      store: app.stores.countries,
      itemTpl: '{countryName}',
      flex: 1,
      grouped: true,
      indexBar: true,
      onItemDisclosure: true, // show an arrow on RHS of list items
      listeners: {
        itemtap: function(list, index, el, ev){
          var r = list.getStore().getAt(index); // This snippet is useful on every list to get access to our record!
          
          Ext.dispatch({
            controller: app.controllers.countries,
            action: 'show',
            record: r,
            attachTo: me
          });
        }
      }
    });
    
    // Create a VBox wrapper to flex our content in
    var wrapper = new Ext.Panel({
      layout: {
        type: 'vbox'
      },
      defaults: {
        width: '100%'
      },
      items: [toolbar, description, list]
      
    });
    
    this.items = [ wrapper ];
    
    app.views.Countries.superclass.initComponent.call(this);
  }
});