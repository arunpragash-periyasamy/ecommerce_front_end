import { BACKGROUND_COLORS } from "./constants";
import { toast, Bounce } from "react-toastify";
import axiosInstance from "./axiosInstance";
export const useTruncateTitle = (title) => {
  if (title.length > 20) {
    return title.substring(0, 20) + "...";
  }
  return title;
};

export const useCapitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const useGetBackgroundColor = () =>
  BACKGROUND_COLORS[Math.floor(Math.random() * BACKGROUND_COLORS.length)];

export const useRemoveSpaces = (str) => {
  return str.replace(/\s/g, "");
};

export const useIsValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return emailRegex.test(email);
};

export const useIsValidPassword = (password) => {
  const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+]).{8,}$/;
  return pattern.test(password);
};

export const alertMessage = (message, type = null) => {
  const style = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  };
  if (type) {
    toast[type](message, style);
  } else {
    toast(message, style);
  }
};

export const useValidateName = (name) => {
  const pattern = /^[a-zA-Z]{3,}$/;
  return pattern.test(name);
};


export const useValidatePhoneNumber = (phoneNumber) => {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phoneNumber);
}
export const updateAxiosToken = (token) => {
  axiosInstance.defaults.headers.Authorization = `Bearer ${token}`;
};
