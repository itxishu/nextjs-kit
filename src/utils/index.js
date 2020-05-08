/* eslint-disable import/prefer-default-export */
export const checkServer = () => {
  return typeof window === 'undefined';
};
