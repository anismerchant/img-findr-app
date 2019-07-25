import { SET_PHOTO_DESC_FILTER, NOT_FEATURED, FEATURED } from './types'

export const setPhotoDescFilter = (descLookup = '') => ({
  type: SET_PHOTO_DESC_FILTER,
  descLookup
})

export const getNotFeatured = () => ({
  type: NOT_FEATURED
})

export const getFeatured = () => ({
  type: FEATURED
})