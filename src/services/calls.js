import api from './api';

export const getHousesCall = async () => {
  try {
    const params = {
      city: 'Miami',
      state_code: 'FL',
      limit: 15,
      offset: 0,
      sort: 'relevance',
    };

    //const result = await api.get('properties/v2/list-for-rent', params);
    const result = await api.get(
      `/properties/v2/list-for-rent?city=Columbia&state_code=SC&limit=15&offset=0&sort=relevance`,
    );

    console.log('calls');
    console.log(params);

    console.log(result.data);

    return result.data;
  } catch (error) {
    console.log('Erro no calls');
    console.log({ error });

    return error;
  }
};

export default getHousesCall;
