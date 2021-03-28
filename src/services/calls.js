import api from './api';

export const getHousesCall = async () => {
  try {
    /*
  const queryParams = {
    city: 'New York City',
    state_code: 'NY',
    limit: 15,
    offset: 0,
    sort: 'relevance',
  };
  */

    //const result = await api.get('properties/v2/list-for-rent', queryParams);
    const result = await api.get(
      `properties/v2/list-for-rent?city=Columbia&state_code=SC&limit=15&offset=0&sort=relevance`,
    );
    return result.data;
  } catch (error) {
    console.log({ error });
    return error;
  }
};
