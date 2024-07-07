document.getElementById("year").innerHTML = (new Date().getFullYear());
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Peru",
      location: "Lima, Peru",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Campinas Brasil",
        location: "Campinas, Brasil",
        dedicated: "2002, May, 17",
        area: 48100,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/c9a81a6f86750d7d9ade3499d3df52e2f7f726a7/full/320%2C/0/default"
      },
      {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 21,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/cd518a59ee7511eca935eeeeac1ecdb94609c80b/full/250%2C/0/default"
      },
      {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
        "https://churchofjesuschrist.org/imgs/93fe327ea5a8f82b20a48e283e51dc32f57ba148/full/320%2C/0/default"
      }
  ];
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

const home = document.getElementById("Home");
const newTemples = document.getElementById("New");
const oldTemples = document.getElementById("Old");
const largeTemples = document.getElementById("Large");
const smallTemples = document.getElementById("Small");

const headingTitle = document.getElementById("title");

headingTitle.innerHTML = "Home";
displayCard(temples);

home.addEventListener("click", () => {
  headingTitle.innerHTML = "Home";
  displayCard(temples);
})
newTemples.addEventListener("click", () => {
  headingTitle.innerHTML = "New Temples";
  displayCard( temples.filter(temple => new Date(temple.dedicated) > new Date(2000, 0, 1)));
})
oldTemples.addEventListener("click", () => {
  headingTitle.innerHTML = "Old Temples";
  displayCard( temples.filter(temple => new Date(temple.dedicated) < new Date(1900, 0, 1)));
})
largeTemples.addEventListener("click", () => {
  headingTitle.innerHTML = "Large Temples";
  displayCard(temples.filter(temple => temple.area > 90000));
})
smallTemples.addEventListener("click", () => {
  headingTitle.innerHTML = "Small Temples";
  displayCard(temples.filter(temple => temple.area <10000));
})

function displayCard(templesfiltered) {
    document.getElementById("card").innerHTML = ""
    templesfiltered.forEach(temple => {
        const templeCard = document.createElement("section")
        templeCard.innerHTML = `<section><h3>${temple.templeName}</h3><p>Location: ${temple.location}</p><p>Dedicated: ${temple.dedicated}</p><p>Area: ${temple.area}</p><img src=${temple.imageUrl} alt=${temple.templeName} loading="lazy"></section>`;
        document.getElementById("card").appendChild(templeCard);
});
}
