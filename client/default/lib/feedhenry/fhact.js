Ext.ux.FHActProxy = Ext.extend(Ext.data.Proxy, {
   
  
    id: undefined, 

    constructor: function() {
  
        Ext.ux.FHActProxy.superclass.constructor.apply(this, arguments);
  
   
      
        // if an id is not given, try to use the store's id instead
        this.id = this.id || (this.store ? this.store.storeId : undefined);

        if (this.id == undefined) {
            throw "No unique id was provided to the local storage proxy.";
        }  
        
            
    },


    create: function(operation, callback, scope) {

      

        var rawData = [];
        //save records from operation or records from the previous action (in case of 'localRemote' source)
        var records = (operation.resultSet) ? operation.resultSet.records : operation.records || [];
        
        for (var r=0;r<records.length;r++){
             rawData.push(records[r].data);
        }        


    var req = {
      'operation' : operation.action, 
      records : rawData
    };
    var callback = this.createRequestCallback(operation, callback, scope);
        var errback = this.createRequestErrback(operation, callback, scope);


    $fh.act( {
      'act' : this.id,
      'req':req
      },function(response){
        if(response!=null && response.error){
          if(typeof errback === 'function'){
            errback(response);
          }
          return;
        }
        if(typeof callback === 'function'){
          callback(response.data);
        }
      }, errback || Ext.emptyFn);

        
        return this;
        
    },
    
    read: function(operation, callback, scope) {
        var req = {
            'operation' : operation.action, 
                'sorters' : this.encodeSorters(scope.sorters),
                'filters' : this.encodeFilters(scope),
                }

      var callback = this.createRequestCallback(operation, callback, scope);
          var errback = this.createRequestErrback(operation, callback, scope);  
  
        $fh.act( {
        'act' : this.id,
        'req':req
        },function(response){
          if(response!=null && response.error){
            if(typeof errback === 'function'){
              errback(response);
            }
            return;
          }
          if(typeof callback === 'function'){
            callback(response.data);
          }
        }, errback || Ext.emptyFn);

  return this;
      
    },
    
    update: function() {
       return this.create.apply(this, arguments);
    },
    
    destroy: function(operation, callback, scope) {    
       return this.create.apply(this, arguments);
    },

    /**
   * @private
   * @param {Ext.data.Operation}
   *            operation The Operation being executed
   * @param {Function}
   *            callback The callback function to be called when the request
   *            completes. This is usually the callback passed to doRequest
   * @param {Object}
   *            scope The scope in which to execute the callback function
   * @return {Function} The callback function
   */
    createRequestCallback: function(operation, callback, scope, syncCallback) {
        
      
      var me = this;
      
      return function(response){
      
      var result = {};
      var reader  = me.getReader();
      var resultWrapper = {};
      
      //prepare the text for json reader (must use json reader to activate associations)
      
      
      //if response comes from remote source
      if (response && response!=null){
        resultWrapper.responseText = JSON.stringify(response);
        try { 
          result  = reader.read(resultWrapper);
        }
        catch(e){}
      }
             
      
      records = operation.records || scope.data.items;
        
        if(result.records){
          
          records = result.records;
          
        }
        
        // fix - now existing data will be cleared 
        operation.addRecords = false; // misleading - this is the 'append' property. Don't append - blind replace!
        operation.resultSet = new Ext.data.ResultSet({ 
            records: records,
            total : records.length,
            loaded: true
          });        
     
         operation.setSuccessful(); 
         operation.setCompleted();
         
         // this callback is the one that was passed to the 'read' or 'write'
         if (typeof callback == 'function') {
           callback.call(scope || me, operation);
         }    
         
         return me;                                

       }

    },
  
    createRequestErrback: function(operation, callback, scope, syncCallback) {
      
        var me = this;
        
        return function(response){
          
          operation.setException();
          operation.setCompleted();
          
          // fix - now existing data won't be cleared - addRecords is like append [] 
          operation.addRecords = true;
          operation.resultSet = new Ext.data.ResultSet({ 
            records: [],
            total : 0,
            loaded: false
          });          
            
          // this callback is the one that was passed to the 'read' or 'write'
          if (typeof callback == 'function') {
            callback.call(scope || me, operation);
          }
               

         return me;       
        }          
    },

  // The encodeFilters and encodeSorters methods are exactly as per Ext.data.ajaxproxy

      /**
       * Encodes the array of {@link Ext.util.Sorter} objects into a string to be sent in the request url. By default, 
       * this simply JSON-encodes the sorter data
       * @param {Array} sorters The array of {@link Ext.util.Sorter Sorter} objects
       * @return {String} The encoded sorters
       */
      encodeSorters: function(sorters) {
          var min = [],
              length = sorters.length,
              i;

          for (i = 0; i < length; i++) {
              min[i] = {
                  property : sorters.items[i].property,
                  direction: sorters.items[i].direction
              };
          }

          return min;
      },


  /**
       * Encodes the array of {@link Ext.util.Filter} objects into a string to be sent in the request url. By default, 
       * this simply JSON-encodes the filter data
       * @param {Array} store The store to read the filters from
       * @param {Boolean} excluded_key The property of filter to exclude 
       * @param {Array} min Object that holds the extracted filters
       * @return {String} The encoded filters
       */
      encodeFilters : function (store) {
          var min = [],
              length = store.filters.length,
              i;

          for (i = 0; i < length; i++) {    
              var property = store.filters.items[i].property;
              var value = store.filters.items[i].value;
              if(property !=  excluded_key) {
                  min.push({
                      property: property,
                      value   : value.source || value
                  });            
              }

          }
          return min;
      }   



});


Ext.data.ProxyMgr.registerType('fhact', Ext.ux.FHActProxy);
