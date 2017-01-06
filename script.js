CardMatcher = {};

function Card(data, id) {
  this.data = data;
  this.id = id;

  this.asTd = function() {
    return $('<td>').attr({class: 'card', "data-id": id}).text(data);
  }
}

CardMatcher.Model = {

  cards: [],

  generateCards: function(numCards) {
    for(i = 0; i < numCards; i++) {
      this.cards.push(i);
    }
  },

  getCards: function(numCards) {
    if (numCards){
      this.generateCards(numCards);
    }
    return this.cards;
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
    var rowLength = 5;

    // duplicate "cards"
    $.each(cards, function(i, card){
      twiceCards.push(card);
      twiceCards.push(card);
    });

    // shuffle the "cards"
    twiceCards = this._shuffle(twiceCards);

    // turn data into actual cards
    $.map(twiceCards, function(card, i){
      return new Card(card, i);
    })

    //make table row
    var $tr = $('<tr>');

    // Set grid
    for(var i = 1; i <= twiceCards.length; i++) {

      // add card to row
      $tr.append(twiceCards[i-1].asTd);

      // if the card row length % card id = 0, 
      // append row to table, make new row
      if (rowLength % i === 0) {
        $('#card-grid').append($tr);
        $tr = ('<tr>');
      }
    }
    // << $td's onto $tr's, 4 per row (%)
  },

  _shuffle: function(array) {
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
    var cards = CardMatcher.Model.getCards(numCards);
    CardMatcher.View.initialDisplay(cards);
  }
};

$(document).ready(function() {
  CardMatcher.Controller.init();
})