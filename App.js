import React from 'react';
import {Provider} from 'react-redux';
import {store} from './Src/redux/store';
import {useSelector} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './Src/redux/store';
import {Logintocreateuser} from './Src/Navigations/logintocreateuser';
import {HomeScreen} from './Src/Navigations/logintocreateuser';

const AppWrapper = () => {
  const storeData = useSelector(state => state);
  const uid = storeData.userReducer.uid;
  if (uid) {
    return <HomeScreen/>;
  }
  return <Logintocreateuser />;
};

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppWrapper />
      </PersistGate>
    </Provider>
  );
}

export default App;
