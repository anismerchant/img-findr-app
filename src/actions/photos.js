import { GET_PHOTOS } from './types'

export const getPhotos = ({ data } = {}) => ({
  type: GET_PHOTOS,
  data
})
