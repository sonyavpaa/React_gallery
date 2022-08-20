import { Cloudinary } from "@cloudinary/url-gen";

// Create a Cloudinary instance and set your cloud name.
const cld = new Cloudinary({
  cloud: {
    cloudName: "", //YOUR CLOUDNAME HERE
  },
});

// cld.image returns a CloudinaryImage with the configuration set.
const img1 = cld.image("jeffwall_01_nmjh5i");
const img2 = cld.image("jeffwall_02_lqnyqn");

export const cldArr = [
  {
    img: img1,
    desc: (
      <>
        <h1>Here we were playing untill we didnt!</h1>
        <p>Did you see us?</p>
      </>
    ),
  },
  {
    img: img2,
    desc: (
      <>
        <h1>We were sitting here untill moon came so close I couldnt see it</h1>
        <p>Did you see us?</p>
      </>
    ),
  },
];
