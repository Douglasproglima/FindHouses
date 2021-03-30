import api from './api';

export const getHousesCall = async () => {
  try {
    const response = await api.get(
      'properties/v2/list-for-rent?city=Miami&state_code=FL&limit=15&offset=0&sort=relevance',
    );
    return response.data;
  } catch (err) {
    console.log({ err });
    return err;
  }
};
