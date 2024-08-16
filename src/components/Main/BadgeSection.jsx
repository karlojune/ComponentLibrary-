import React from "react"
import Badge from "../Badge/Badge"

export default function BadgeSection() {
	return (
		<section className="badge-section">
			<div className="container">
				<h2>Badge Component</h2>
				<h3>Square Shape</h3>
				<div className="badge-wrapper">
					<Badge>Red</Badge>
					<Badge badgeColor="yellow">Yellow</Badge>
					<Badge badgeColor="green">Green</Badge>
					<Badge badgeColor="blue">Blue</Badge>
					<Badge badgeColor="indigo">Indigo</Badge>
					<Badge badgeColor="purple">Purple</Badge>
					<Badge badgeColor="gray">Gray</Badge>
					<Badge badgeColor="pink">Pink</Badge>
				</div>
				<h3>Pill Shape</h3>

				<div className="badge-wrapper">
					<Badge shape="pill">Red</Badge>
					<Badge shape="pill" badgeColor="yellow">
						Yellow
					</Badge>
					<Badge shape="pill" badgeColor="green">
						Green
					</Badge>
					<Badge shape="pill" badgeColor="blue">
						Blue
					</Badge>
					<Badge shape="pill" badgeColor="indigo">
						Indigo
					</Badge>
					<Badge shape="pill" badgeColor="purple">
						Purple
					</Badge>
					<Badge shape="pill" badgeColor="gray">
						Gray
					</Badge>
					<Badge shape="pill" badgeColor="pink">
						Pink
					</Badge>
				</div>
			</div>
		</section>
	)
}
