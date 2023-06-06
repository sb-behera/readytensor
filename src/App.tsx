import './App.css';

import SignUp from './components/form';
import List from './components/getform'

import {
  BrowserRouter,
  Routes,
  Route
 
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/getForm" element={<List />}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
};


export default App;
