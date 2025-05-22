// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jobs from "./pages/Jobs";
import Companies from "./pages/Companies";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/jobs" element={<Jobs />} />
                    <Route path="/companies" element={<Companies />} />
                    {/* Add other routes here */}
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;