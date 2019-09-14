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
    items: [],
    currentItem: null,
    totalCalories: 0
  }
})();
    




// UI Controller
const UICtrl = (function() {
    console.log('UI controller');
})();



// App Controller
const App = (function(ItemCtrl, UICtrl) {
    console.log('App controller');
})(ItemCtrl, UICtrl);