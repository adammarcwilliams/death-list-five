import { db } from '../..'

/*
|--------------------------------------------------------------------------
| Action creators...
|--------------------------------------------------------------------------
*/

export const addTarget = (target) => {
  type: 'ADD_TARGET',
  target
}


/*
|--------------------------------------------------------------------------
| Thunks...
|--------------------------------------------------------------------------
*/

export const addTargetAsync = (target) => {
  return async (dispatch) => {
    dispatch(addTarget(target));
    try {
      // do async target and handle Redux offline stuff??
    } catch (error) {
      console.error(error);
      // dispatch(flashMessage(error))
    }
  };
};