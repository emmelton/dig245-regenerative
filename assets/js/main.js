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
    description: 'Sushi Go is a fast-playing card game in which the goal is to collect the best combination of sushi dishes as they pass through your hand. You score points by collecting different sushi dishes (cards). Gather as many points as possible, and if you collect the most, you win!',
    content: '108 cards, Rules of Play',
    rating: '8+',
    players: '2-8',
    time: '15 Minutes'
  },
  {
    name: 'UNO',
    link: 'https://www.mattelgames.com/en-us/cards/uno',
    description: 'UNO® is a classic! In this game, players take turns placing cards from their hand into the center. Their goal is to match a card in their hand to the current card shown on top of the deck, either by color or number. There are also special action cards that allow for "game-changing" moments to help players win. The first player to zero cards in their hand wins!',
    content: '112 cards, Rules of Play',
    rating: '7+',
    players: '2-10',
    time: 'Varies'
  },
  {
    name: 'SET',
    link: 'https://www.playmonster.com/product/set/',
    description: 'Players are racing to find as many SETS as they can. They compete against the other players to find three cards where each individual feature (color, shape, number, and shading) is either all the same or all different. When a player sees a SET, they call “SET” and grab the cards that form the SET. The player with the most SETs wins.',
    content: '81 cards, Rules',
    rating: '6+',
    players: '1+',
    time: '20 Minutes'
  },
  {
    name: 'SPADES',
    link: 'https://bicyclecards.com/how-to-play/spades/',
    description: 'Spades is a trick-taking card game that anybody can take part of. It is usually played by four players in bridge-style partnerships, each being dealt thirteen cards of the fifty-two card deck. Spades are always the trump suit.',
    content: 'Standard 52-card deck',
    rating: '13+',
    players: '2, 3, 4, 5+',
    time: '60 Minutes'
  },
  {
    name: 'ERS',
    link: 'https://bicyclecards.com/how-to-play/egyptian-rat-screw/',
    description: 'Egyptian Rat Screw (ERS) is a multi-player game that combines chance with agility. It uses a standard 52-card deck. The objective is to win all the cards through a combination of drawing and slapping.',
    content: 'Standard 52-card deck',
    rating: '8+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
  {
    name: 'GO FISH',
    link: 'https://bicyclecards.com/how-to-play/go-fish/',
    description: 'Go Fish is a childhood classic that amuses and entertains all types of card players, regardless of age. In this game, players aim to collect all four cards within a book (four of a kind). The player with the most books, wins.',
    content: 'Standard 52-card deck',
    rating: '4+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
  {
    name: 'CRAZY EIGHTS',
    link: 'https://bicyclecards.com/how-to-play/crazy-eights/',
    description: 'Crazy Eights is a shedding game. The goal is to be the first player to get rid of all the cards in your hand by placing cards on your starter pile. Each card placed must match the showing card by denomination or suit—unless playing an eight, which is wild. Turns move in a left-moving circle until a player runs out of cards.',
    content: 'Standard 52-card deck',
    rating: '4+',
    players: '2, 3, 4, 5+',
    time: 'Varies'
  },
  {
    name: 'TRASH',
    link: 'https://bicyclecards.com/how-to-play/trash/#filter',
    description: 'The goal of Trash is to be the first player to complete a layout of ten cards, Ace through Ten. The game is played in rounds where everyone starts off with 10 cards each. The players who complete their set in a sequence from ace to 10 wins the round and gets one card less in the next. The game ends when a player is down to one card and draws an ace or a wildcard.',
    content: 'Standard 52-card deck. ',
    rating: '8+',
    players: '2, 3, 4, 5+',
    time: 'Varies',
  },
  {
    name: 'CARDS AGAINST HUMANITY',
    link: 'https://www.cardsagainsthumanity.com',
    description: 'Cards Against Humanity is a fill-in-the-blank party game that turns your awkward personality and lackluster social skills into hours of fun. Each round, one player asks a question from the black-colored card, and everyone else answers with their funniest white-colored card.',
    content: '600 cards, Rules',
    rating: '17+',
    players: '4-20+',
    time: '30-90 Minutes',
  },
  {
    name: 'NEW PHONE, WHO DIS?',
    link: 'https://whatdoyoumeme.com/products/new-phone-who-dis ',
    description: 'Cards Against Humanity is a fill-in-the-blank party game that turns your awkward personality and lackluster social skills into hours of fun. Each round, one player asks a question from the black-colored card, and everyone else answers with their funniest white-colored card.',
    content: '600 cards, Rules',
    rating: '17+',
    players: '4-20+',
    time: '30-90 Minutes',
  },
  {
    name: 'SPOONS',
    link: 'https://bicyclecards.com/how-to-play/spoons/#filter',
    description: 'In this fast-paced card swapping game, players to take turns trying to collect a four-of-a-kind as they pick up from a deck on the right and pass to the player to their left. Once someone has four in their hand, everyone tries to grab a spoon. Without a spoon, you’re out. The last player standing wins!',
    content: 'Standard 52-Card Deck',
    rating: '4+',
    players: '3, 4, 5+',
    time: 'Varies',
  },
  {
    name: 'SPOONS',
    link: 'https://bicyclecards.com/how-to-play/spoons/#filter',
    description: 'In this fast-paced card swapping game, players to take turns trying to collect a four-of-a-kind as they pick up from a deck on the right and pass to the player to their left. Once someone has four in their hand, everyone tries to grab a spoon. Without a spoon, you’re out. The last player standing wins!',
    content: 'Standard 52-card deck',
    rating: '4+',
    players: '3, 4, 5+',
    time: 'Varies',
  },
  {
    name: 'NERTS',
    link: 'https://bicyclecards.com/how-to-play/nerts/#filter',
    description: 'A speedy, multiplayer version of Solitaire, where players race to get rid of the cards from their “Nerts” piles by building them from the ace up onto common foundations or their own personal area. Each player requires their own deck.',
    content: 'Standard 52-card deck',
    rating: '8+',
    players: '2, 3, 4',
    time: 'Varies',
  },
  {
    name: 'INCOHEARENT',
    link: 'https://whatdoyoumeme.com/products/incohearent ',
    description: 'Incohearent is an adult party game where players read cards out loud for other people or teams to guess what is said! Players are reading complete gibberish from one of three categories, and other players or teams earn points by guessing the statement correctly. The most right answers win.',
    content: '500 cards, rules, timer',
    rating: '17+',
    players: '2-20+',
    time: '20-40 Minutes',
  },
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
