import React from 'react'
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import "C:/Users/birds/Desktop/test dbb/client/src/App.css";
import Student from './pages/Student';
import Addstudent from './pages/Addstudent';
import Editstudent from './pages/Editstudent';



const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Student}/>
        <Route exact path='/add-student' Component={Addstudent}/>
        <Route exact path="/edit-student/:id" Component={Editstudent}/>
      </Routes>
    </Router>
  );
}

export default App
