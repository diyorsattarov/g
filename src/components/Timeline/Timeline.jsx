"use client";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./Timeline.css";
import video1 from "./video1.mp4";

export default function DefaultTimeline({ darkMode }) {
	return (
		<div className={`timeline-container ${darkMode ? "dark" : ""}`}>
			<Timeline className={`custom-timeline ${darkMode ? "dark" : ""}`}>
				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 7, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 1</Timeline.Title>
						<Timeline.Body>
							<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<a href="#">
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										Official Article Title
									</h5>
								</a>
								<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
									Here are articles regarding the Gaza genocide.
								</p>
								<a
									href="#"
									class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									Read more
									<svg
										class="w-3.5 h-3.5 ml-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</a>
							</div>
							<th />
							<div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
								<a href="#">
									<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
										Official Video Title
									</h5>
								</a>
								<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
									<video class="w-full" controls>
										Your browser does not support the video tag.
									</video>
								</p>
							</div>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>

				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 8, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 2</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>
				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 9, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 3</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>

				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 10, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 4</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>

				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 11, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 5</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>

				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 12, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 6</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>

				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 13, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 7</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>

				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 14, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 8</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>

				<Timeline.Item>
					<Timeline.Point />
					<Timeline.Content>
						<Timeline.Time>October 15, 2023</Timeline.Time>
						<Timeline.Title>Gaza Genocide Day 9</Timeline.Title>
						<Timeline.Body>
							<p>Content body</p>
						</Timeline.Body>
						<Button color="gray">
							<p>Learn More</p>
							<HiArrowNarrowRight className="ml-2 h-3 w-3" />
						</Button>
					</Timeline.Content>
				</Timeline.Item>
			</Timeline>
		</div>
	);
}
