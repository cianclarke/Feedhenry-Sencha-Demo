app.views.CountryDetails = Ext.extend(Ext.Panel, {
  iconCls: 'user',
  cls: 'countryDetails',
  floating: true,
  tpl: 'Name: {name}<br />Data: {data}'
});