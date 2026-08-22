const ImageKit = require("@imagekit/nodejs")
const {IMAGEKIT_PRIVATE_KEY, IMAGEKIT_PUBLIC_KEY, IMAGEKIT_URL} = require("./env");


const imageKitClient = new ImageKit({
  privateKey: IMAGEKIT_PRIVATE_KEY,
  publicKey: IMAGEKIT_PUBLIC_KEY,
  urlEndpoint: IMAGEKIT_URL,
});

module.exports = imageKitClient;