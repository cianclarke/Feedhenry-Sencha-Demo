// Controller class named 'Country', not 'Countries'. class = description of an instance of..
app.models.Tweet = Ext.regModel('app.models.Tweet', {
  fields: ['from_user', 'text', 'profile_image_url', 'from_user_name'],
  proxy: {
    type: 'fhact',
    reader: 'json',
    id: 'getTweets'
  }
});

app.stores.tweets = new Ext.data.Store({
  model: 'app.models.Tweet',
  autoLoad: true,
});