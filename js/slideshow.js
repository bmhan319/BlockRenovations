// Slideshow
let counter = 0;

function nextImage(number) {
  let projectsArray = [
    {
      text:
        "Natural stone and floating fixtures restore light and space to this condo bathroom.",
      location: "PROSPECT HEIGHTS CONDO",
      name: "Jamie & Hemali",
      image: "saurman_cg_1_e7e7e7_3x.jpg",
      alt: "bathroom before/after"
    },

    {
      text:
        "A Contemporary makeover with bold fixtures and custom storage breathe new life into this Chelsea bathroom.",
      location: "CHELSEA APT",
      name: "Nico & Michael",
      image: "nm_cg_1_e7e7e7_3x.jpg",
      alt: "bathroom before/after"
    },

    {
      text:
        "Bronze fixtures, warm wood, and herringbone tile bring classic harmony to this 2-bathroom renovation in Richmond Hill.",
      location: "RICHMOND HILLS CO-OP",
      name: "Eric & Niurka",
      image: "en_cg_1_e7e7e7_3x.jpg",
      alt: "bathroom before/after"
    },

    {
      text:
        "A developer-grade bathroom is treated to luxurious natural stone mosaic and elegant fixtures with an eye towards home value.",
      location: "CHELSEA CONDO",
      name: "Sarah",
      image: "Faranda_1b_bp_2x.jpg",
      alt: "bathroom before/after"
    },

    {
      text: "A guest powder room is given an extreme gut.",
      location: "CHELSEA CONDO",
      name: "Hampton & Michael",
      image: "Catlin_1b_hp_2x.jpg",
      alt: "toilet before/after"
    },

    {
      text:
        '"We were led to a fantastic contractor that did a great job. Most of all, we are excited about how it looks."',
      location: "UWS CO-OP",
      name: "Corey & Rebecca",
      image: "CR_1_hp_2x.jpg",
      alt: "bathroom before/after"
    },

    {
      text:
        '"We love our new bathroom. The design decisions Block suggested make the bathroom feel so much bigger."',
      location: "PARK SLOPE BROWNSTONE",
      name: "Jack & Avra",
      image: "Jack_1.jpg",
      alt: "bathroom before/after"
    },

    {
      text:
        '"Before finding Block I got 5 quotes with extremely wide ranges and little clarity on what I was getting. Block was more affordable than 4 out of 5 but provided much more."',
      location: "PROSPECT HEIGHTS BROWNSTONE",
      name: "Clare",
      image: "Clare_1_hp_2x.jpg",
      alt: "bathroom before/after"
    }
  ];

  const prev = document.querySelector("#prevLink");
  const next = document.querySelector("#nextLink");
  const image = document.querySelector(".light-grey-img");
  const text = document.querySelector(".light-grey-text1");
  const location = document.querySelector(".light-grey-text2");
  const name = document.querySelector(".light-grey-text3");

  counter = counter + number;
  image.setAttribute("src", "img/" + projectsArray[counter].image);
  image.setAttribute("alt", projectsArray[counter].alt);
  text.innerHTML = projectsArray[counter].text;
  location.innerHTML = projectsArray[counter].location;
  name.innerHTML = projectsArray[counter].name;

  if (counter > 0) {
    prev.classList = "prev-link";
  } else {
    prev.classList = "prev-link-gone";
  }

  if (counter == projectsArray.length - 1) {
    next.classList = "next-link-gone";
  } else {
    next.classList = "next-link";
  }
}
