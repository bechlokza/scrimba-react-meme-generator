import React from 'react'

export default function Meme() {

	const [meme, setMeme] = React.useState({
		topText: "",
		bottomText: "",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	});
	const [allMemes, setAllMemes] = React.useState([])

	React.useEffect(() => {
		fetch(`https://api.imgflip.com/get_memes`)
		.then(res => res.json())
		.then(data => setAllMemes(data.data.memes));
		
	}, [])

	function changeText(event) {
		const { name, value } = event.target;
		setMeme((prevMeme) => ({
				...prevMeme,
				[name]: value
		}))
	}



	function getMemeImage(e) {
		e.preventDefault();

		const randomNumber =  Math.floor(Math.random() * allMemes.length);

		const url = allMemes[randomNumber].url;

		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}));

	} 

	return (
		<div className="form meme-generator__form">
			<div className="meme-generator__form-inputs">
				<input 
					type="text" 
					placeholder="top text here!" 
					className="meme-generator__form-input"
					name="topText"
					value={meme.topText}
					onChange={changeText}
				/>

				<input type="text" 
				placeholder="bottom text here" 
				className="meme-generator__form-input"
				name="bottomText"
				value={meme.bottomText}
				onChange={changeText}
				/>

				<button className="meme-generator__button" onClick={getMemeImage}>Get a new meme image  🖼</button>
			</div>
			<div className="meme-generator__produced">
			<img src={meme.randomImage} alt="" className="meme-generator__image" />
				<h2 className="meme-generator__subheader">
					{meme.topText}
				</h2>
				<h2 className="meme-generator__subheader">
					{meme.bottomText}
				</h2>
			</div>
		</div>
	)
}