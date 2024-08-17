import React from "react"
import { ToastContext } from "./Toast"

export default function ToastTitle({ children }) {
	const { titleColor } = React.useContext(ToastContext)
	const styles = { color: titleColor }
	return (
		<p className="toast-title" style={styles}>
			{children}
		</p>
	)
}
