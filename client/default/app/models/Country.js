// Controller class named 'Country', not 'Countries'. class = description of an instance of..
app.models.Country = Ext.regModel('app.models.Country', {
  fields: ['name', 'data'],
  proxy: {
    type: 'fhact',
    reader: 'json',
    id: 'getMoreCountries',
    source: 'localRemote'
  }
});

app.stores.countries = new Ext.data.Store({
  model: 'app.models.Country',
  autoLoad: true,
  getGroupString: function(record){
    return record.get('name')[0];
  }
});