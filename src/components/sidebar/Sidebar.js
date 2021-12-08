import React from 'react'
import "./sidebar.scss";

import {
MdSubscriptions,
MdExitToApp,
MdHistory,
MdHome,
MdSentimentDissatisfied,
} from "react-icons/md"
import { useHistory } from 'react-router';




const Sidebar = ({sidebar,handleToggleSidebar}) => {
  const history=useHistory();

  const urlhome=()=>{
    history.push('/');
  }

  const urldirectorio=()=>{
    history.push('/search');
  }
 
  return (
    <nav className={sidebar ? "sidebar open":"sidebar"}
    onClick={()=>handleToggleSidebar()}>

      <li onClick={urlhome}>
        <MdHome size={23} />
        <span >Home</span>
      </li>

      <li onClick={urldirectorio}>
        <MdSubscriptions size={23}/>
        <span>Peliculas</span>
      </li>


      <li>
        <MdHistory size={23}/>
        <span>History</span>
      </li>

      <li>
        <MdSentimentDissatisfied size={23}/>
        <span>I dont't Know</span>
      </li>
      <hr/>

      <li onClick={urlhome}>
            <MdExitToApp size={23} />
            <span>INICIO</span>
         </li>
      <hr/>

    </nav>
  )
}

export default Sidebar;
