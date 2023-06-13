/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Main from './Main';
import MainMaterialTopTab from './MainMaterialTopTab';

//BottomTab Navigation 실습
// AppRegistry.registerComponent(appName, () => Main);

//MaterialTopTab Navigator 실습
AppRegistry.registerComponent(appName, () => MainMaterialTopTab);
