export const SELECT_ITEM: string = 'SELECT_ITEM';

export function selectedItemReducer(state: any = null, {type, payload}) {
  switch (type) {
    case SELECT_ITEM:
      return payload;
    default:
      return state;
  }
}