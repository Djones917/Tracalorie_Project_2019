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
      // {id: 0, name: 'Steak Dinner', calories: 1200},
      // {id: 1, name: 'Cookie', calories: 400 },
      // {id: 2, name: 'Eggs', calories: 300 }
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
    getTotalCalories: function() {
      let total = 0;
      // Loop through items and add calories
      data.items.forEach(function(item) {
        total += item.calories;
      });
      // Set total cal in data structure
      data.totalCalories = total;
      // Return Total
      return data.totalCalories; 
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
        // Show the list
        document.querySelector(UISelectors.itemList).style.display = 'block';
        // Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Add Id
        li.id = `item-${item.id}`;
        // Add HTML
        li.innerHTML = `<strong>${item.name}: </strong> <em>${item.calories} Calories</em>
        <a href="#" class="secondary-content">
          <i class="edit-item fa fa-pencil"></i>
        </a>`;
        // Insert Item
        document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
      },
      clearInput: function() {
        document.querySelector(UISelectors.itemNameInput) = ''; 
        document.querySelector(UISelectors.itemCaloriesInput) = ''; 
      }, 
      hideList: function() {
        document.querySelector(UISelectors.itemList).style.display = 'none';
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
      // Get Total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Clear Fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }
  // Public Methods
  return {
    init: function() {     

      // Fetch Items from data structure
      const items = ItemCtrl.getItems();

      // Check If Any Items
      if(items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate List with items
        UICtrl.populateItemList(items);
      }      

      // Load Event Listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl);



// Initialize App
App.init();