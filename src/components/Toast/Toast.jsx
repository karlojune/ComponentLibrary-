import React from "react"
import data from "./data.jsx"

const ToastContext = React.createContext()

export default function Toast({ children, theme = "success" }) {
	const { icon, backgroundColor, iconColor } = data[theme]
	const bgStyles = { backgroundColor }
	const iconStyles = { color: iconColor }
	return (
		<ToastContext.Provider value={data[theme]}>
			<div className="toast" style={bgStyles}>
				<div className="toast-icon" style={iconStyles}>
					{icon}
				</div>
				<div className="toast-details">{children}</div>
			</div>
		</ToastContext.Provider>
	)
}

export { ToastContext }
