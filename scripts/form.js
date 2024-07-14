document.getElementById("year").innerHTML = (new Date().getFullYear());
let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  listProducts()

  function listProducts() {
      products.forEach(function (product) {
          const opt = document.createElement("option");
          opt.value = product.id;
          opt.textContent = product.name;
          document.getElementById("product").appendChild(opt);
      });
  }

 
  function countReviewProduct() {
  
  }