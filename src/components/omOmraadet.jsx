import React from 'react';

const Omraadet = () => {
    return ( 
        <div className="omOmraadet">
            <h1 className="center-text mainHeading">Om Området</h1>
            <div className="row section">
                <div className="col">
                    <img src="./images/SunnyBeach-Beach.jpg" className="img-omraadet rounded"/>
                </div>
                <div className="col">
                    <h3>Stranden</h3>
                    <p>
                        Sunny Beach har en af de bedste strande i Bulgarien. Her kan man leje liggestole og parasoller for 8 leva ca.kr. 30,50.- (2021).
                        Det er muligt at få forskellige slags massage på stranden.
                        Flere steder på stranden er det muligt at spille beachvolley. 
                    </p>
                    <p>
                        Der tilbydes også mange vandsportsaktiviteter, som f.eks. bananbåd, cykelbåd, vandscooter og faldskærme efter en motorbåd.
                    </p>
                    <p>
                        Der anvendes et flagsystem, der viser, hvis der er badeforbud eller om man skal være på vagt. Gule flag, betyder man skal være på vagt.
                        Der findes mange livreddere på stranden. De befinder sig som regel i nærheden af flaget.  
                    </p>
                </div>
            </div>
            <div className="shopping">
                <div className="row section">
                    <div className="col">
                        <h3>Shopping</h3>
                        <p>
                            Der er mange gode shoppingmuligheder i Bulgarien. Man kan købe tøj, sko, cd- og dvd-skiver samt forskellige spil. Butikkerne i Bulgarien har som regel ikke siesta lukket midt på dagen. 
                            Husk, at meget af det der sælges i turistområderne kan være kopivarer.
                            I Sunny Beach ligger de fleste butikker langs strandpromenaden og ved den brede gågade ”Blomstergaden” (Flower Street). 
                            På den anden side af hovedvejen er der et bazarområde, der har åbent alle dage til kl. 22 eller 23. Her er tingene meget billigere.
                        </p>
                        <p>
                            Nessebar har masser af fine håndarbejdsbutikker, og i Burgas er der et større udbud af varer i de butikker, hvor lokalbefolkningen selv handler. 
                            I centrum af Primorsko og Tsarevo er der flere små butikker, som tilbyder souvenirs, tøj og badeartikler til fordelagtige priser. Ved bytorvet i Obzor er der flere små butikker med et varierende udbud.
                        </p>
                    </div>
                    <div className="col">
                        <img src="./images/hotel-shopping.jpg" className="img-omraadet-right rounded"/>
                    </div>
                </div>
                <div className="row 2ndRow section">
                <div className="col">
                        <img src="./images/art.jpg" className="img-omraadet rounded"/>
                    </div>
                    <div className="col">
                        <p>
                            En af de mest populære ting at tage med hjem er bl.a. rosenvand, rosenolie og andre skønhedsprodukter lavet af roser. Bulgarien har også meget fint håndværk som f.eks. træskulpturer og håndsnittede skilte. 
                            I kan finde smukke kniplingsarbejder, forskellige slags duge og tæpper på mange markeder. Bulgarerne er også kendt for deres flotte krystal. I Nessebar er der mange butikker med krystalglas, vaser m.m. i god kvalitet.
                        </p>
                        <p>
                            Mange steder er der smukke malerier og måske vil I have malet et portræt i løbet af ferien. "Malergaden" ligger i forlængelse til Hotel Barcelo Royal Beach. 
                        </p>
                        <p>
                            Ikoner, d.v.s. helgenbilleder og andre religiøse motiver malet på træ, finder man mange steder i Bulgarien. Sørg for at få et certifikat på ikonet. 
                            Det kan være et separat dokument eller være påklistret på bagsiden af ikonet. Certifikatet skal helst være stemplet og have kunstnerens signatur.
                        </p>
                    </div>
                </div>
                
            </div>
            
        </div>
        
     );
}
 
export default Omraadet;