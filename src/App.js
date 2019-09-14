import React from "react"
import { Route } from 'react-router-dom'

import TabNav from "./components/TabNav.js"
import Header from "./components/Header.js"
import WelcomPage from './components/WelcomePage'
import CharacterList from './components/CharacterList'
import LocationList from './components/LocationsList'

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomPage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationList} />
    </main>
  );
}
