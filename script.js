CardMatcher = {};

CardMatcher.Model = {

  generateCards: function(numCards) {
    var cards = [];
    for(i = 0; i < numCards; i++) {
      this.cards.push(i);
    }
    return cards;
  }
};

CardMatcher.View = {

  getNumCards: function() {
    var numCards;
    var message = 'How many cards would you like to play with? (Even number only)';
    numCards = prompt(message);
    while (numCards <=2 || numCards % 2 !== 0 || parseInt(numCards) === NaN) {
      numCards = prompt('Ya dang idjit: Positive. Even. As an real Number. Only.' + message);
    }
    return parseInt(numCards);
  },

  initialDisplay: function(cards) {
    var twiceCards = [];
    $.each(cards, function(i, card){
      twiceCards.push(card);
      twiceCards.push(card);
    });
    twiceCards = this._shuffle(twiceCards);
    $.map(twiceCards, function(card, i){
      $("<td>").addClass("card").text(card);
    })
    var rowLength = 5;
    for(var i = 0; i < twiceCards.length; i++) {

    }
    // << $td's onto $tr's, 4 per row (%)
  },

  _shuffle: function(arr) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

};

CardMatcher.Controller = {
  init: function() {
    var numCards = CardMatcher.View.getNumCards();
    var cards = CardMatcher.Model.generateCards(numCards);
    CardMatcher.View.initialDisplay(cards);
  }
};