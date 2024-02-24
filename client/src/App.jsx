import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterProject from './pages/register_project'
import ProjectList from './pages/project_list'
import {Route, Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/create" element={<RegisterProject />} />
        <Route path="/" element={<ProjectList />} />
      </Routes>
    </>
  );
}

export default App
