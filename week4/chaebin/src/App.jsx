import React from 'react'
import './App.css'
import Header from "./components/Header"
import Content from "./components/Content"
import Plus from "./components/Plus"
import Tab from "./components/Tab"

function App() {
  return (<div className="App">
      <Header />
      <Content />
      <Plus />
      <Tab />
    </div>
  )
}

export default App
