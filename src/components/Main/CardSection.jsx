import React from "react"
import Card from "../Card/index"
import { FiFilm } from "react-icons/fi"
import { FaBookReader } from "react-icons/fa"
import { SiScrimba } from "react-icons/si"

export default function CardSection() {
	return (
		<section className="card-section">
			<div className="container">
				<h2>Card Component</h2>
				<div className="card-wrapper">
					<Card>
						<Card.Title>Easy Deployment</Card.Title>
						<Card.Description>
							Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
							magna sit morbi lobortis.
						</Card.Description>
					</Card>
					<Card icon={<FiFilm />} backgroundColor="#ffa07a">
						<Card.Title>Easy Deployment</Card.Title>
						<Card.Description>
							Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
							magna sit morbi lobortis.
						</Card.Description>
					</Card>
					<Card icon={<FaBookReader />} backgroundColor="#ff1000">
						<Card.Title>Easy Deployment</Card.Title>
						<Card.Description>
							Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
							magna sit morbi lobortis.
						</Card.Description>
					</Card>
					<Card icon={<SiScrimba />} backgroundColor="#32cd32">
						<Card.Title>Easy Deployment</Card.Title>
						<Card.Description>
							Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et
							magna sit morbi lobortis.
						</Card.Description>
					</Card>
				</div>
			</div>
		</section>
	)
}
