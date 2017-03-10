function getCardImageUrl(card) {
  if (card.point === 1) {
    return 'images/ace_of_' + card.suit + '.png';
  }
  else if (card.point === 11) {
    return 'images/jack_of_' + card.suit + '.png';
  }
  else if (card.point === 12) {
    return 'images/queen_of_' + card.suit + '.png';
  }
  else if (card.point === 13) {
    return 'images/king_of_' + card.suit + '.png';
  }
  else {
  return 'images/' + card.point + '_of_' + card.suit + '.png';
  }
}

function calculatePoints(cards) {
var total = 0;
var sortedCards = cards.sort(function(a, b) {
  return b.point - a.point;
});

  for (var i = 0; i < cards.length; i++){
    if (sortedCards[i].point >= 10) {
      total = total + 10;
    }
    else if (sortedCards[i].point === 1) {
      if (total <= 10) {
        total += 11;
      }
      else {
        total += 1;
      }
    }
    else {
      total = total + sortedCards[i].point;
    }

  }
    return total;
    // return card.point;
}

var newDeck = function(){

  var deck = [];
  var suits = ['spades', 'hearts', 'clubs', 'diamonds'];
  for (var j = 1; j < 14; j++) {
    for (var i = 0; i < 4; i++) {
      deck.push({point: j, suit: suits[i]});
    }
  }
  return deck;
};



//REFACTORING//

function Card(point, suit) {
  this.point = point;
  this.suit = suit;
}

Card.prototype.getImageUrl = function() {
  var name = this.point;
  if (name === 11) {
    name = 'jack';
  } else if (name === 12) {
    name = 'queen';
  } else if (name === 13) {
    name = 'king';
  } else if (name === 1) {
    name = 'ace';
  }
  return 'images/' + name + '_of_' + this.suit + '.png';
};

function Hand() {
  this.cards = [];
}

Hand.prototype.addCard = function(card) {
  this.cards.push(card);
};

Hand.prototype.getPoints = function() {
  var sortedCards = this.cards.slice(0);
  function compare(one, other) {
    return other.point - one.point;
  }
  sortedCards.sort(compare);
  var sum = sortedCards.reduce(function combine(currentSum, card) {
    var point = card.point;
    if (point > 10 && point <= 13) {
      point = 10;
    } else if (point === 1) {
      if (currentSum + 11 <= 21) {
        point = 11;
      }
    }
    return currentSum + point;
  }, 0);
  return sum;
};

function Deck() {
  this.cards = [];
  for (var i = 1; i <= 13; i++) {
    this.cards.push(new Card(i, 'diamonds'));
    this.cards.push(new Card(i, 'spades'));
    this.cards.push(new Card(i, 'hearts'));
    this.cards.push(new Card(i, 'clubs'));
  }
}

Deck.prototype.draw = function() {
  var card = this.cards.pop();
  return card;
};

Deck.prototype.numCardsLeft = function() {
  return this.cards.length;
};

Deck.prototype.shuffle = function() {
  for (var i = 0; i < this.cards.length; i++) {
    var a = Math.floor(Math.random() * 52);
    var b = Math.floor(Math.random() * 52);

    var temp = this.cards[a];
    this.cards[a] = this.cards[b];
    this.cards[b] = temp;
  }
};
