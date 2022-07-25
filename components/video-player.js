import 'cloudinary-video-player/dist/cld-video-player.min.js';
import 'cloudinary-video-player/dist/cld-video-player.min.css';
import { useEffect } from 'react';

const videoPlayerInit = (props) => {
  // debugger
  const videoElement = document.querySelector('#fn-video')
  window.cloudinary.videoPlayer(videoElement, {
    cloud_name: props.cloudName,
    publicId: props.publicId,
    fluid: true,
    controls: true,
    preload: "auto",
    mute: true,
    autoplay: false,
  });
};

const VideoPlayer = (props) => {
  

  useEffect(() => {
    videoPlayerInit(props);
    // return () => {
      // console.log('This will be logged on unmount');
    // };
  },[]);

  return (
    <>
      <video id="fn-video" />
    </>
  );
};
export default VideoPlayer;
