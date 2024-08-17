import React from "react"
import { ToastContext } from "./Toast"

export default function ToastText({ children }) {
	const { textColor } = React.useContext(ToastContext)
	const styles = { color: textColor }
	return (
		<p className="toast-text" style={styles}>
			{children}
		</p>
	)
}
