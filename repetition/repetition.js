// skapa en lista över lite katter
// alla katter ska vara i objekt
// katterna ska ha namn och bild
const catList = [
    {
        name: "Bingo",
        imgUrl: "https://plus.unsplash.com/premium_photo-1675848495392-6b9a3b962df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    {
        name: "Ramses",
        imgUrl: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    {
        name: "Leo",
        imgUrl: "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    }
];

// leta upp vart vi ska stoppa in katterna någonstans:
const catsContainer = document.querySelector("#my-cats");

for (let cat of catList) {
    // skapa ett nytt element där katten kan bo i
    let catElem = document.createElement("article");
    // <article></article>
    let catImg = document.createElement("img");
    // <img />
    catImg.setAttribute("src", cat.imgUrl);
    // <img src="http://img.png" />
    catElem.appendChild(catImg);
    // <article> <img src="http://img.png" /> </article>
    let catNameElem = document.createElement("h3");
    //<h3></h3>
    // lägga in kattens namn i det tomma h3-elementet
    catNameElem.innerText = cat.name;
    // <h3>Bingo</h3>
    catElem.appendChild(catNameElem);
    // -> <article><h3>Bingo</h3></article>
    console.log(catElem);
    // nu ska vi få in det nya elementet i vår befintliga HTML
    catsContainer.appendChild(catElem);
};
