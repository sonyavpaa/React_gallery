# Image Gallery using React and Cloudinary

Image gallery app that fetches images from Cloudinary Media Library.

Deployed in https://www.sonjavainionpaa.fi

# 1.

Run in terminal:

```cli
npm install
```

# 2. Cloudinary

In the src/images.json, add your Cloudinary cloud name and the name/s (aka their publicID's) of the image/s you want to use.

```js
const cld = new Cloudinary({
  cloud: {
    cloudName: "demo", //YOUR CLOUDNAME HERE
  },
});

//replace sample name/s with the name/s of your image/s or video/s
const img1 = cld.image("sample_01");
const img2 = cld.image("sample_02");
const video1 = cld.video("sample_3");
```

Create an instance for your new image/ video and add a description. Both arrays below will be called and rendered in src/App.js: Gallery.js will render cldArr and Projects.js will render projectArr.

```js
export const cldArr = [
  { img: img1, desc: "Hello" },
  { img: img2, desc: "Oh no" },
];

//depending if it is a cloudinary video or iframe, Projects.js does conditional filtering based on the key name
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
    iframe: {
      //for browser view
      browser: (
        <iframe
          title="suomikuviaBrowser"
          className="iframeBrowser"
          src="https://www.youtube.com/embed/BTg4zPxp1Hw"
        ></iframe>
      ),
      // for mobile view
      mobile: (
        <iframe
          title="suomikuviaMobile"
          className="iframeMobile"
          src="https://www.youtube.com/embed/BTg4zPxp1Hw"
        ></iframe>
      ),
    },
  },
];
```

# Resources

https://cloudinary.com/documentation/react_integration
