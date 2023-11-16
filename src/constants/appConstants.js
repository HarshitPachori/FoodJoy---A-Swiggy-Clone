export const CORS_PROXY_URL = "https://corsproxy.io/?";
export const SWIGGY_BASE_URL = "https://www.swiggy.com/";
export const FETCH_RES_MENU_URL =
  CORS_PROXY_URL +
  SWIGGY_BASE_URL +
  "dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=27.863869&lng=78.0758905&&submitAction=ENTER&restaurantId=";

export const FETCH_RES_URL =
  CORS_PROXY_URL +
  SWIGGY_BASE_URL +
  "dapi/restaurants/list/v5?lat=27.863869&lng=78.0758905&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING";

export const CLOUDINARY_IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

export const CLOUDINARY_MENU_ITEM_IMG_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const RESTAURANT_STRING =
  "type.googleapis.com/swiggy.presentation.food.v2.Restaurant";
export const ITEM_CATEGORY_STRING =
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
