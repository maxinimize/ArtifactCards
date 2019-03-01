import React from 'react';
import Card from './Card';

const CardList = ({ cards }) => {
	const cardCom = cards.map((user, i) => {
		return (<Card 
							key={cards[i].card_id} 
							id={cards[i].card_id}
							large_image={cards[i].large_image.default} 
							mini_image={cards[i].mini_image.default} 
							name={cards[i].card_name.english}
							text={cards[i].card_text.english}
							type={cards[i].card_type}
							rarity={cards[i].rarity}
							color={cards[i].color}
						/>
					);
	});

	return (<React.Fragment> {cardCom} </React.Fragment>);
}

export default CardList