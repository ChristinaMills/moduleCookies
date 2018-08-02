(function(module) {
  let stores;

  let json = window.localStorage.getItem('stores');

  if(json && json !== 'undefined') {
    stores = JSON.parse(json);
  }
  else {
    createStores();
  }

  function createStores() {
      stores = [{
        name: 'Pike Place Market',
        min: '23',
        max: '65',
        avg: '6.3'
    }, {
        name: 'SeaTac Airport',
        min: '3',
        max: '24',
        avg: '1.2'   
    }, {
        name: 'Seattle Center',
        min: '11',
        max: '38',
        avg: '3.7'   
    }, {
        name: 'Capitol Hill',
        min: '20',
        max: '38',
        avg: '2.3'    
    }, {
        name: 'Alki',
        min: '2',
        max: '16',
        avg: '4.6'    
    }];

    for(let i = 0; i < stores.length; i++) {
      addKey(stores[i])
    }
  }

  window.resetStores = createStores;

  window.addEventListener('beforeunload', () => {
    window.localStorage.setItem('stores', JSON.stringify(fruits));
  });

  function addKey(store) {
    store.key = store.name.split('').reverse().join();
  }

  let storesApi = {
    get: function() {
      return stores;
    },
    add: function(store) {
      if(store.name === 'Salt and Straw') {
        throw new Error('Too basic, go somewhere else for fucks sake!');
      }
      addKey(store);
      stores.push(store)
    },
    remove: function(store) {
      for(let i = 0; i < stores.length; i++) {
        if(stores[i] === store) {
          stores.splice(i, 1);
          break;   
        }
      }
    }
  };
  
  module.storesApi = storesApi;

})(window.module = window.module || {});