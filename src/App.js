import React,{Component} from 'react';
import './App.css';
import Cards from './Cards/Cards';
import Hand from './Cards/Hand';



class App extends Component {

  state = {
    card:[
      {divClass:'card_rank',rank:'',suit:''},
      {divClass:'card_rank',rank:'',suit:''},
      {divClass:'card_rank',rank:'',suit:''},
      {divClass:'card_rank',rank:'',suit:''},
      {divClass:'card_rank',rank:'',suit:''}       
    ],
    hand:[{hand:' '}]
  };
 
  Suits = ['D','S','C','H'];
  Ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
  suitsSign = ['♦','♠','♣','♥']
  cardDeck = [];
  rankList = ['rank0','rank1','rank2','rank3','rank4'];
  toSort = [];

  createCardDeck = () =>{
    this.cardDeck = [];
    for(let i=0; i<this.Suits.length; i++){
      let suit = this.Suits[i]
      let suitSimbols = this.suitsSign[i];
      for(let i=0; i<this.Ranks.length; i++){
        this.cardDeck.push({
          suit: suit,
          rank: this.Ranks[i],
          suits: suitSimbols
        });
      };
    };
  };
  
  createNewDeck = () =>{
    this.createCardDeck();
    console.log(this.cardDeck);
  }

  sortingCards = () => {
    const unique = [];
    const doubles = [];
    const triples = [];
    for (let card of this.toSort){
      if(!unique.includes(card)) {
        unique.push(card);
      } else if (unique.includes(card)){
        doubles.push(card);
        const hand = [...this.state.hand];
        const double = {...hand[0]};
        if (doubles.length ===1 ) {
          double.hand = 'one pair'
        } else if (doubles.length ===2){
          double.hand = 'two pair'
        } else {
          double.hand = 'empty'
        }
        hand[0] = double;
        this.setState({hand});
        console.log('Doubles ' + doubles);
      } else if (doubles.includes(card)){
        triples.push(card);
        const hand = [...this.state.hand];
        const double = {...hand[0]};
        if (triples.length ===1 ) {
          double.hand = 'three of a kind'
        }
        console.log('Triples' + triples);
      }
    }
  }

  

  getRandomCards = () =>{ 
    const hand = [...this.state.hand];
    const double = {...hand[0]};
    double.hand = ' ';
    hand[0] = double;
    this.setState({hand})
    if(this.cardDeck.length <= 2){
      alert('Your card Deck is empty. Please press Create New Card Deck to continue.');
    } else {
        const card = [...this.state.card];
    for (let i=0; i<5; i++) {
      let randomNumber = Math.floor(Math.random()*((this.cardDeck.length)));
      this.rankList[i] = {...card[i]};;
      this.rankList[i].divClass = 'card_rank';
      this.rankList[i].divClass = this.rankList[i].divClass + ' ' + this.cardDeck[randomNumber].suit;
      this.rankList[i].suit = this.cardDeck[randomNumber].suits;
      this.rankList[i].rank = this.cardDeck[randomNumber].rank;
      this.toSort.push(this.rankList[i].rank);
      card[i] = this.rankList[i];
      this.cardDeck.splice(randomNumber,1);
    }
    console.log(this.toSort);
    this.sortingCards();
    this.toSort = [];
    this.setState({card});
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.createNewDeck}>Create new Card Deck</button>
        <button onClick={this.getRandomCards}>Get 5 Random cards</button>
      

        <div className='container'>
        <Cards 
        divClass={this.state.card[0].divClass}
        rank={this.state.card[0].rank}
        suit={this.state.card[0].suit}
        />

        <Cards  
        divClass={this.state.card[1].divClass}
        rank={this.state.card[1].rank}
        suit={this.state.card[1].suit}
        />

        <Cards 
        divClass={this.state.card[2].divClass}
        rank={this.state.card[2].rank}
        suit={this.state.card[2].suit}
        />

        <Cards  
        divClass={this.state.card[3].divClass}
        rank={this.state.card[3].rank}
        suit={this.state.card[3].suit}
        />

        <Cards  
        divClass={this.state.card[4].divClass}
        rank={this.state.card[4].rank}
        suit={this.state.card[4].suit}
        />
        </div>
        <Hand hand={this.state.hand[0].hand}/>

      </div>
    );
  }
}



export default App;
