import { Provider } from 'react-redux';
import Page from './Page';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
}

export default App;
