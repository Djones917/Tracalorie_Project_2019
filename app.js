// Storage Controller



// Item Controller
const ItemCtrl = (function() {
  // Item Construtor
  const item = function(id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
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