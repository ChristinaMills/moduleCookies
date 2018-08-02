(function(module){

  let html = module.html;
  let StoreEntry = module.StoreEntry;


  let template = () => {
    return html`        
      <section>
        <h2>Store List</h2>
      </section>
    `;
  };

  class StoreList {
    constructor(props) {
      this.stores = props.stores;
    }
  
    renderStore(store) {
      let storeEntry = new StoreEntry({
        store: store
      });

      this.section.appendChild(storeEntry.render());
    }

    render() {
      let stores = this.stores;
      let dom = template();
      this.section = dom.querySelector('section');

    
      for(let i = 0; i < stores.length; i++) {
        this.renderStore(stores[i]);
      }


      return dom;
    }
  }

  module.StoreList = StoreList;

})(window.module = window.module || {});
