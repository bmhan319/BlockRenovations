// JS forModal Components
let modalCounter = 0;
let modalNumber = 0;
let zoomNum = 0;
let customerIndex = 0;

let customerReview = [
  {
    name: "Hampton C",
    location: "CHELSEA CONDO",
    numStars: 5,
    reviewTitle: "So happy they gave us our dream bathrooms",
    reviewBlurb:
      "We bought our new place in Manhattan and weren't in love with the bathrooms. They were big, which was great, but the space was badly utilized and they didn't fit our style at all.",
    image: [
      "hcr1_lb_3x.jpg",
      "hcr2_lb_3x.jpg",
      "hcr3_lb_3x.jpg",
      "hcr4_lb_3x.jpg",
      "hcr5_lb_3x.jpg"
    ],
    alt: [
      "white bathroom with sinks and bathtub",
      "vanity",
      "bathtub and shower",
      "black bathroom toilet",
      "black bathroom sink"
    ]
  },

  {
    name: "Sarah F.",
    location: "CHELSEA CONDO",
    numStars: 5,
    reviewTitle: "Very helpful throughout the renovation process",
    reviewBlurb:
      "Very helpful throughout the renovation process, which can at times seem overwhelming. I'm extremely happy with the end result and their professionalism!",
    image: ["sfr1_lb_3x.jpg", "sfr2_lb_3x.jpg", "sfr3_lb_3x.jpg"],
    alt: ["white bathroom", "vanity", "showerhead"]
  }
];

//Open Modal
function openModal(imageName, location, num, index) {
  const text = document.querySelector(".slide-nav-left");

  customerIndex = index;
  document.getElementById("contact-bar").style.display = "none";
  modalCounter = location;
  modalNumber = num;
  setPhoto(index);
  document.querySelector(".modal-image-container").style.left =
    "-" + modalCounter + "%";
  text.innerHTML = num + " of " + customerReview[index].image.length;
  modalArrow(customerIndex);
  disableScrolling();

  // Sets the correct set of photos into the modal
  function setPhoto(index) {
    const modalContainer = document.querySelector(".modal-image-container");
    let width = customerReview[index].image.length * 100 + "%";
    let imageWidth = 100 / customerReview[index].image.length + "%";
    modalContainer.style.width = width;

    for (var i = 1; i <= customerReview[index].image.length; i++) {
      let node = document.createElement("img");
      node.classList.add("modalImg", "img" + i);
      node.setAttribute("src", "img/" + customerReview[index].image[i - 1]);
      node.setAttribute("alt", customerReview[index].alt[i - 1]);
      node.style.width = imageWidth;
      modalContainer.appendChild(node);
    }
  }
  $(".modal").fadeIn(400);
}

//Modal Image Slides
function modalSlides(location, num) {
  let imageContainer = document.querySelector(".modal-image-container");
  let text = document.querySelector(".slide-nav-left");

  modalCounter = modalCounter + location;
  modalNumber = modalNumber + num;

  imageContainer.style.left = "-" + modalCounter + "%";
  text.innerHTML =
    modalNumber + " of " + customerReview[customerIndex].image.length;
  modalArrow(customerIndex);
  zoomNum = 0;
  zoomModalOut(0);
}

//Modal Slide Arrows Appear and Disappear
function modalArrow(index) {
  let leftArrow = document.querySelector(".slide-left-arrow");
  let rightArrow = document.querySelector(".slide-right-arrow");

  if (modalCounter == customerReview[index].image.length * 100 - 100) {
    rightArrow.style.display = "none";
  } else {
    rightArrow.style.display = "block";
  }

  if (modalCounter == 0) {
    leftArrow.style.display = "none";
  } else {
    leftArrow.style.display = "block";
  }
}

window.onresize = zoomState;

//Zoom Modal Image In
function zoomModalIn(num) {
  zoomNum = zoomNum + num;
  zoomState();
}

//Zoom Modal Image Out
function zoomModalOut(num) {
  zoomNum = zoomNum + num;
  zoomState();
}

//Photo Zoom State
function zoomState() {
  const modal = document.querySelector(".modal");
  const length = customerReview[customerIndex].image.length;
  const zoomIn = document.querySelector(".zoom-in");
  const zoomOut = document.querySelector(".zoom-out");

  for (let i = 1; i <= length; i++) {
    let image = document.querySelector(".img" + i);
    if (window.innerWidth <= 1024) {
      if (zoomNum == 0) {
        image.style.padding = "0";
        image.style.height = "auto";
        image.style.objectFit = "contain";
        zoomIn.style.pointerEvents = "auto";
        zoomOut.style.pointerEvents = "none";
      }
      if (zoomNum == 1) {
        image.style.padding = "0";
        image.style.height = "70vh";
        image.style.objectFit = "cover";
        zoomIn.style.pointerEvents = "auto";
        zoomOut.style.pointerEvents = "auto";
      }
      if (zoomNum == 2) {
        image.style.padding = "0";
        image.style.height = "100vh";
        image.style.objectFit = "none";
        zoomIn.style.pointerEvents = "none";
        zoomOut.style.pointerEvents = "auto";
      }
    } else if (window.innerWidth > 1024) {
      if (zoomNum == 0) {
        image.style.padding = "200px";
        image.style.height = "auto";
        image.style.objectFit = "contain";
        zoomIn.style.pointerEvents = "auto";
        zoomOut.style.pointerEvents = "none";
      }
      if (zoomNum == 1) {
        image.style.padding = "100px";
        image.style.height = "auto";
        image.style.objectFit = "contain";
        zoomIn.style.pointerEvents = "auto";
        zoomOut.style.pointerEvents = "auto";
      }
      if (zoomNum == 2) {
        image.style.padding = "0";
        image.style.height = "auto";
        image.style.objectFit = "contain";
        zoomIn.style.pointerEvents = "none";
        zoomOut.style.pointerEvents = "auto";
      }
    }
  }
}

//Close Modal
function closeModal() {
  const zoomIn = document.querySelector(".zoom-in");
  const zoomOut = document.querySelector(".zoom-out");

  enableScrolling();
  $(".modal").fadeOut(400);
  document.getElementById("contact-bar").style.display = "block";
  modalCounter = 0;
  modalNumber = 0;
  zoomNum = 0;
  customerIndex = "";
  removeElement();
  zoomIn.style.pointerEvents = "auto";
  zoomOut.style.pointerEvents = "none";

  //Remove Image Elements
  function removeElement() {
    let modal = document.querySelector(".modal-image-container");
    let image = modal.lastElementChild;
    while (image) {
      modal.removeChild(image);
      image = modal.lastElementChild;
    }
  }
}

// Disable and Enable Scroll
// Did not write this myself
// https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
function disableScrolling() {
  var x = window.scrollX;
  var y = window.scrollY;
  window.onscroll = function() {
    window.scrollTo(x, y);
  };
}

function enableScrolling() {
  window.onscroll = function() {};
}
