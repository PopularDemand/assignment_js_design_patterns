var Model = {
 cards: [/* array of cards */],
 findCard: function(id) {
   // Iterate over cards
   // return card by ID
 },
 flipCardById: function(id) {
   // Find card
   // Flip card
   // return true if successful
 }
};

var View = {
 init: function(callbacks) {
   var flipCard = callbacks.flipCard;
   $('.card').on('click', function(e) {
     var $card = $(e.target);
     var id = $card.attr('data-id');
     flipCard(id);
   });
 },

 update: function(cards) {
   // Iterate over cards
   // Update rendered cards by ids in data
 }
};

var Controller = {
 init: function() {
   View.init({ flipCard: Controller.flipCard });
 },

 flipCard: function(id) {
   if (Model.flipCardById(id)) {
     View.update(Model.cards);
   } else {
     // Display failure message
   }
 }
};