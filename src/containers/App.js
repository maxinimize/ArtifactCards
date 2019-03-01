import React, { Component } from 'react';
import CardList from '../components/CardList';
import Navbar from '../components/Navbar';
// import Scroll from '../components/Scroll';
import {createFilter} from 'react-search-input';

const KEYS_TO_FILTERS = ['card_name.english', 'rarity', 'card_type', 'color']

class App extends Component {
	constructor() {
		super()
		this.state = {
			cards: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		fetch('https://steamcdn-a.akamaihd.net/apps/583950/resource/card_set_1.3E50A21FB5DAFC5864FE5DE99E0EC84E4B3F00DB.json')
			.then(response => response.json())
			.then(cardsets => this.setState({ 
				cards: cardsets.card_set.card_list.map(({ is_red, is_blue, is_black, is_green, ...rest}) => ({
					color: (is_red && 'red') || (is_blue && 'blue') || (is_black && 'black') || (is_green && 'green') || 'none',
					...rest
				}))
			}))
	}
	
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value });
	}

	render() {
		const { cards, searchfield } = this.state;
		const realCards = cards.filter(card =>{
			return card.rarity==='Uncommon' || card.rarity==='Common' || card.rarity==='Rare'
		})

		const filteredCards = realCards.filter(createFilter(searchfield, KEYS_TO_FILTERS));

		return !cards.length ?
			<h1>loading!!!</h1> :
			(
				<div className="flex flex-column min-vh-100 tc">
	        <header className="custom--unselectable fixed top-0 w-100 white custom--bg-additional3 custom--shadow-4 z-3">
	          <Navbar onSearchChange={this.onSearchChange} />
	        </header>

	        <main className="flex-auto">
	        	<div id="sketch-particles" className="flex flex-wrap justify-center">
							<CardList cards={filteredCards} />
	          </div>
	        </main>

	        <footer className="custom--unselectable w-100 h3 flex items-center justify-center justify-end-l white custom--bg-additional3 z-2">
	          <a href="https://github.com/zero-to-mastery/ZtM-Job-Board" title="Repository">
	            <svg className="repo w2 h2" viewBox="0 0 12 16" version="1.1" aria-hidden="true">
	              <path fillRule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"></path>
	            </svg>
	          </a>
	        </footer>
	      </div>
    	);
	}
}

export default App;