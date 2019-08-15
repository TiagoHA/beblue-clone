import { useDispatch, useSelector } from 'react-redux'

export const Types = {
  SEARCH_BOOKMARKS: 'search/SEARCH_BOOKMARKS',
  CLEAR_SEARCH: 'search/CLEAR_SEARCH',
  VISIBLE: 'search/VISIBLE',
}

const INITIAL_STATE = {
  search: '',
  visibility: true,
}

export default function Search(state = INITIAL_STATE, action) {
  console.log("State: ", state);
  console.log("Action: ", action);

  switch (action.type) {
    case Types.SEARCH_BOOKMARKS: {
      const { search } = action.payload

      return {
        ...state,
        search,
      }
    }

    case Types.CLEAR_SEARCH: {
      return {
        ...state,
        search: '',
      }
    }

    case Types.VISIBLE: {
      const { visibility } = action.payload

      return {
        ...state,
        visibility,
      }
    }

    default:
      return state
  }
}

export function Actions() {
  const dispatch = useDispatch()
  const { visibility: storeVisibility } = useSelector(
    state => state.searchStore,
  )

  const Actions = {
    search: search =>
      dispatch({
        type: Types.SEARCH_BOOKMARKS,
        payload: { search },
      }),

    clearSearch: () =>
      dispatch({
        type: Types.CLEAR_SEARCH,
      }),

    toggleSearch: visibility => {
      Actions.clearSearch();

      if (visibility === true || visibility === false) {
        return dispatch({
          type: Types.VISIBLE,
          payload: { visibility },
        })
      }

      return dispatch({
        type: Types.VISIBLE,
        payload: { visibility: !storeVisibility },
      })
    },
  }

  return Actions
}
