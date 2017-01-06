CardMatcher = {
  // Model:
  // View:
  // Controller:
}

CardMatcher.Model = {
  cards: [], // populate with some function
  score: 0,
  maxScore: 0;

  generateCards: function(number = 2) {
    if 
  }
}


CardMatcher.View = {

  init: function(){
    this.getNumCards()
  },

  getNumCards: function() {
    var numCards;
    var message = 'How many cards would you like to play with? (Even number only)';
    numCards = prompt(message);
    while (numCards <=0 || numCards % 2 !== 0 || parseInt(numCards) === NaN) {
      numCards = prompt('Ya dang idjit: Positive. Even. As an real Number. Only.' + message);
    }
    return parseInt(numCards);
  },

}

CardMatcher.Controller = {
  init: function() {
    numCards = Cardmatcher.View.getNumCards()
  }
}