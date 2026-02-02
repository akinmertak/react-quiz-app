import Introduce from './pages/introduce/Introduce';
import Quiz from "./pages/quiz/Quiz";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from "react";
function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path = '/' element={<Introduce/>}/>
          <Route path = '/quiz/:difficulty/:amount' element={<Quiz/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
