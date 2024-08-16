import React from "react"
import { BannerContext } from "./Banner"

export default function BannerTitle({ children }) {
	const { titleColor } = React.useContext(BannerContext)
	const styles = { color: titleColor }
	return (
		<p className="banner-title" style={styles}>
			{children}
		</p>
	)
}
