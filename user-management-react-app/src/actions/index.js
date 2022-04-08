export const logIn = (values) => {
  return {
    type: 'LOG_IN',
    payload: values,
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
