# Image Gallery using React and Cloudinary

Image gallery app that fetches images from Cloudinary Media Library

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

//replace sample_01 and samlpe_02 with the name/s of your image/s
const img1 = cld.image("sample_01");
const img2 = cld.image("sample_02");
```

Create an instance for your new image and add a description.

```js
export const cldArr = [
  { img: img1, desc: "Hello" },
  { img: img2, desc: "Oh no" },
];
```

The cldArray will be imported to the App.js where Gallery Component will map and render it as an image grid in your DOM.

# Resources

https://cloudinary.com/documentation/react_integration
