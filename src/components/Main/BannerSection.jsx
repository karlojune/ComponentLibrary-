import React from "react"
import { FaCheckCircle } from "react-icons/fa"
import Banner from "../Banner/index"

export default function BannerSection() {
	return (
		<section className="banner-section">
			<div className="container">
				<h2>Multiline Banner</h2>
				<div className="multiline-wrapper">
					<Banner>
						<div className="banner-content">
							<Banner.Title>Congratulations</Banner.Title>
							<Banner.Description>
								Operation completed successfully! Everything is good to go. Feel
								free to continue with your next task.
							</Banner.Description>
						</div>
					</Banner>
					<Banner status="warning">
						<div className="banner-content">
							<Banner.Title>Attention</Banner.Title>
							<Banner.Description>
								Caution! Please review the details carefully before proceeding.
								Ignoring this could lead to potential issues.
							</Banner.Description>
						</div>
					</Banner>
					<Banner status="error">
						<div className="banner-content">
							<Banner.Title>
								There is a problem with your application
							</Banner.Title>
							<Banner.Description>
								Something went wrong! Please try again or contact support. We're
								here to help you resolve the issue.
							</Banner.Description>
						</div>
					</Banner>
					<Banner status="neutral">
						<div className="banner-content">
							<Banner.Title>Update available</Banner.Title>
							<Banner.Description>
								New update available! Check out the latest features and
								improvements. Don't miss out on the enhanced experience.
							</Banner.Description>
						</div>
					</Banner>
				</div>
				<h2>Singleline Banner</h2>

				<div className="singleline-wrapper">
					<Banner>
						<div className="banner-content">
							<Banner.Title>Congratulations</Banner.Title>
						</div>
					</Banner>
					<Banner status="warning">
						<div className="banner-content">
							<Banner.Title>Attention</Banner.Title>
						</div>
					</Banner>
					<Banner status="error">
						<div className="banner-content">
							<Banner.Title>There is a problem</Banner.Title>
						</div>
					</Banner>
					<Banner status="neutral">
						<div className="banner-content">
							<Banner.Title>Update available</Banner.Title>
						</div>
					</Banner>
				</div>
			</div>
		</section>
	)
}
