// Controller class named 'Country', not 'Countries'. class = description of an instance of..
app.models.Country = Ext.regModel('app.models.Country', {
  fields: ['countryName', 'continentName',  'capital', 'areaInSqKm', 'languages', 'population', 'currencyCode'],
    proxy: {
    type: 'fhact',
    reader: 'json',
    id: 'getCountries'
  }
});

// A Sencha Store to contain our data -for now we're going to hardcode some data from: api.geonames.org/countryInfoJSON?username=cianclarke
app.stores.countries = new Ext.data.Store({
  model: 'app.models.Country',
  autoLoad: true,
  sorters: [{
    property: 'countryName',
    direction: 'asc' // we don't always have to use a sorter, but for a list this big it's safest
  }],
  getGroupString: function(record){
    return record.get('countryName')[0];
  }
});