import { SET_PHOTO_DESC_FILTER, NOT_FEATURED, FEATURED, 
        PORTRAIT, LANDSCAPE, SQUARISH} from '../actions/types'

const filtersReducerDefaultState = {
  descLookup: '',
  sortBy: 'featured',
  orientation: ''
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case SET_PHOTO_DESC_FILTER:
      return {
        ...state,
        descLookup: action.descLookup
      }
    case NOT_FEATURED:
      return {
        ...state,
        sortBy: 'notFeatured'
      }
    case FEATURED:
      return {
        ...state,
        sortBy: 'featured'
      }
    case PORTRAIT:
      return {
        ...state,
        orientation: 'portrait'
      }
    case LANDSCAPE:
      return {
        ...state,
        orientation: 'landscape'
      }
    case SQUARISH:
      return {
        ...state,
        orientation: 'squarish'
      }
    default:
      return state;
  }
}

export default filtersReducer