export const submitForm = (values) => {
  return {
    type: 'SUBMIT_FORM',
    payload: {
      ...values,
      profilePhoto: URL.createObjectURL(values.profilePhoto),
    },
  };
};

export const logOut = () => {
  return {
    type: 'LOG_OUT',
  };
};
