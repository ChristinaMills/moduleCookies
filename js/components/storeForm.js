(function(module){
  let html = module.html;

  let template = function() {
    return html`
    <section>
    <h2>Add a store</h2>
      <form>
        <label>Location name <br />
            <input type="text"> 
        </label><br />
        <label> Minimum customers per hour <br />
            <input type="number">
        </label> <br />
        <label>Maximum customers per hour <br />
            <input type="number">
        </label> <br />
        <label>Average cookies per sale <br />
            <input type="number">
        </label> <br />
        <p class="error"></p>
      </form>
    </section>
    `;
  };

  class StoreForm {
    constructor(props) {
      this.onStoreAdd = props.onAdd;
    }

      render() {
        let dom = template();
        let form = dom.querySelector('form');
        let elements = form.elements;
        let error = dom.querySelector('p.error');

        form.addEventListener('submit', (event) => {
          event.preventDefault();

          let store = {
              name: elements.name.value,
              min: elements.min.value,
              max: elements.max.value,
              avg: elements.avg.value
          };

          try {
              error.textContent = '';
              this.onStoreAdd(store);
              form.reset();
              document.activeElement.blur();
          }
          catch(err) {
              error.textContent = err.message;
          }
      });

      return dom
    }

  }

  module.StoreForm = StoreForm;

})(window.module = window.module || {});