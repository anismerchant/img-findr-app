import { GET_PHOTOS } from '../actions/types'

const photosDefaultState = []

const photosReducer = (state = photosDefaultState, action) => {
  switch (action.type) {
    case GET_PHOTOS: 
      return [...action.data]
    default:
      return state
  }
}

export default photosReducer

