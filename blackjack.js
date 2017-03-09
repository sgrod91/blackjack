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
