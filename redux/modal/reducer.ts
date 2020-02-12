import {
  HIDE_MODAL,
  SHOW_CREATE_DISH_MODAL,
  SHOW_LISTING_MODAL,
  SHOW_EDIT_DISH_MODAL,
  SHOW_CREATE_LISTING_MODAL,
  SHOW_UPDATE_PROFILE_MODAL,
  SHOW_LISTING_HISTORY_MODAL
} from './types'
import AddDishScreen from '../../screens/AddDishScreen'
import ListingScreen from '../../screens/ListingScreen'
import CreateListingScreen from '../../screens/CreateListingScreen'
import UpdateProfileScreen from '../../screens/UpdateProfileScreen'

export type ModalState = {
  showModal: boolean
  component: any
  modalProps: any
  lightStatusBar: boolean
}

const INITIAL_STATE: ModalState = {
  showModal: false,
  component: null,
  modalProps: {},
  lightStatusBar: false
}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HIDE_MODAL:
      return {
        ...state,
        showModal: false,
        lightStatusBar: false,
        headerTitle: ''
      }
    case SHOW_LISTING_HISTORY_MODAL:
    case SHOW_LISTING_MODAL:
      return {
        ...state,
        component: ListingScreen,
        modalProps: {
          ...action.payload,
          isHistory: action.type === SHOW_LISTING_HISTORY_MODAL
        },
        showModal: true,
        lightStatusBar: true
      }
    case SHOW_CREATE_LISTING_MODAL:
      return {
        ...state,
        component: CreateListingScreen,
        modalProps: action.payload,
        showModal: true
      }
    case SHOW_CREATE_DISH_MODAL:
      return {
        ...state,
        component: AddDishScreen,
        modalProps: {},
        showModal: true
      }
    case SHOW_EDIT_DISH_MODAL:
      return {
        ...state,
        component: AddDishScreen,
        modalProps: action.payload,
        showModal: true
      }
    case SHOW_UPDATE_PROFILE_MODAL:
      return {
        ...state,
        component: UpdateProfileScreen,
        modalProps: action.payload,
        showModal: true
      }
    default:
      return state
  }
}

export default reducer
