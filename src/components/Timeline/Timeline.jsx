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
                  Why the Palestinian group Hamas launched an attack on Israel? All to know
									</h5>
								</a>
								<p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                03:30 GMT – Covering rocket fire
                <blockquote class="p-4 my-4 border-l-4 border-gray-300 bg-gray-50 dark:border-gray-500 dark:bg-gray-800">
                    <p class="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">"At about 6:30am (03:30 GMT) Hamas fired a huge barrage of rockets into southern Israel with sirens heard as far away as Tel Aviv and Beersheba. Hamas said it launched 5,000 rockets in an initial barrage. Israel’s military said 2,500 rockets were fired." </p>
                </blockquote>
								</p>
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
                  <source src="/video1.mp4" type="video/mp4" />
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
