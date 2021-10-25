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
    description: 'Sushi Go is a fast-playing card game in which the goal is to collect the best combination of sushi dishes as they pass through your hand. You score points by making the most maki rolls or for collecting a full set of sashimi. Dip your nigiri in some wasabi to triple your points. But don’t forget that dessert is being served and will eat into your score. Gather as many points as possible, and if you collect the most, you win!',
    content: '108 cards, Rules of Play',
    rating: '8+',
    players: '2-8',
    time: '15 Minutes'
  },
  {
    name: 'UNO',
    description: 'UNO® is a classic! In this game, players take turns placing cards from their hand into the center. Their goal is to match a card in their hand to the current card shown on top of the deck, either by color or number. There are also special action cards that allow for "game-changing" moments to help players win. Do not forget that when you are down to only one card, you must shout "UNO". The first player to zero cards in their hand wins!',
    content: '112 cards, Rules of Play & Scoring',
    rating: '7+',
    players: '2-10',
    time: 'Varies'
  },
  {
    name: 'SET',
    description: 'In this game, players are racing to find as many SETS as they can. They are competing against the other players to find three cards where each individual feature (color, shape, number, and shading) is either all the same or all different. The first player to see a SET has to call “SET” out loud and grab the cards that form the declared SET. This game is fun because it is fast paced, and also makes the players’ brains work. At the end of the game, the player with the most SETs wins.',
    content: '81 cards, Rules',
    rating: '6+',
    players: '1+',
    time: '20 Minutes'
  },
  {
    name: 'SPADES',
    description: 'Spades is a trick-taking card game that anybody can take part of. It is usually played by four players in bridge-style partnerships, each being dealt thirteen cards of the fifty-two card deck. Spades are always the trump suit.',
    content: 'None. Use any standard 52-card deck',
    rating: '13+',
    players: '2, 3, 4, 5+',
    time: '60 Minutes'
  },
  {
    name: 'EGYPTIAN RAT SCREW (ERS)',
    description: 'Egyptian Rat Screw (ERS) is a multi-player game that combines chance with agility. It uses a standard 52-card deck. The objective is to win all the cards through a combination of drawing and slapping.',
    content: 'None. Use any standard 52-card deck',
    rating: '8+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
  {
    name: 'GO FISH',
    description: 'Go Fish is a childhood classic that amuses and entertains all types of card players, regardless of age. In this game, players aim to collect all four cards within a book (four of a kind). The player with the most books, wins.',
    content: 'None. Use any standard 52-card deck',
    rating: '4+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
];

//This is modeled after Professor Mundy's work, but I don't really know how it works in his,
//so I really can't make it work in mine lol

function game() {
  // console.log(chosen);
  // loop through chosen indexes, append to string
  let str = '';
  for (let i = 0; i < game.length; i++) {
    str += `<div class='row'>
        <div class="col-12">
          <h1 class='title'>THE CARD GAME GENERATOR</h1>
        </div>
      </div>
    </div>
    <div class='container'>
      <div class='row'>
        <p class='intro'>The next game you should play, even if you have to make a new purchase, is...</p>
      </div>
    </div>
    <div class='row center'>
      <div class="col-12">
        <p scope='info'>Name</p>
        <p><a href="${data.name}" target="_blank"></p>
      </div>
    </div>
    <div class='row center'>
      <div class="col-12">
        <p scope='info'>Description</p>
        <p>${data.description}</p>
      </div>
    </div>
    <div class='row center'>
      <div class="col-3">
        <p scope='info'>Content</p>
        <p>${data.content}<p>
      </div>
      <div class="col-3">
        <p scope='info'>Rating</p>
        <p>${data.rating}</p>
      </div>
      <div class="col-3">
        <p scope='info'>Players</p>
        <p>${data.players}</p>
      </div>
      <div class="col-3">
        <p scope='info' id='game'>Time</p>
        <p>${data.time}</p>
        <p></p>
      </div>
    </div>`;
  }
  return str;
}

//This got it to print in the console and in an alert, but I couldn't get it to the HTML page

// str = JSON.stringify(data);
// str = JSON.stringify(data, null, 4); // (Optional) beautiful indented output.
// console.log(str); // Logs output to dev tools console.
// alert(str); // Displays output using window.alert()
//
// document.getElementById('game').innerHTML = data;


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
