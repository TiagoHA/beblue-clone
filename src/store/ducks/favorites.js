import { useDispatch } from 'react-redux'

export const Types = {
  ADD_FAVORITE: 'favorites/ADD_FAVORITE',
  DELETE_FAVORITE: 'favorites/DELETE_FAVORITE',
  DELETE_TAG: 'favorites/DELETE_TAG',
}

const INITIAL_STATE = {
  favorites: [
    {
      id: 1,
      title: 'Crédito',
      link: 'www.credito.com.br',
      tags: ['CRÉDITO'],
    },
    {
      id: 2,
      title: 'Wallet',
      link: 'www.wallet.com.br/wallet',
      tags: ['WALLET', 'SALDO'],
    },
    {
      id: 3,
      title: 'Credenciamento',
      link: 'www.wallet.com.br/credenciamento',
      tags: ['WALLET'],
    },
    {
      id: 4,
      title: 'wALLET',
      link: 'www.wallet.com.br/wallet',
      tags: ['WALLET', 'CASHBACK', 'SALDO'],
    },
  ],
}

export default function Favorites(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_FAVORITE: {
      const { title, link, tags } = action.payload.favorite
      const id = Date.now()

      const fixTags = [...new Set(tags.toUpperCase().split(' '))]
      const favoriteWithId = { id, title, link, tags: fixTags }

      return {
        ...state,
        favorites: [...state.favorites, favoriteWithId],
      }
    }

    case Types.DELETE_FAVORITE: {
      const { favorite_id } = action.payload
      const favorites = state.favorites.filter(fav => fav.id !== favorite_id)

      return {
        ...state,
        favorites,
      }
    }

    case Types.DELETE_TAG: {
      const { favorite_id, tag: tag_del } = action.payload

      const [selectedFavorite] = state.favorites.filter(fav => fav.id === favorite_id)
      const removedSelectedTag = selectedFavorite.tags.filter(tg => tg !== tag_del)
      const favoriteWithoutSelectedTag = { ...selectedFavorite, tags: removedSelectedTag }

      const favorites = state.favorites.map(fav => {
        if (fav.id === favorite_id) return favoriteWithoutSelectedTag
        return fav
      })

      return {
        ...state,
        favorites,
      }
    }

    default:
      return state
  }
}

export function Actions() {
  const dispatch = useDispatch()

  const Actions = {
    addFavorite: favorite => {
      dispatch({
        type: Types.ADD_FAVORITE,
        payload: { favorite },
      })
    },

    deleteFavorite: favorite_id =>
      dispatch({
        type: Types.DELETE_FAVORITE,
        payload: { favorite_id },
      }),

    deleteTag: ({ favorite_id, tag }) =>
      dispatch({
        type: Types.DELETE_TAG,
        payload: { favorite_id, tag },
      }),
  }

  return Actions
}
