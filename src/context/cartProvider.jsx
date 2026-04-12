import { createContext, useReducer } from "react";
import { initialCartState, reducer } from "../reducers/cartReducer";

export const cartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialCartState);

  const localStorage = (state) => {
    window.localStorage.setItem("cart", JSON.stringify(state));
  };

  const addToCart = (product) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    //localStorage(state);
  };

  const updateQuantityByOne = (product) => {
    dispatch({
      type: "UPDATE_QUANTITY_BY_ONE",
      payload: product,
    });
    localStorage(state);
  };
  const decreeseQuantityByOne = (product) => {
    dispatch({
      type: "DECREASE_QUANTITY_BY_ONE",
      payload: product,
    });
    localStorage(state);
  };

  const clearCart = () => {
    dispatch({
      type: "",
    });
    localStorage(state);
  };

  const removeProductFromCart = (product) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
    localStorage(state);
  };

  const totalProducts = state.length;
  const totalPrice = state
    .reduce((acc, product) => acc + product.price * product.quantity, 0)
    .toFixed(2);

  return (
    <cartContext.Provider
      value={{
        cart: state,
        addToCart,
        updateQuantityByOne,
        decreeseQuantityByOne,
        clearCart,
        removeProductFromCart,
        totalPrice,
        totalProducts,
      }}>
      {children}
    </cartContext.Provider>
  );
}
