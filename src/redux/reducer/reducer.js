

  import { ADD_PHOTOS, REMOVE_PHOTOS } from "../actions";

const initialState = {
  content: [],
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHOTOS:
      return {
        ...state,
        content: (action.payload),
      };

    case REMOVE_PHOTOS:
      return {
        ...state,
        content: (action.payload).remove()
          
          
        ,
      };
    default:
      return state;
  }
};

export default galleryReducer;