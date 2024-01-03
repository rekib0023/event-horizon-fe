"use client";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const showToastMessage = (errorType: string, message: string) => {
  switch (errorType) {
    case "success":
      toast.success(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "error":
      toast.error(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "warning":
      toast.warning(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    case "info":
      toast.info(message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      break;
    default:
      toast(message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      break;
  }
};
