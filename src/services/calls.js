import api from './api';

const URI_LIST = '/properties/v2/list-for-rent';
const URI_DETAIL = '/properties/v2/detail';

export const getHousesCall = async ({ query, offset }) => {
  try {
    if (query) {
      const { sizeMin, sizeMax, priceMin, priceMax, bedsMin, bathsMin } = query;
      // console.log({ query });
      //console.log({ sizeMin, sizeMax, (priceMin && {priceMin}), priceMax, bedsMin, bathsMin });

      const result = await api.get(URI_LIST, {
        params: {
          city: 'Miami',
          state_code: 'FL',
          limit: 15,
          offset,
          sort: 'relevance',
          lot_sqft_min: sizeMin,
          lot_sqft_max: sizeMax,
          price_min: priceMin,
          price_max: priceMax,
          beds_min: bedsMin,
          baths_min: bathsMin,
        },
      });
      // console.log(result.data);
      return result.data;
    } else {
      const result = await api.get(URI_LIST, {
        params: {
          city: 'Miami',
          state_code: 'FL',
          limit: 15,
          offset,
          sort: 'relevance',
        },
      });

      return result.data;
    }
  } catch (error) {
    console.log(error);

    return error;
  }
};

export const getHouseDetail = async property_id => {
  try {
    const result = await api.get(URI_DETAIL, {
      params: {
        property_id,
      },
    });

    return result.data;
  } catch (error) {
    console.log(error);

    return error;
  }
};
