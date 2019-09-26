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
    addItem: function(name, calories) {
      let ID;
      // Create ID
      if(data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // Calories to number
      calories = parseInt(calories);

      // Create New Item
      newItem = new Item(ID, name, calories);

      // Add to Items Array
      data.items.push(newItem);
      return newItem;
    },
    logData: function() {
      return data;
    }
  }
})();
    




// UI Controller
const UICtrl = (function() {
    const UISelectors = {
      itemList: '#item-list',
      addBtn: '.add-btn',
      itemNameInput: '#item-name',
      itemCaloriesInput: '#item-calories'
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
      },
      getItemInput: function() {
        return {
          name: document.querySelectors(UISelectors.itemNameInput).value,
          calories: document.querySelectors(UISelectors.itemCaloriesInput).value
        }
      },
      addListItem: function(item) {
        // Create li element
        const li = document.createElement('li');
        
      },
      getSelectors: function() {
        return UISelectors;
      }
    }

})();



// App Controller
const App = (function(ItemCtrl, UICtrl) {
  // Load Event Listeners
  const loadEventListeners = function() {
    // Get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }
  
  // Add Item Submit
  const itemAddSubmit = function(e) {
    // Get form input from UI controller
    const input = UICtrl.getItemInput();
    
    // Check for name and calorie
    if(input.name !== '' && input.calories !== '') {
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // Add Item To UI List
      UICtrl.addListItem(newItem);
    }

    e.preventDefault();
  }
  // Public Methods
  return {
    init: function() {     

      // Fetch Items from data structure
      const items = ItemCtrl.getItems();

      // Populate List with items
      UICtrl.populateItemList(items);

      // Load Event Listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);



// Initialize App
App.init();