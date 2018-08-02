(function(module){

  let html = module.html;


  let template = (store) => {
    return html`        
            <tr>
                <td>${store.name}</td>
                <td>The minimum # of customers:  ${store.min}</td>
                <td>The maximum # of customers:${store.max}</td>
                <td>Average # of cookies: ${store.avg}</td>
            </tr>
        `;
  };

  class StoreEntry {
    constructor(props) {
      this.store = props.store;
    }
  
    render() {
      let dom = template(this.store);


      return dom;
    }
  }

  module.StoreEntry = StoreEntry;

})(window.module = window.module || {});