// dom-selektorn getElementById (ger ett element)
let header = document.getElementById("top-bar");
console.log(header);

// getElementsByClassname (ger en lista)
let sections = document.getElementsByClassName("my-section");
console.log(sections);

// getElementsByTagName (ger en lista)
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

// querySelector (ger första bästa träff)
let match = document.querySelector(".my-section");
console.log(match);

// querySelectorAll (ger alla matchningar i en lista)
let allThemMatches = document.querySelectorAll(".my-section");
console.log(allThemMatches);

// Skapa nytt HTML-element:
let newElem = document.createElement("article");
console.log(newElem);

// lägg till lite text i det nya article-elementet
newElem.innerHTML = "HEJHEJ";

// lägga till en CSS-klass
newElem.className = "my-article";

// lägga till ett nytt attribut (id) på mitt nya element
newElem.setAttribute("id", "my-article-id");

// ändra inline styling
newElem.style.color = "white";
newElem.style.backgroundColor = "red";

// lägga till ett barn-element på match
match.appendChild(newElem);

// ta bort ett barn-element
// först leta reda på barnelementet
let childToRemove = document.querySelector("p");
match.removeChild(childToRemove);

// hitta knappen
let btnElem = document.querySelector('button');
// lägga på en eventlyssnare som lyssnar efter ett klick
btnElem.addEventListener("click", function(event) {
    console.log(event.target);
    let listElem = document.querySelector("ul");

    for (let i = 0; i < 2; i++) {
        // skapa nytt listItem
        let listItem = document.createElement("li");
        listItem.innerHTML = i;
        listElem.appendChild(listItem);
    }
});