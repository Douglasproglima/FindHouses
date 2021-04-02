import AsyncStorage from '@react-native-async-storage/async-storage';

//Limpa os favoritos salvos no AsyncStorage
//AsyncStorage.clear();

const FAVORITE_KEY = '@FindHouses:Favorites';

export const saveData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (e) {
    console.log(e);
  }
};

export const saveHouseAsFavorite = async houseId => {
  //console.log('houseId: ' + houseId);
  const savedFavorites = await getData(FAVORITE_KEY);
  //console.log('savedFavorites: ' + savedFavorites);

  let arrayFavorites = [];

  if (savedFavorites) {
    arrayFavorites = JSON.parse(savedFavorites);

    if (arrayFavorites.find(house => house === houseId)) {
      return {
        error: 'Este imóvel já está nos favoritos',
      };
    }
  }

  arrayFavorites.push(houseId);
  await saveData(FAVORITE_KEY, JSON.stringify(arrayFavorites));
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value !== null ? value : null;
  } catch (e) {
    console.log(e);
  }
};

export const getIfHouseIsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (savedFavorites) {
    arrayFavorites = JSON.parse(savedFavorites);

    if (arrayFavorites.find(house => house === houseId)) return true;
  }

  return false;
};

export const removeHouseAsFavorite = async houseId => {
  const savedFavorites = await getData(FAVORITE_KEY);

  if (savedFavorites) {
    const arrayFavorites = JSON.parse(savedFavorites);
    const newSavedFavorites = arrayFavorites.filter(house => house !== houseId);

    await saveData(FAVORITE_KEY, JSON.stringify(newSavedFavorites));
  }
};
