import React, { useState } from 'react'
import { Container } from 'react-bootstrap'

import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import HomeScreen from './screens/homeScreen/HomeScreen'
import LoginScreen from './screens/loginScreen/LoginScreen'

import { Redirect, Route, Switch} from 'react-router-dom'

import './app.scss'
import Reproductor from './components/video/Reproductor'
import SearchScreen from './screens/searchScreen/SearchScreen'
import SearchResult from './screens/searchScreen/SearchResult'


const Layout = ({ children }) => {
   const [sidebar, toggleSidebar] = useState(false)
  

   const handleToggleSidebar = () => toggleSidebar(!sidebar)
  

   return (
      <>
         <Header handleToggleSidebar={handleToggleSidebar} />
         <div className='app__container'>
            <Sidebar
               sidebar={sidebar}
               handleToggleSidebar={handleToggleSidebar}
            />
            <Container fluid className='app__main '>
               {children}
            </Container>
         </div>
      </>
   )
}

const App = () => {
 return (
    <>
    <div>
    <Switch>
    <Route path='/' exact>
       <Layout>
          <HomeScreen />
       </Layout>
    </Route>

    <Route path='/auth'>
       <LoginScreen />
    </Route>

    <Route path='/reproductor'>
      <Layout>
       <Reproductor/>
       </Layout>
    </Route>

    <Route path='/search'>
       <Layout>
          <h4>Directorio De Peliculas</h4>
          <SearchScreen />
       </Layout>
    </Route>

    <Route path='/searchresult'>
       <Layout>
         <SearchResult/>
       </Layout>
    </Route>
    <Route>
       <Redirect to='/' />
    </Route>
 </Switch>
 </div>
 </>
   )
}

export default App