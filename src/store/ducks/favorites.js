export const Types = {
  ADD_FAVORITE: 'favorites/ADD_FAVORITE',
  DELETE_FAVORITE: 'favorites/DELETE_FAVORITE',
}

const INITIAL_STATE = {
  favorites: [],
}

export default function player(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_FAVORITE: {
      const { favorite } = action.payload
      const id = state.favorites.length + 1
      const favoriteWithId = { ...favorite, id }

      return {
        ...state,
        favorites: [...state.favorites, favoriteWithId],
      }
    }

    case Types.DELETE_FAVORITE: {
      return {
        ...state,
      }
    }

    default:
      return state
  }
}

export const Creators = {
  addFavorite: favorite => ({
    type: Types.ADD_FAVORITE,
    payload: { favorite },
  }),

  deleteFavorite: favorite_id => ({
    type: Types.DELETE_FAVORITE,
    payload: { favorite_id },
  }),
}
