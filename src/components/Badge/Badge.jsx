import React from "react"
import data from "./data"
import classname from "classnames"

export default function Badge({
	children,
	badgeColor = "red",
	shape = "square",
}) {
	const { color, backgroundColor } = data[badgeColor]
	const styles = { color, backgroundColor }
	const allClass = classname("badge", shape)

	return (
		<div className={allClass} style={styles}>
			{children}
		</div>
	)
}
