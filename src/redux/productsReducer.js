const initialState = {
  products: [],
  product: {},
  isLoading: false,
};

const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
const GET_PRODUCT_BY_ID = "GET_PRODUCT_BY_ID";

export default function (state = initialState, action, type) {
  switch ((action, type)) {
    default:
      return true;
  }
}
