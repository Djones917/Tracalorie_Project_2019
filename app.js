// Storage Controller



// Item Controller
const ItemCtrl = (function() {
  console.log('Item controller');
})();
    




// UI Controller
const UICtrl = (function() {
    console.log('UI controller');
})();



// App Controller
const App = (function(ItemCtrl, UICtrl) {
    console.log('App controller');
})(ItemCtrl, UICtrl);