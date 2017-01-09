export const ADD_ITEMS: string = 'ADD_ITEMS';
export const CREATE_ITEM: string = 'CREATE_ITEM';
export const UPDATE_ITEM: string = 'UPDATE_ITEM';
export const DELETE_ITEM: string = 'DELETE_ITEM';


export const itemsReducer = (state: any = [], {type, payload}) => {
  switch (type) {
    case ADD_ITEMS:
      return payload;
    case CREATE_ITEM:
      return [...state, payload];
    case UPDATE_ITEM:
      return state.map(item => {
        return item.id === payload.id ? Object.assign({}, item, payload) : item;
      });
    case DELETE_ITEM:
      return state.filter(item => item.id !== payload.id);
    default:
      return state;
  }
};