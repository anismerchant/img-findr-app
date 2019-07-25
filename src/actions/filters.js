import { SET_PHOTO_DESC_FILTER, NOT_FEATURED, FEATURED,
         PORTRAIT, LANDSCAPE, SQUARISH } from './types'

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

export const getPortrait = () => ({
  type: PORTRAIT
})

export const getLandscape = () => ({
  type: LANDSCAPE
})

export const getSquarish = () => ({
  type: SQUARISH
})