import { useDispatch } from 'react-redux'

export const Types = {
  SET: 'errors/SET',
  HIDE: 'errors/HIDE',
}

const INITIAL_STATE = {
  visible: false,
  type: null,
  message: null,
}

export default function error(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET:
      return { ...state, visible: true, ...action.payload }

    case Types.HIDE:
      return { ...state, visible: false }

    default:
      return state
  }
}


export function ActionsCreator() {
  const dispatch = useDispatch()

  return Actions(dispatch)
}

export function Actions(dispatch) {
  const Actions = {
    setError: (type, message) =>
      dispatch({
        type: Types.SET,
        payload: { type, message },
      }),

    hideError: () =>
      dispatch({
        type: Types.HIDE,
      }),
  }

  return Actions;
}
