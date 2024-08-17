import React from "react"
import { FaRegCheckCircle } from "react-icons/fa"
import Toast from "../Toast/index"

export default function ToastSection() {
	return (
		<section className="toast-section">
			<div className="container">
				<div className="toast-wrapper">
					<Toast>
						<Toast.Title>Success</Toast.Title>
						<Toast.Text>Your work has been saved</Toast.Text>
					</Toast>
					<Toast theme="warning">
						<Toast.Title>Warning</Toast.Title>
						<Toast.Text>A network error was detected</Toast.Text>
					</Toast>
					<Toast theme="information">
						<Toast.Title>Information</Toast.Title>
						<Toast.Text>Please read updated information</Toast.Text>
					</Toast>
					<Toast theme="error">
						<Toast.Title>Error</Toast.Title>
						<Toast.Text>Please re-save your work again</Toast.Text>
					</Toast>
				</div>
			</div>
		</section>
	)
}
