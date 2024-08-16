import React from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipText({ children }) {
	const { textColor } = React.useContext(TooltipContext)
	const styles = { color: textColor }

	return (
		<p className="tooltip-text" style={styles}>
			{children}
		</p>
	)
}
