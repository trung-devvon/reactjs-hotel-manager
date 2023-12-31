import axios from 'axios'

export const apiUploadImageCloudinary = (data: FormData) =>
  axios({
    method: 'POST',
    url: `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUD_NAME_CLOUDINARY}/image/upload`,
    data
  })