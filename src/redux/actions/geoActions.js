import { reverseGeoApi } from 'services';

export const reverseGeo = (lon, lat) => async (dispatch) => {
  const res = await reverseGeoApi(lon, lat);
  dispatch({
    type: 'GEO_ADDRESS',
    payload: res.data,
  });
  return res.data;
};
