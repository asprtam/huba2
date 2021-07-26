import React, { useRef, useEffect, useState } from "react";
import mainImg from '../images/main kopia3.jpg';

const About = () => {
    const cont = useRef(null);
    const [yOffSet, setYOffSet] = useState(0);
    const [vision, setVison] = useState('hidden');
    let desiredPos;
    const handleScroll = () => {
        console.log(window.pageYOffset);
        if(window.pageYOffset > desiredPos) {
            setYOffSet(window.pageYOffset - desiredPos)
            setVison('shown');
        } else {
            setYOffSet(0)
            setVison('hidden');
        }
    };
    const handleResize = () => {
        if(window.innerWidth<600) {
            desiredPos = window.innerHeight*0.7;
        } else {
            desiredPos = window.innerHeight*0.7;
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
    return (
        <div className="about">
            <div className="full">
                <h2>O Nas</h2>
                <p>
                    Tam, gdzie Dunajec wpada do <strong>Jeziora Czorsztyńskiego</strong> czeka na Państwa wypoczynek i piękne widoki.
                    Oddajemy Państwu do dyspozycji cały dom z 15 miejscami do spania.
                    Mieszkając u nas możecie oddawać się lenistwu lub zwiedzaniu okolicy.
                </p>
            </div>
            <div className="cont" ref={cont}>
                <div className={vision} style={{ transform: `translateY(-${yOffSet * 0.1}px)` }}>
                    <h3>Domek</h3>
                    <p>
                        Dom jest urządzone w bezpretensjonalnym stylu, wyłożone drewnem, 
                        kominek ogrzewa ciała i atmosferę.
                        Meble są wykonane przez miejscowych stolarzy i zdobione naturalnymi wzorami.
                        Poznaj spokój odpoczynku w górach.
                    </p>
                    <p>
                        Teren jest ogrodzony i dzieci też mogą się swobodnie bawić na zewnątrz.
                    </p>
                    <p>
                        <strong>PREFERENCJE DLA RODZIN Z DZIEĆMI</strong>
                    </p>
                    <p>
                        <strong>IDEALNY DOM DLA 2-3 RODZIN lub grupy znajomych</strong>
                    </p>
                </div>
                <div className={vision} style={{ transform: `translateY(-${yOffSet * 0.2}px)`, transitionDelay: '0.2s' }}>
                    <h3>W okolicy:</h3>
                    <ul>
                        <li>
                            Trasa rowerowa wokół Jeziora Czorsztyńskiego czekająca na pasjonatów wycieczek na dwóch kółkach
                        </li>
                        <li>
                            Stoki w: <li>Kluszkowcach - 9 km</li><li>Białce - 20 km </li><li>Niedzicy -17 km</li> 
                            dostosowane są do każdego stopnia zaawansowania narciarskiego
                        </li>
                        <li>
                            2 zamki do zwiedzania na Jeziorem, polski w Czorsztynie i węgierski w Niedzicy
                        </li>
                        <li>
                            Nasze miejsce to doskonała baza wypadowa do:
                            włóczęgi po Gorcach, wspinaczki po Tatrach 
                            lub oglądania przełomu Dunajca ze szczytu Trzech Koron w Pieninach
                        </li>
                    </ul>
                </div>
                <div className={vision} style={{ transform: `translateY(-${yOffSet * 0.1}px)`, transitionDelay: '0.5s' }}>
                    <h3>Informacje o wynajmie:</h3>
                    <p><strong>Cena wynajmu całego domu za dobę:</strong> 800 zł w sezonie grzewczym, 700 zł w sezonie letnim</p>
                    <p>W okresie Bożego Narodzenia - Sylwestra cena za dobę wynosi 1.000 zł</p>
                    <p><br/></p>
                    <p><strong>Minimalny czas wynajmu:</strong> 3 doby</p>
                    <p>Zwrotna kaucja na zabezpieczenie bezszkodowego popbytu – 500 zł</p>
                </div>
            </div>
        </div>
  )
}

export default About;
