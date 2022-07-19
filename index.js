/**
 * @format
 */
import { LogBox } from 'react-native'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

LogBox.ignoreLogs([
"ViewPropTypes will be removed",
"ColorPropType will be removed",
'Each child in a list should have a unique "key" prop.',
'`flexWrap: `wrap`` is not supported with the `VirtualizedList` components.Consider using `numColumns` with `FlatList` instead.',
'componentWillMount has been renamed'
])

AppRegistry.registerComponent(appName, () => App);
