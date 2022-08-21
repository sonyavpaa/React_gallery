import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "", //YOUR CLOUDNAME HERE
  },
});

// cld.image/video returns a CloudinaryImage/CloudinaryVideo with the configuration set.
const video1 = cld.video("VID-20220708-WA0014_ocqte2");
const img3 = cld.image("dx5vcb");
const img2 = cld.image("IMG_0512_yoihnk");
const img1 = cld.image("IMG_0509_norv29");

// An array that will be rendered inside Project components
export const projectArr = [
  {
    video: {
      img: video1,
      txt: "part of improvisational performance shared with exhibiton artis Tommi Ruotsalainen",
    },
    header: "The Unberable Lightness of Contemporaty Art Curatorship",
    p: (
      <p>
        a week long recidency during which a performance based on Gillez Deleuze
        AntiOedipus and &nbsp;
        <a
          className="projectLink"
          href="https://www.google.com/search?q=art+curator&tbm=isch&ved=2ahUKEwiWjMvc3tj5AhWLuIsKHRLoBbgQ2-cCegQIABAA&oq=art+curator&gs_lcp=CgNpbWcQAzIECCMQJzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzIECAAQEzoECAAQHjoECAAQGFDZBFj6J2CBKmgAcAB4AIABygGIAYsIkgEFNS4zLjGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=KpECY5bPLovxrgSS0JfACw&bih=654&biw=1147&client=firefox-b-d&hl=fi"
        >
          google picture results about art curators
        </a>
        &nbsp; was created and performed together with Jonne Väisänen in Sen se
        exhibition in Kajaani, Finland.
      </p>
    ),
  },
];

// An array that is rendered inside Gallery component
export const cldArr = [
  {
    img: [img3, img2, img3, img3],
    desc: (
      <>
        <h1>My last day in Prague</h1>
        <p>
          After this i cleaned my room and went for hitchhiking towards Estonia.
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
          My friend gazing to the sea. I think this was the first summer he had
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
