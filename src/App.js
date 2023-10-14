import './App.css';
import React, { useState } from 'react';
import Header from './Components/Common/Header';
import Banner from './Components/Banner';
import NavigationMenu from './Components/NavigationMenu';
import Holder from './Components/Holder';
import PopUp from './Components/PopUp';
function App() {
  const [popup,setpopup]=useState(false);
  return (
    <>
      {popup?<PopUp/>:<></>}
      <Header setpopup={setpopup}/>
      <Banner />
      <NavigationMenu />
      <Holder/>
    </>
  );
}

export default App;
