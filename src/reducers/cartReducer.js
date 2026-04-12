export const initialCartState = [];

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id } = action.payload;

      const productInCart = state.findIndex((item) => item.id === id);
      console.log(productInCart);
      if (productInCart >= 0) {
        const newState = structuredClone(state);
        newState[productInCart].quantity += 1;
        return newState;
      }
      return [
        ...state,
        {
          ...action.payload,
          quantity: 1,
        },
      ];
    }
    case "REMOVE_FROM_CART": {
      const { id } = action.payload;
      const newCart = state.filter((item) => item.id !== id);
      return newCart;
    }
    case "UPDATE_QUANTITY_BY_ONE": {
      const { id } = action.payload;
      const selectedProduct = state.findIndex((item) => item.id === id);
      const productUpdated = structuredClone(state);
      productUpdated[selectedProduct].quantity += 1;

      return productUpdated;
    }
    case "DECREASE_QUANTITY_BY_ONE": {
      const { id } = action.payload;
      const selectedProduct = state.findIndex((item) => item.id === id);
      const productUpdated = structuredClone(state);
      productUpdated[selectedProduct].quantity -= 1;

      return productUpdated;
    }
    case "CLEAR_CART": {
      return initialCartState;
    }
  }
}
