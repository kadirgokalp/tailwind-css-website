import React from "react"
import "./App.css"
function Website() {
	return (
		<div className="container h-screen  items-center justify-center   ">
			<div className=" flex columns-2 rounded-md overflow-hidden max-w-4xl   mx-auto flex-col  ">
				<div className="topSide">
					<h1 className="topSideHeader md:text-4xl sm:text-2xl">
						Join our community
					</h1>
					<p className="topSideSubHeader ">
						30-day, hassle-free money back guarantee
					</p>
					<p className="topSideParagh">
						Gain access to our full library of tutorials along with
						expert code reviews.
					</p>
					<p className="topSideParagh">
						Perfect for any developers who are serious about honing
						their skills.
					</p>
				</div>
				<div className="w-full  flex flex-row md:flex-row xs:flex-col sm:flex-col ">
					<div className="w-1/2 bg-teal-600 p-10 md:w-1/2 sm:w-full xs:w-full">
						<h3 className="buttomSideHeaders">
							Montly Subscription
						</h3>
						<div className="flex flex-row space-x-5 mb-4 items-center">
							<p className="text-white font-medium text-4xl">
								$29
							</p>
							{/* alignItem center */}
							<p className="text-gray-200 opacity-60 text-xl font-light tracking-wider ">
								per month
							</p>
						</div>
						<p className="bottomParagh text-white ">
							Full access for less than $1 a day
						</p>
						<button className="signUpButton">Sign Up</button>
					</div>
					<div className="w-1/2 flex flex-col flex-grow bg-teal-400 p-14 md:w-1/2 sm:w-full xs:w-full">
						<h3 className="buttomSideHeaders ">Why Us</h3>
						<div>
							<p className="bottomParagh -mt-4  ">
								Tutorials by industry experts
							</p>
							<p className="bottomParagh  ">
								Peer & expert code review
							</p>
							<p className="bottomParagh  ">Coding exercises</p>
							<p className="bottomParagh  ">
								Access to our GitHub repos
							</p>
							<p className="bottomParagh  ">Community forum</p>
							<p className="bottomParagh  ">Flashcard decks</p>
							<p className="bottomParagh  ">
								New videos every week
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Website
