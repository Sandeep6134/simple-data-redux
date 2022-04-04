import './App.css';
import DataPage from './pages/DataPage';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  return (
    <div className="App background">
      <Provider store={store}>
        <DataPage></DataPage>
      </Provider>
    </div>
  );
}

export default App;
