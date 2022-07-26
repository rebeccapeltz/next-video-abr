require('dotenv').config()
const cloudinary = require('cloudinary').v2

// test upload video
export default async function handler(req, res) {
  const resp = await cloudinary.uploader
    // .upload('https://res.cloudinary.com/picturecloud7/video/upload/v1584394767/remote-media/video/rooster.mp4', {
    // //   .upload('./assets/rooster.mp4', {  
    .upload('./assets/surf.mp4', {

      // .upload('https://res.cloudinary.com/picturecloud7/video/upload/v1637431015/People_Surfing_cqmlmx.mp4', {

      public_id: `surf-${Date.now()}`,
      resource_type: 'video',
      invalidate: true,
      overwrite: true
    });
  console.log(resp)
  res.status(200).json({ msg: 'successful surf video upload' })
}
