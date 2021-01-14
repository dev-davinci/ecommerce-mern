import axios from "axios";
import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,
  ORDER_CREATE_RESET,
  ORDER_CREATE_SUCCESS,
} from "../consts/orderConsts";

export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });

    const {
      login: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/orders`, order, config);

    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });

    localStorage.removeItem("cartItems");
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;

    dispatch({
      type: ORDER_CREATE_FAIL,
      payload: message,
    });
  }
};
