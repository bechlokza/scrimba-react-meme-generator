import React from 'react'
import memesData from '../memesData'

export default function Meme() {



	function handleClick(e) {
		e.preventDefault();

		const randomMeme =  Math.floor(Math.random() * memesData.data.memes.length);

		const randomMemeImg = memesData.data.memes[randomMeme].url;

		console.log(randomMemeImg);

	} 

	return (
		<div className="form meme-generator__form">
			<div className="meme-generator__form-inputs">
				<input type="text" placeholder="top text here!" className="meme-generator__form-input" />
				<input type="text" placeholder="bottom text here" className="meme-generator__form-input" />
			</div>
				<button className="meme-generator__button" onClick={handleClick}>Get a new meme image  🖼</button>
		</div>
	)
}