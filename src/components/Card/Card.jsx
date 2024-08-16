import React from "react"
import { FaInfoCircle } from "react-icons/fa"

export default function Card({
	children,
	icon = <FaInfoCircle />,
	backgroundColor = "#3f75fe",
}) {
	const iconStyle = { backgroundColor }
	return (
		<>
			<div className="card">
				<div className="card-icon" style={{ backgroundColor }}>
					{icon}
				</div>
				<div className="card-content">{children}</div>
			</div>
		</>
	)
}
