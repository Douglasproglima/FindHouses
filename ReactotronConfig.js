import Reactotron from 'reactotron-react-native';

console.log(__DEV__);
if (__DEV__) {
  /*const tron = Reactotron.configure({ host: '127.0.0.1' })*/
  const tron = Reactotron.configure() //{ host: '127.0.0.1' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}

/*
Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .connect(); // let's connect!
  */
