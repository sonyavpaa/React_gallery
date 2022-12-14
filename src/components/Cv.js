import { MobileView } from "react-device-detect";
import { Link } from "react-router-dom";
import "../css/Cv.css";

const Cv = () => {
  return (
    <div className="cvContainer">
      <MobileView>
        {" "}
        <a href="mailto:sonja.vpaa@gmail.com<">
          <p>sonja.vpaa@gmail.com</p>
        </a>
      </MobileView>
      <p>
        visual artist/event producer/ performer born 13th of Friday in
        Savonlinna, Finland
      </p>
      <p> currently lives and works in Kauniainen</p>
      <br></br>
      <p> EDUCATION</p>
      <ul>
        <a className="cvLink2" href="https://sonyaweb.herokuapp.com/">
          <p>BCH, Software Developer programme, 2022-</p>
        </a>

        <p> TUAS Arts Academy, Fine Arts programme, 2011-2017. </p>
        <p>Institute of Voionmaa: Syllabus of Photography, 2008-2009. </p>
      </ul>
      <br></br>
      <p>ACTIVITIES</p>
      <ul>
        <Link className="cvLink1" to="/curators">
          <p>
            The Unbearable Lightness of Contemporary Art Curatorship,
            performance created and performed /w Jonne Väisänen, Sen se
            recidency/ exhibition, Kajaani, 2022.
          </p>
        </Link>

        <Link className="cvLink1" to="/fridaynightdinner">
          <p>
            Events production, producer, Sir Toby’s Hostel, Prague (CZ),
            2018-2019.
          </p>
        </Link>
        <Link className="cvLink1" to="/turunpa">
          <p>Turun PA-piiri performance, Olohuone 306,4 km2 festival, 2017. </p>
        </Link>
        <a
          className="cvLink2"
          href="http://metsanpeitossapyha.blogspot.com/2017/07/pyhiinvaellus-kuusiston-kappelinmaella.html"
        >
          <p>Paneelikeskustelu Pyhästä, producer/ conversation leader, 2017.</p>
        </a>
        <p>GalleriaGalleria, pop up gallery producer, 2017. </p>
        <Link to="/kammari" className="cvLink1">
          <p> Kammari, conversation event producer, 2017. </p>
        </Link>
        <Link to="/suomikuvia" className="cvLink1">
          <p>SUOMIKUVIA performance, H2Ö festival, 2016.</p>
        </Link>
      </ul>
      <br></br>
      <p>SOLO EXHIBITIONS</p>
      <ul>
        <a
          className="cvLink2"
          href="https://www.turku.fi/uutinen/2017-10-12_suomalaisuuden-monet-kasvot-lokakuussa-hansakorttelissa"
        >
          <p>Suomalaisuuden monet kasvot, Turun Hansakortteli, Turku, 2017.</p>
        </a>

        <p>Vanhuus ei tule, Galleria Pinna, Savonlinna, 2011. </p>
      </ul>
      <br></br>
      <p>GROUP EXHIBITONS</p>
      <ul>
        <Link to="/eden" className="cvLink1">
          <p>
            Even Share, Contemporary Art Museum of Estonia (EKKM), Tallinn (EE),
            2017.
          </p>
        </Link>
        <p>Contemporary Self Portraits, Köysiratagalleria, Turku, 2014. </p>{" "}
        <p>Hedonia, mielihyvän liha ja teoria, Kirjakahvila, Turku, 2013. </p>
        <p>
          {" "}
          En kirjoita mitään tarinaa, The Photographic Centre Peri, Turku, 2012.
        </p>
      </ul>{" "}
      <br></br>
      <p> WORKS IN PUBLICATIONS </p>{" "}
      <ul>
        {" "}
        <p>Basso-magazine, May 2009.</p>
      </ul>
      <br></br>
      <br></br>
      <Link className="arrowBack" to="/">
        {" "}
        &#8592;
      </Link>
    </div>
  );
};

export default Cv;
