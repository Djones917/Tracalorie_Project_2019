// Storage Controller



// Item Controller
const ItemCtrl = (function() {
  // Item Construtor
  const item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
    items: [
      {id: 0, name: 'Steak Dinner', calories: 1200},
      {id: 1, name: 'Cookie', calories: 400 },
      {id: 2, name: 'Eggs', calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0
  }
  
  // Public Methods
  return {
    getItems: function() {
      return data.items;
    },
    logData: function() {
      return data;
    }
  }
})();
    




// UI Controller
const UICtrl = (function() {
    const UISelectors = {
      itemList: '#item-list'
    }

    // Public Methods
    return {
      populateItemList: function(items) {
        let html = '';

        items.forEach(function(item) {
          html += `<li class="collection-item" id="item-${item.id}">
        <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>
      </li>`;
        });

        // Insert List Items
        document.querySelector(UISelectors.itemList).innerHTML = html;
      }
    }

})();



// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // Load Event Listeners
  
  
  // Public Methods
  return {
    init: function() {     

      // Fetch Items from data structure
      const items = ItemCtrl.getItems();

      // Populate List with items
      UICtrl.populateItemList(items);

      
    }
  }

})(ItemCtrl, UICtrl);



// Initialize App
App.init();