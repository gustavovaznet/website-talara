//SCROLLTOTOP

//IMPORTING
//REACT
import  { useEffect } from 'react';
//ROUTER DOM
import {useLocation} from 'react-router-dom';

//SCROLL TO TOP
function ScrollToTop() {
  const { pathname } =  useLocation();

  useEffect( ()=>{
    window.scrollTo(0,0);

  },[pathname] )
    return null;
}

//EXPORTING SCROLLTOTOP
export default ScrollToTop