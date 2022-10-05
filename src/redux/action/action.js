export const ADD_PHOTOS = "ADD_PHOTOS";
export const REMOVE_PHOTOS = "REMOVE_PHOTOS";

export const addFavourite = (photo) => ({
    type: ADD_PHOTOS,
    payload: photo,
  });
  
  export const removeFavourite = (photo) => ({
    type: REMOVE_PHOTOS,
    payload: photo,
  });