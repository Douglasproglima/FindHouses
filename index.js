import './ReactotronConfig';
import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

console.tron.log('TESTANDO A CONFIG DO REACTTRON');
AppRegistry.registerComponent(appName, () => App);
