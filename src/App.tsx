import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hex from './components/Hex';
import Navbar from './components/Navbar';
import Simple from './components/Simple';
import './main.css';

function App() {

    return (
        <Router>
            <section className='flex min-h-screen flex-col'>
                <Navbar />
                <>
                    <Routes>
                        <Route
                            path='/color-flipper-tsx/'
                            element={<Simple />}
                        />
                        <Route
                            path='/color-flipper-tsx/hex'
                            element={<Hex />}
                        />
                    </Routes>
                </>
            </section>
        </Router>
    );
}

export default App;
