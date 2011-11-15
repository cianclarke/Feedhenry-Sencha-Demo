app.controllers.countries = new Ext.Controller({
  show: function(options){
      // show a shiny new panel in here
  var panel = options.panel,
  record = options.record;
      
      var countryDetails = new app.views.CountryDetails();
      countryDetails.update(record.data);
      countryDetails.show();
  }
});