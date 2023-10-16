'use client';
import { Button, Timeline } from 'flowbite-react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import './Timeline.css';

export default function DefaultTimeline({ darkMode }) {
  return (
    <div className={`timeline-container ${darkMode ? 'dark' : ''}`}>
    <Timeline className={`custom-timeline ${darkMode ? 'dark' : ''}`}>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
            October 7, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
            Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 8, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
            Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 9, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
            Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 10, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 11, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 12, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 13, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 14, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>

      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <Timeline.Time>
          October 15, 2023
          </Timeline.Time>
          <Timeline.Title>
            Title
          </Timeline.Title>
          <Timeline.Body>
            <p>
              Content body
            </p>
          </Timeline.Body>
          <Button color="gray">
            <p>
              Learn More
            </p>
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
    </div>
  );
}
