import React from "react"
import Tooltip from "../Tooltip/index"

export default function TooltipSection() {
	return (
		<section className="tooltip-section">
			<div className="container">
				<h2>Tooltip Component</h2>
				<div className="tooltip-wrapper">
					<Tooltip>
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
					<Tooltip theme="light">
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
					<Tooltip theme="darkBlue">
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
					<Tooltip theme="lightBlue">
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
					<Tooltip theme="darkPink">
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
					<Tooltip theme="lightPink">
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
					<Tooltip theme="darkGreen">
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
					<Tooltip theme="lightGreen">
						<Tooltip.Title>Archive notes</Tooltip.Title>
						<Tooltip.Text>
							Lorem ipsum dolor sit amet consectetur adipisicing elit oluptatum
							tenetur.
						</Tooltip.Text>
					</Tooltip>
				</div>
				<div className="tooltip-demo-wrapper">
					<p class="tooltip-content">
						hover me
						<div className="tooltip-demo">
							<Tooltip theme="lightGreen">
								<Tooltip.Title>Archive notes</Tooltip.Title>
								<Tooltip.Text>
									Lorem ipsum dolor sit amet consectetur adipisicing elit
									oluptatum tenetur.
								</Tooltip.Text>
							</Tooltip>
						</div>
					</p>
				</div>
			</div>
		</section>
	)
}
