/* javascript */

/* If user clicks on "give me something to play" button
    return a game from the game array

   If user clicks on [game title]
    open new window of where to purchase the game

   If user clicks on "give me a different game" button
    return a new game from the game array
   */


const data = [{
    name: 'SUSHI GO',
    link: 'https://gamewright.com/product/Sushi-Go',
    description: 'Sushi Go is a fast-playing card game in which the goal is to collect the best combination of sushi dishes as they pass through your hand. You score points by making the most maki rolls or for collecting a full set of sashimi. Dip your nigiri in some wasabi to triple your points. But don’t forget that dessert is being served and will eat into your score. Gather as many points as possible, and if you collect the most, you win!',
    content: '108 cards, Rules of Play',
    rating: '8+',
    players: '2-8',
    time: '15 Minutes'
  },
  {
    name: 'UNO',
    link: 'https://www.mattelgames.com/en-us/cards/uno',
    description: 'UNO® is a classic! In this game, players take turns placing cards from their hand into the center. Their goal is to match a card in their hand to the current card shown on top of the deck, either by color or number. There are also special action cards that allow for "game-changing" moments to help players win. Do not forget that when you are down to only one card, you must shout "UNO". The first player to zero cards in their hand wins!',
    content: '112 cards, Rules of Play',
    rating: '7+',
    players: '2-10',
    time: 'Varies'
  },
  {
    name: 'SET',
    link: 'https://www.playmonster.com/product/set/',
    description: 'In this game, players are racing to find as many SETS as they can. They are competing against the other players to find three cards where each individual feature (color, shape, number, and shading) is either all the same or all different. The first player to see a SET has to call “SET” out loud and grab the cards that form the declared SET. This game is fun because it is fast paced, and also makes the players’ brains work. At the end of the game, the player with the most SETs wins.',
    content: '81 cards, Rules',
    rating: '6+',
    players: '1+',
    time: '20 Minutes'
  },
  {
    name: 'SPADES',
    link: 'https://bicyclecards.com/how-to-play/spades/',
    description: 'Spades is a trick-taking card game that anybody can take part of. It is usually played by four players in bridge-style partnerships, each being dealt thirteen cards of the fifty-two card deck. Spades are always the trump suit.',
    content: 'Any standard 52-card deck',
    rating: '13+',
    players: '2, 3, 4, 5+',
    time: '60 Minutes'
  },
  {
    name: 'EGYPTIAN RAT SCREW (ERS)',
    link: 'https://bicyclecards.com/how-to-play/egyptian-rat-screw/',
    description: 'Egyptian Rat Screw (ERS) is a multi-player game that combines chance with agility. It uses a standard 52-card deck. The objective is to win all the cards through a combination of drawing and slapping.',
    content: 'Any standard 52-card deck',
    rating: '8+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
  {
    name: 'GO FISH',
    link: 'https://bicyclecards.com/how-to-play/go-fish/',
    description: 'Go Fish is a childhood classic that amuses and entertains all types of card players, regardless of age. In this game, players aim to collect all four cards within a book (four of a kind). The player with the most books, wins.',
    content: 'Any standard 52-card deck',
    rating: '4+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
  {
    name: 'CRAZY EIGHTS',
    link: 'https://bicyclecards.com/how-to-play/crazy-eights/',
    description: 'Crazy Eights is a shedding game. The goal is to be the first player to get rid of all the cards in your hand. Starting to the left of the dealer, players must place one card face up on their starter pile. Each card played (other than an eight) must match the card showing on the starter pile, by either denomination or suit. If a player cannot play, cards are drawn from the top of the stock until a play is possible, or until the stock is exhausted. If unable, and the stock is exhausted, the player must pass. A player may draw from the stock, even if they have a playable card. All eights are wild cards, and they can be played at any time in a turn; the player just needs to specify a suit for it. The next player can play either the specified suit or an eight.',
    content: 'Any standard 52-card deck',
    rating: '4+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
  {
    name: 'TRASH',
    link: 'https://bicyclecards.com/how-to-play/trash/#filter',
    description: 'through Ten. In this game, Aces count as one, cards 2-10 have their face values, Jacks are wild, and Queens and Kings automatically end the player’s turn. The first player draws from the stock. If the card is Ace through ten, the player places that card in its correct location in the layout (top left is Ace, then 2, then 3, and so on). To do this, the player must remove the face down card that is occupying that location and turn it face up. This card, in turn, is placed in its appropriate location, if available, displacing the next face card that was there. This continues until the player finds a card that cannot be placed. The player then discards the card, placing it face up next to the stockpile, and the turn passes to the next. Jacks can go in any spot. If the stockpile runs out before anyone completes their layout, shuffle the discard—except for the top card of discard.',
    content: 'Any standard 52-card deck. ',
    rating: '8+',
    players: '2, 3, 4, 5+',
    time: 'Varies',
  }
];

//This is modeled after Professor Mundy's work, but I don't really know how it works in his,
//so I really can't make it work in mine lol

function game() {
  // console.log(chosen);

  let str = '';
  let r = Math.floor(Math.random() * data.length);
  str += `
    <div class='row center mt-4'>
      <div class="col-12">
        <a href='${data[r].link}' target='_blank'>${data[r].name}</a><br>
      </div>
    </div>

    <div class='row center mt-5'>
      <div class="col-12">
      <h3 class='desClass'>DESCRIPTION</h3>
        ${data[r].description}<br>
      </div>
    </div>

    <div class='row center mt-5'>
      <div class="col-6 col-sm-3">
      <h3 class='boxBackings'>CONTENT</h3>
        <p class='boxBackings'>${data[r].content}</p><br>
      </div>

      <div class="col-6 col-sm-3">
      <h3 class='boxBackings'>RATING</h3>
        <p class='boxBackings'>${data[r].rating}</p><br>
      </div>

      <div class="col-6 col-sm-3">
      <h3 class='boxBackings'>PLAYERS</h3>
        <p class='boxBackings'>${data[r].players}</p><br>
      </div>

      <div class="col-6 col-sm-3">
      <h3 class='boxBackings'>TIME</h3>
        <p class='boxBackings'>${data[r].time}</p><br>
      </div>

  `;

  return str;
}


//This got it to print in the console and in an alert, but I couldn't get it to the HTML page

// str = JSON.stringify(data);
// str = JSON.stringify(data, null, 4); // (Optional) beautiful indented output.
// console.log(str); // Logs output to dev tools console.
// alert(str); // Displays output using window.alert()

// document.getElementById('game').innerHTML = data[0].name;


 function newGame() {
  document.getElementById('game').innerHTML = game();
   }







//This made it generate into the console with the refresh of a page, but I
//couldn't get it to the HTML page or to work with the button


// function random_game(games) {
//
//   return games[Math.floor(Math.random() * games.length)];
//
// }
//
// var games = [{
//     name: 'SUSHI GO',
//     description: 'Sushi Go is a fast-playing card game in which the goal is to collect the best combination of sushi dishes as they pass through your hand. You score points by making the most maki rolls or for collecting a full set of sashimi. Dip your nigiri in some wasabi to triple your points. But don’t forget that dessert is being served and will eat into your score. Gather as many points as possible, and if you collect the most, you win!',
//     content: '108 cards, Rules of Play',
//     rating: '8+',
//     players: '2-8',
//     time: '15 Minutes'
//   },
//   {
//     name: 'UNO',
//     description: 'UNO® is a classic! In this game, players take turns placing cards from their hand into the center. Their goal is to match a card in their hand to the current card shown on top of the deck, either by color or number. There are also special action cards that allow for "game-changing" moments to help players win. Do not forget that when you are down to only one card, you must shout "UNO". The first player to zero cards in their hand wins!',
//     content: '112 cards, Rules of Play & Scoring',
//     rating: '7+',
//     players: '2-10',
//     time: 'Varies'
//   },
//   {
//     name: 'SET',
//     description: 'In this game, players are racing to find as many SETS as they can. They are competing against the other players to find three cards where each individual feature (color, shape, number, and shading) is either all the same or all different. The first player to see a SET has to call “SET” out loud and grab the cards that form the declared SET. This game is fun because it is fast paced, and also makes the players’ brains work. At the end of the game, the player with the most SETs wins.',
//     content: '81 cards, Rules',
//     rating: '6+',
//     players: '1+',
//     time: '20 Minutes'
//   },
//   {
//     name: 'SPADES',
//     description: 'Spades is a trick-taking card game that anybody can take part of. It is usually played by four players in bridge-style partnerships, each being dealt thirteen cards of the fifty-two card deck. Spades are always the trump suit.',
//     content: 'None. Use any standard 52-card deck',
//     rating: '13+',
//     players: '2, 3, 4, 5+',
//     time: '60 Minutes'
//   },
//   {
//     name: 'EGYPTIAN RAT SCREW (ERS)',
//     description: 'Egyptian Rat Screw (ERS) is a multi-player game that combines chance with agility. It uses a standard 52-card deck. The objective is to win all the cards through a combination of drawing and slapping.',
//     content: 'None. Use any standard 52-card deck',
//     rating: '8+',
//     players: '2, 3, 4, 5+',
//     time: 'Varies'
//   },
//   {
//     name: 'GO FISH',
//     description: 'Go Fish is a childhood classic that amuses and entertains all types of card players, regardless of age. In this game, players aim to collect all four cards within a book (four of a kind). The player with the most books, wins.',
//     content: 'None. Use any standard 52-card deck',
//     rating: '4+',
//     players: '2, 3, 4, 5+',
//     time: 'Varies'
//   },
// ];
//
//
// console.log(random_game(games));
