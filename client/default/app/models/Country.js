// Controller class named 'Country', not 'Countries'. class = description of an instance of..
app.models.Country = Ext.regModel('app.models.Country', {
  fields: ['countryName']
});

// A Sencha Store to contain our data -for now we're going to hardcode some data from: api.geonames.org/countryInfoJSON?username=cianclarke
app.stores.countries = new Ext.data.Store({
  model: 'app.models.Country',
  data: [
    {"bBoxWest":-10.478556,"countryName":"Ireland","currencyCode":"EUR","fipsCode":"EI","countryCode":"IE","isoNumeric":"372","capital":"Dublin","continentName":"Europe","areaInSqKm":"70280.0","languages":"en-IE,ga-IE","bBoxEast":-6.002389,"isoAlpha3":"IRL","continent":"EU","bBoxNorth":55.387917,"geonameId":2963597,"bBoxSouth":51.451584,"population":"4622917"},
    {"bBoxWest":102.339996,"countryName":"Cambodia","currencyCode":"KHR","fipsCode":"CB","countryCode":"KH","isoNumeric":"116","capital":"Phnom Penh","continentName":"Asia","areaInSqKm":"181040.0","languages":"km,fr,en","bBoxEast":107.627724,"isoAlpha3":"KHM","continent":"AS","bBoxNorth":14.686417,"geonameId":1831722,"bBoxSouth":10.409083,"population":"14453680"}
  ]
});