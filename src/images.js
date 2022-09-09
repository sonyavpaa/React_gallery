import { Cloudinary } from "@cloudinary/url-gen";
import React from "react";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "", //YOUR CLOUDNAME HERE
  },
});

// cld.image/video returns a CloudinaryImage/CloudinaryVideo with the configuration set.
const video1 = cld.video("VID-20220708-WA0014_ocqte2");
const video2 = cld.video("wndqug");

const img1 = cld.image("IMG_0509_norv29");
const img2 = cld.image("IMG_0512_yoihnk");
const img3 = cld.image("dx5vcb");
const img4 = cld.image("t13osr");
const img5 = cld.image("tbmvut");
const img6 = cld.image("k2ba8c");
const img7 = cld.image("dbrl2p");
const img8 = cld.image("ffg0uo");

// An array that will be rendered inside Project components
export const projectArr = [
  {
    video: {
      img: video1,
      txt: "part of improvisational performance shared with other exhibiton artist Tommi Ruotsalainen",
    },
    header: "The Unbearable Lightness of Contemporary Art Curatorship",
    p: (
      <p>
        a week long recidency during which a performance based on Gillez Deleuze
        AntiOedipus and&nbsp;
        <a
          className="projectLink"
          href="https://www.google.com/search?q=art+curator&tbm=isch&ved=2ahUKEwiWjMvc3tj5AhWLuIsKHRLoBbgQ2-cCegQIABAA&oq=art+curator&gs_lcp=CgNpbWcQAzIECCMQJzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzoECAAQHjoECAAQGFDZBFj6J2CBKmgAcAB4AIABygGIAYsIkgEFNS4zLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=KpECY5bPLovxrgSS0JfACw&bih=654&biw=1147&client=firefox-b-d&hl=fi"
        >
          google picture results about art curators
        </a>
        &nbsp;was created and performed together with{" "}
        <a className="projectLink" href="https://jonnevaisanen.com/">
          Jonne Väisänen
        </a>{" "}
        in Sen se exhibition in Kajaani, Finland.
      </p>
    ),
  },
  {
    video: video2,
    header: "Turun PA-piiri performance, Olohuone 306,4 km2 festival, 2017.",
    p: (
      <React.Fragment>
        <p>
          a 3 day on-going performance inspired by work life, work culture and
          the philosophy of work; created for a performance festival in Turku,
          Finland.
        </p>
        <p>
          <a
            className="projectLink"
            href="https://olohuone.org/portfolio/sonja-vainionpaa-turun-pa-piiri"
          >
            More info
          </a>
        </p>
      </React.Fragment>
    ),
  },
  {
    iframe: {
      browser: (
        <iframe
          title="suomikuviaBrowser"
          className="iframeBrowser"
          src="https://www.youtube.com/embed/BTg4zPxp1Hw"
        ></iframe>
      ),
      mobile: (
        <iframe
          title="suomikuviaMobile"
          className="iframeMobile"
          src="https://www.youtube.com/embed/BTg4zPxp1Hw"
        ></iframe>
      ),
    },
    header: "SUOMIKUVIA performance, H2Ö festival, 2016",
    p: (
      <React.Fragment>
        <p>
          a performance inspired by water and politics around water; created for
          a music and arts festival in Turku, Finland.
        </p>
        <p>
          <a
            className="projectLink"
            href="https://www.youtube.com/watch?v=Oen2X6tnT10"
          >
            More content
          </a>
        </p>
      </React.Fragment>
    ),
  },
  {
    img: img4,
    header: "Kammari, conversation event producer, 2017",
    p: (
      <React.Fragment>
        <p>
          producing a set of conversation events in a gallery in Seinäjoki,
          Finland; part of a project that was funded by South Ostrobothnia
          Regional Fund (Etelä-Pohjanmaan Kulttuurirahasto/SKR). every event
          would consist of a pre-agreed theme, few invited guestes and a
          conversation leader (me) starting and leading up the conversation.
          event was free to attend by gallery guests and on the very last event
          gallery became so full there werent enough seats for everyone.
        </p>
      </React.Fragment>
    ),
  },
  {
    img: img5,
    header:
      "Pieces from Eden, Contemporary Art Museum of Estonia (EKKM), Tallinn (EE), 2017",
    p: (
      <React.Fragment>
        <p>
          an installation made out of over 600 work contracts (the agreement
          side facing to the wall) and as the final art assigment for TUAS Arts
          Academy. inspired by work. statment accompanied with the piece:
        </p>
        <br></br>
        <p style={{ width: "90%" }}>
          “Work has been my main theme and muse for a while now. By work I mean
          the activity you usually get paid for to buy food and pay your rent. I
          see work to be very essential part of our daily lives: Finnish
          politics are filled with issues related to work life and of course I
          am interested in the contrast of making art against of making “real
          work”.<br></br>
          <br></br> I’m very accustomed to put work very high in my life: for
          example when I was a child I was told to be friends with everyone I
          meet, because anyone of them could be my boss or work mate at job when
          I grow up. You go to school to get a job, I was told. My little home
          town was bad because you couldn’t find any job. Nothing is more
          important than work and a job. I was told so. And I grew up in it.
          <br></br>
          <br></br> The installation in EKKM rises from these thoughts: all the
          rules and customs related to work that I sometimes find hard to
          question at all. For me the questioning has become to be very
          important to understand what I am doing with my life… Even more
          important than the work itself.”
        </p>
      </React.Fragment>
    ),
  },
];

// An array that is rendered inside Gallery component
export const cldArr = [
  {
    img: [img7, img8],
    desc: (
      <>
        <h1>Jonne</h1>
        <p>
          my dear friend jonne rolling a cig inside art in kajaani in july.
          after a while he fell asleep there and i wish this world could be as
          peaceful and contented as he was in that soft√¬ moment.
        </p>
      </>
    ),
  },
  {
    img: [img6],
    desc: (
      <>
        <h1>Adele Sauros</h1>
        <p>
          <a className="projectLink" href="http://adelesauros.com/">
            Adele
          </a>
          &nbsp;asked me to do some promo photos for her and again they turned
          out to be incredible.
        </p>
      </>
    ),
  },
  {
    img: [img3],
    desc: (
      <>
        <h1>My last day in Prague</h1>
        <p>
          after this i cleaned my room and went for hitchhiking towards Estonia.
        </p>
      </>
    ),
  },
  {
    img: [img2],
    desc: (
      <>
        <h1>Somewhere in Kirkkonummi</h1>
        <p>
          my friend gazing to the sea. i think this was the first summer he had
          his own diy camper van.
        </p>
      </>
    ),
  },
  {
    img: [img1],
    desc: (
      <>
        <h1>MARGUERITE DURAS RAKASTAJA</h1>
        <p>i was holding my favourite book</p>
      </>
    ),
  },
];
