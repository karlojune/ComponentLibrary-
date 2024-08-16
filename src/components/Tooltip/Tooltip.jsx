import React from "react"
import data from "./data.js"
import { HiOutlineInbox } from "react-icons/hi"
import { FaTimes } from "react-icons/fa"
import { PiArrowDownFill } from "react-icons/pi"

const TooltipContext = React.createContext()

export default function Tooltip({ children, theme = "dark" }) {
	const { iconColor, backgroundColor } = data[theme]
	const iconStyles = { color: iconColor }
	const bgStyles = { backgroundColor }
	const arrowDownStyles = { color: backgroundColor }

	return (
		<TooltipContext.Provider value={data[theme]}>
			<div className="tooltip" style={bgStyles}>
				<div className="tooltip-icon" style={iconStyles}>
					<HiOutlineInbox />
				</div>
				<div className="tooltip-details">{children}</div>
				<div className="tooltip-close" style={iconStyles}>
					<FaTimes />
				</div>
				<div className="tooltip-arrow" style={arrowDownStyles}>
					<PiArrowDownFill />
				</div>
			</div>
		</TooltipContext.Provider>
	)
}

export { TooltipContext }
