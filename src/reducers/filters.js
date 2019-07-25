import { SET_PHOTO_DESC_FILTER, NOT_FEATURED, FEATURED } from '../actions/types'

const filtersReducerDefaultState = {
  descLookup: '',
  sortBy: 'notFeatured'
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
    default:
      return state;
  }
}

export default filtersReducer