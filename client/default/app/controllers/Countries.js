app.controllers.countries = new Ext.Controller({
  show: function(options){
    // show a shiny new panel in here
    var panel = options.panel,
    record = options.record,
    attachTo = options.attachTo;
      
    var countryDetails = new app.views.CountryDetails({
      goBackTo: attachTo
    });
    countryDetails.update(record.data);
    attachTo.setActiveItem(countryDetails, 'slide');
  }
});