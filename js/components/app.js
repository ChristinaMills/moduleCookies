(function(module){
  let html = module.html;
  let StoreEntry = module.StoreEntry;
  let StoreList = module.StoreList;
  let StoreForm = module.StoreForm;
  let storesApi = module.storesApi;

  let template = function() {
    return html`
    <header>
      <h1>Hello World!</h1>
    </header>
    <main></main>
    `;
  };


  class App {

    render() {
      let dom = template();
      let main = dom.querySelector('main');

      let stores = storesApi.get();
      console.log("store list from api!", stores)
      
      let storeList = new StoreList({
        stores:
         [ ...stores ]
      
      });

      let storeForm = new StoreForm({
        onAdd: (store) => {
          storeApi.add(store);
          storeList.update({
            stores: stores
          });
        }
      })

      main.appendChild(storeList.render());
      main.appendChild(storeForm.render());


      return dom;
    }
  }

  module.App = App;
})(window.module = window.module || {});