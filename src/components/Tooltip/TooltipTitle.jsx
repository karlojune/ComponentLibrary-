import React from "react"
import { TooltipContext } from "./Tooltip"

export default function TooltipTitle({ children }) {
	const { titleColor } = React.useContext(TooltipContext)
	const styles = { color: titleColor }
	return (
		<p className="tooltip-title" style={styles}>
			{children}
		</p>
	)
}
