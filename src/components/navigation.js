import React, { useRef, useEffect, useState } from "react";

const Navigation = () => {
    const navEl = useRef(null);
    const [didMove, setDidMove] = useState('notMoved');
    let desiredPos;
    const handleScroll = () => {
        const yOff = window.pageYOffset;
            if(yOff >= desiredPos) {
                setDidMove('moved');
            } else {
                setDidMove('notMoved');
        }
    };
    useEffect(() => {
        desiredPos = navEl.current.offsetTop;
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll)
        };
    }, []);
    return (
        <nav ref={navEl} className={didMove}>
            <ul>
                <li><a href="https://github.com">O Nas</a></li>
                <li><a href="https://github.com">Kontakt</a></li>
                <li><a href="https://github.com">Galeria</a></li>
            </ul>
        </nav>
  )
}

export default Navigation;
