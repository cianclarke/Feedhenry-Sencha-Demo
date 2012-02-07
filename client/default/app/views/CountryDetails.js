app.views.CountryDetails = Ext.extend(Ext.Panel, {
  iconCls: 'user',
  cls: 'countryDetails',
  layout: 'fit',
  initComponent: function(){
    var me = this;
    this.dockedItems = [
      {
        xtype: 'toolbar',
        title: this.title || 'Country Details',
        items: [
          {
            xtype: 'button',
            text: 'back',
            ui: 'back',
            handler: function(){
              me.goBackTo.setActiveItem(0, {type: 'slide', direction: 'right'});
              me.destroy();
            }
          }
        ]
      }
    ];
    
    this.tpl = '<h4>{continentName} &raquo; {countryName}</h4>' + 
    '<strong>Capital:</strong> {capital}<br />' +
    '<strong>Area (KM&sup2;):</strong> {areaInSqKm}<br />' +
    '<strong>Languages:</strong> {languages}<br />' +
    '<strong>Population:</strong> {population}<br />' +
    '<strong>Currency Code:</strong> {currencyCode}<br />';
    
    app.views.CountryDetails.superclass.initComponent.call(this);
  }
});