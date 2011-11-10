// Controller class named 'Country', not 'Countries'. class = description of an instance of..
app.models.Country = Ext.regModel('app.models.Country', {
  fields: ['name']
});

app.stores.countries = new Ext.data.Store({
  model: 'app.models.Country',
  data: [{name: 'test'}, {name: 'test2'}]
});