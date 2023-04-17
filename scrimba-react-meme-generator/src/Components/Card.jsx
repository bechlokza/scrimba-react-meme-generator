import React from 'react'

export default function Card(props) {

	return (
		<div className="card" key={props.id}>
			<div className="card__image-container">
				<img src={`./src/assets/${props.imageUrl}`} alt={props.mainImageAlt} />
			</div>
			<div className="card__data-container">
				<div className="card__location-container">
					<div className="card__country"><img src="./src/assets/location-icon.svg" alt="" />{props.location}</div>
					<a href="{props.googleMapsUrl}" className="card__google-maps">View on Google Maps</a>
				</div>
				<h1>{props.title}</h1>
			<div className="card__dates">{props.startDate} - {props.endDate}</div>
				<p className='card__description'>
					{props.description}
				</p>
			</div>
		</div>
	)
}