import 'cloudinary-video-player/dist/cld-video-player.min.css';
import React, { useRef, useEffect, useState } from 'react'

const VideoPlayer = (props) => {
  const videoEl = useRef();
  const [cloud] = useState(props.cloudName);
  const [id] = useState(props.publicId);
  const [jsLoaded, setJSLoaded] = useState(false);

  useEffect(() => {
    if (!jsLoaded) {
      const scriptTag = document.createElement('script');
      scriptTag.src = 'https://cdn.jsdelivr.net/npm/cloudinary-video-player@1.9.1/dist/cld-video-player.min.js';
      scriptTag.addEventListener('load', () => setJSLoaded(true));
      document.body.appendChild(scriptTag);
    }
  }, [jsLoaded]);


  useEffect(() => {
    if (!jsLoaded) return;

    const videoPlayer = window.cloudinary.videoPlayer(videoEl.current, {
      cloud_name: cloud,
      muted: true,
      controls: true,
      width: '100%',
    });
    videoPlayer.source(id, {
      sourceTypes: ['dash', 'hls265', 'hls264', 'mp4'],
      sourceTransformation: {
        'dash': [{ streaming_profile: 'full_hd_wifi_vp9' }],
        'hls265': [{ streaming_profile: 'full_hd_wifi_h265' }],
        'hls264': [{ streaming_profile: 'full_hd_wifi' }],
        "mp4": [{ raw_transformation: "q_auto" }]
      }
    }, [jsLoaded, cloud, id]);
  })
  return (
    <div>
      <video
        className='cld-video-player cld-fluid'
        ref={videoEl}
        id='video-player'
      />
    </div>
  );
}
export default VideoPlayer;