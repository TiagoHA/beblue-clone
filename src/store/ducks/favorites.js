import { useDispatch } from 'react-redux'

export const Types = {
  ADD_FAVORITE: 'favorites/ADD_FAVORITE',
  DELETE_FAVORITE: 'favorites/DELETE_FAVORITE',
}

const INITIAL_STATE = {
  favorites: [
    {
      id: 1,
      name: 'Crédito',
      link: 'www.bebluecredito.com.br',
      tags: ['CRÉDITO'],
    },
    {
      id: 2,
      name: 'wALLET',
      link: 'www.bebluecredito.com.br/wallet',
      tags: ['WALLET'],
    },
  ],
}

export default function player(state = INITIAL_STATE, action) {
  console.log('State: ', state)
  console.log('Action: ', action)

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

export function Actions() {
  const dispatch = useDispatch()

  const Actions = {
    addFavorite: favorite =>
      dispatch({
        type: Types.ADD_FAVORITE,
        payload: { favorite },
      }),

    deleteFavorite: favorite_id =>
      dispatch({
        type: Types.DELETE_FAVORITE,
        payload: { favorite_id },
      }),
  }

  return Actions
}
