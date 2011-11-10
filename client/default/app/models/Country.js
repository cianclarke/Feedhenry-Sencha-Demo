// Controller class named 'Country', not 'Countries'. class = description of an instance of..
app.models.Country = Ext.regModel('app.models.Country', {
  fields: ['name'],
  proxy: {
    type: 'fhact',
    reader: 'json',
    id: 'getCountries'
  }
});

app.stores.countries = new Ext.data.Store({
  model: 'app.models.Country'
});