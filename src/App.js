import React from 'react';
import './App.css'
import Header from './header';
import Home from './home';
import Watchlist from './watchlist';
import Details from './details';
import {BrowserRouter, HashRouter, Routes, Route, UseParams} from 'react-router-dom'

function App() {
    return (
     
            <div>

                <HashRouter>
                    <Header/>
                    <Routes>
                        <Route exact="exact" path='/' element={<Home/>}></Route>
                        <Route exact="exact" path='/watchlist' element={<Watchlist/>}></Route>
                        <Route exact="exact" path='/details' element={<Details/>}></Route>

                    </Routes>
                </HashRouter>

            </div>
     

    );
}

export default App;
