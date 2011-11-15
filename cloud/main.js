function getCountries(){
  var data = [
  {
    name: 'Ireland',
    data: 123
  },
  {
    name: 'UK', 
    data: 456
  }
  ];
  return data;
}

function getMoreCountries(){
  // returns the global in shared
  return countries;
}