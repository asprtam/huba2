import React, { useEffect, useState } from "react";
import mainImg from '../images/main2 kopia.jpg';

const Header = () => {
  const [padH, setPadH] = useState(0);
  const [yOffSet, setYOffSet] = useState(0);
  const [startTrans, setStartTrans] = useState('translate(-50%, -40%)');
  const handleScroll = () => {
    setYOffSet(window.pageYOffset)
  };
  const handleResize = () => {
    if(window.innerWidth<600) {
      setStartTrans('translate(-50%, -50%)');
      setPadH((window.innerHeight - window.innerWidth*0.04)*0.6)
    } else {
      setStartTrans('translate(-50%, -40%)');
      setPadH(window.innerHeight - window.innerWidth*0.04)
    }
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const hStyle = {
    height: padH
  }
  return (
    <header style={hStyle}>
      <div style={{ transform: ` translateY(${yOffSet * 0.1}px)` }}>
        <h1>HUBA</h1>
        <h2>DOM NA KAŻDĄ PORĘ ROKU</h2>
      </div>
      <img src={mainImg} alt="main" style={{ transform: `${startTrans} translateY(-${yOffSet * 0.3}px)` }}/>
    </header>
  )
}

export default Header;
