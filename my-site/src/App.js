// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    {/* Other routes will be added later */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;