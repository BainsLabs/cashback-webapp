export default (state = {}, action) => {
  switch (action.type) {
    case 'GEO_ADDRESS':
      return {
        ...state,
        address: action.payload.address,
      };
    default:
      return state;
  }
};
