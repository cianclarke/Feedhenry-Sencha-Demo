app.views.Viewport = Ext.extend(Ext.TabPanel, {
    fullscreen: true,
    layout: 'card',

    cardSwitchAnimation: 'slide',
    tabBar: new Ext.TabBar({
        dock: 'bottom',
        layout: {
            pack: 'center'
        }
    }),
    initComponent: function() {
        //put instances of cards into app.views namespace
        Ext.apply(app.views, {
          home: new app.views.Home(),
          countries: new app.views.Countries()
        });
        //put instances of cards into viewport
        Ext.apply(this, {
            items: [
                app.views.countries,
                app.views.home
            ]
        });
        app.views.Viewport.superclass.initComponent.apply(this, arguments);
    }
});