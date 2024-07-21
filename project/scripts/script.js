function myFunction() {
    var x = document.getElementById("myheader");
    if (x.className === "header-right") {
      x.className += " responsive";
    } else {
      x.className = "header-right";
    }
  }

  const arts = [
    {
      name: "Christmas Lights Crochet",
      category:"Crochet",
      imageUrl:"https://i.postimg.cc/fyV4rq6B/christmas-lights-crochet.jpg"
    },
    {
      name: "Box Craft",
      category:"Craft",
      imageUrl:"https://i.postimg.cc/mDXfVW6P/box-craft.jpg"
    },
    {
      name: "Gominola Crochet",
      category:"Crochet",
      imageUrl:"https://i.postimg.cc/ZnXktFmZ/gominola-crochet.jpg"
    },
    {
      name: "Hearts Crochet",
      category:"Crochet",
      imageUrl:"https://i.postimg.cc/MKj2040G/hearts-crochet.jpg"
    },
    {
      name: "Keychains Crochet",
      category:"Crochet",
      imageUrl:"https://i.postimg.cc/wBgCpjCt/keychains-crochet.png"
    },
    {
      name: "Llama Crochet",
      category:"Crochet",
      imageUrl:"https://i.postimg.cc/Dwq9HXMk/llama-crochet.jpg"
    },
    {
      name: "Mermaid Crochet",
      category:"Crochet",
      imageUrl:"https://i.postimg.cc/mrj02G4m/mermaid-crochet.jpg"
    },
    {
      name: "Monkey Crochet",
      category:"Crochet",
      imageUrl:"https://i.postimg.cc/bJv4ZFNp/monkey-crochet.jpg"
      },
      {
        name: "Paper Craft",
        category:"Craft",
        imageUrl:"https://i.postimg.cc/76Qd0Mf7/paper-craft.jpg"
      },
      {
        name: "Pink Cat Crochet",
        category:"Crochet",
        imageUrl:"https://i.postimg.cc/RhkYbS1Z/pink-cat-crochet.jpg"
      },
      {
        name: "Pink Dragon Craft",
        category:"Craft",
        imageUrl:"https://i.postimg.cc/vyzg4j4Z/pink-dragon-craft.jpg"
      },
      {
        name: "Tortles Crochet",
        category:"Crochet",
        imageUrl:"https://i.postimg.cc/pLHWmRNv/tortle-crochet.jpg"
      },
      {
        name:"Tortue Crochet",
        category:"Crochet",
        imageUrl:"https://i.postimg.cc/Hs5WWjh3/tortue-crochet.jpg"
      }
  ];

const home = document.getElementById("Home");
const crochets = document.getElementById("Crochet");
const crafts = document.getElementById("Craft");

const headingTitle = document.getElementById("title");

headingTitle.innerHTML = "Home";
displayCard(arts);

home.addEventListener("click", () => {
  headingTitle.innerHTML = "Home";
  displayCard(arts);
})
crochets.addEventListener("click", () => {
  headingTitle.innerHTML = "Crochets";
  displayCard( arts.filter(arts => arts.category == "Crochet"));
})
crafts.addEventListener("click", () => {
  headingTitle.innerHTML = "Crafts";
  displayCard( arts.filter(arts => arts.category == "Craft"));
})

function displayCard(artsfiltered) {
    document.getElementById("card").innerHTML = ""
    artsfiltered.forEach(arts => {
        const artCard = document.createElement("section")
        artCard.innerHTML = `<section><h3>${arts.name}</h3><p>Category: ${arts.category}</p><img src=${arts.imageUrl} alt=${arts.name} loading="lazy"></section>`;
        document.getElementById("card").appendChild(artCard);
});
}

