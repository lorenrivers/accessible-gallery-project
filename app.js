// Variables to select the display image and thumbnail images divs.
let bigImageContainer = document.querySelector(".big-image");
let thumbnailContainer = document.querySelector(".thumbnail-container");

// Array created to store image objects within.
let images = [
  {
    url: "./images/mini-eggs.jpg",
    alt: "A close up of a pile of Mini Eggs",
  },
  {
    url: "./images/rainbow-bench.jpg",
    alt: "A rainbow coloured wooden bench in front of a building",
  },
  {
    url: "./images/french-bulldog-jumper.jpg",
    alt: "Brown and white french bulldog wearing yellow jumper",
  },
  {
    url: "./images/coconut-tree-sunset.jpg",
    alt: "Silhouette of coconut tree during sunset by the coast",
  },
  {
    url: "./images/pink-cookies.jpg",
    alt: "Cookies with rainbow sprinkles on a pink background",
  },
];

// Creating a variable called createThumbnail, which takes in an array of images (objects) and then runs an anonymous function. For each image (object) in the array:
// It creates a variable, within which a new img HTML tag is created.
// It sets the source of that image as the value of the URL property of the object.
// It sets the alt attribute as the alt property of the object.
// It adds a class of 'thumb-image' to enable images to be styled in CSS.
// It adds the tabindex attribute (which is 0) which allows each image to be tabbable.
// It then appends the newly created image element to the thumbnailContainer div.
// Event listener added to create the larger display of an image when any image in the thumbnail is clicked.
// Event listener added that will listen for 'Enter' to be pressed. When pressed, it will display the image it was pressed on (the event key).
const createThumbnail = (arrayOfImages) => {
  arrayOfImages.forEach((image) => {
    let imageElement = document.createElement("img");
    imageElement.src = image.url;
    imageElement.alt = image.alt;
    imageElement.classList.add("thumb-image");
    imageElement.setAttribute("tabindex", "0");
    thumbnailContainer.appendChild(imageElement);

    imageElement.addEventListener("click", () => {
      createDisplayImage(image);
    });

    imageElement.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        createDisplayImage(image);
      }
    });
  });
};

createThumbnail(images);

// A function to create the large display of an image in the thumbnail.
// It sets the content of the bigImageContainer to nothing. This will stop image after image being added, instead only displaying the selected image in the thumbnail.
// Creation of a variable (bigDisplayImage) which creates a new image element.
// It sets the source of that image as the value of the URL property of the object.
// It sets the alt attribute as the alt property of the object.
// It adds a class of 'large-image' to enable image to be styled in CSS.
// It then appends the newly created image element to the bigImageContainer div.
// It then displays a description of that image underneath.
function createDisplayImage(image) {
  bigImageContainer.innerHTML = " ";
  let bigDisplayImage = document.createElement("img");
  bigDisplayImage.src = image.url;
  bigDisplayImage.alt = image.alt;
  bigDisplayImage.classList.add("large-image");
  bigImageContainer.appendChild(bigDisplayImage);
  document.querySelector(".description").textContent = image.alt;
}
