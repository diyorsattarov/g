import React from 'react';
import './Timeline.css';
import videoFile1 from '../../videos/Oct7/video1.mp4';
import videoFile2 from '../../videos/Oct7/video2.mp4';

const ChronologicalTimeline = () => {
  const timelineEntries = [
    {
      date: 'October 7, 2023',
      content: 'Your first timeline entry goes here. You can add images, videos, and text to it.',
      videos: [
        { src: videoFile1, aspectRatio: '16:9', description: 'Video 1 Description' }, // Include aspect ratio and description for each video
        { src: videoFile2, aspectRatio: '16:9', description: 'Video 2 Description' }, // Include aspect ratio and description for each video
      ],
    },
    {
      date: 'October 8, 2023',
      content: 'Another timeline entry with different content.',
    },
    {
      date: 'October 9, 2023',
      content: 'Yet another entry to showcase your timeline.',
    },
  ];

  return (
    <div className="chronological-timeline">
      <h1>Chronological Timeline</h1>
      {timelineEntries.map((entry, index) => (
        <div key={index} className="timeline-entry">
          <div className="entry-date">{entry.date}</div>
          <div className="entry-content">
            {entry.content && <p>{entry.content}</p>}
            {entry.videos && entry.videos.length > 0 && (
              <div className="video-container" data-aspect-ratio={entry.videos[0].aspectRatio}>
                {entry.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="video-item">
                    <video controls>
                      <source src={video.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    {video.description && <p className="video-description">{video.description}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChronologicalTimeline;
