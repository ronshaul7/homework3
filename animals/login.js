const addAnimalForm = document.getElementById("visitor-card");
function loginAsVisitor(visitorName) {
  
}

const visitorsArray = [
  {
    name: "John Smith",
    coins: 50,
    pictureUrl: "./photos/person1.webp",
    imageAlt: "JohnPhoto"
  },
  {
    name: "Emily Johnson",
    coins: 50,
    pictureUrl: "./photos/person2.avif",
    imageAlt: "EmilyPhoto"
  },
  {
    name: "Michael Williams",
    coins: 50,
    pictureUrl: "./photos/person3.avif",
    imageAlt: "MichaelPhoto"
  },
  {
    name: "Jessica Brown",
    coins: 50,
    pictureUrl: "./photos/person4.jpg",
    imageAlt: "JessicaPhoto"
  },
  {
    name: "Christopher Jones",
    coins: 50,
    pictureUrl: "",
    imageAlt: "ChristopherPhoto"
  },
  {
    name: "Ashley Davis",
    coins: 50,
    pictureUrl: "",
    imageAlt: "AshleyPhoto"
  },
  {
    name: "Matthew Miller",
    coins: 50,
    pictureUrl: "",
    imageAlt: "MatthewPhoto"
  },
  {
    name: "Amanda Wilson",
    coins: 50,
    pictureUrl: "",
    imageAlt: "AmandaPhoto"
  },
  {
    name: "David Moore",
    coins: 50,
    pictureUrl: "",
    imageAlt: "DavidPhoto"
  },
  {
    name: "Sarah Taylor",
    coins: 50,
    pictureUrl: "",
    imageAlt: "SarahPhoto"
  },
  {
    name: "James Anderson",
    coins: 50,
    pictureUrl: "",
    imageAlt: "JamesPhoto"
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
    pictureUrl: "",
    imageAlt: "JenniferPhoto"
  },
  {
    name: "Robert Jackson",
    coins: 50,
    pictureUrl: "",
    imageAlt: "RobertPhoto"
  },
  {
    name: "Elizabeth White",
    coins: 50,
    pictureUrl: "",
    imageAlt: "ElizabethPhoto"
  },
  {
    name: "Daniel Harris",
    coins: 50,
    pictureUrl: "",
    imageAlt: "DanielPhoto"
  },
  {
    name: "Melissa Martin",
    coins: 50,
    pictureUrl: "",
    imageAlt: "MelissaPhoto"
  },
  {
    name: "William Thompson",
    coins: 50,
    pictureUrl: "",
    imageAlt: "WilliamPhoto"
  },
  {
    name: "Linda Garcia",
    coins: 50,
    pictureUrl: "",
    imageAlt: "LindaPhoto"
  },
  {
    name: "Joseph Martinez",
    coins: 50,
    pictureUrl: "",
    imageAlt: "JosephPhoto"
  },
  {
    name: "Karen Robinson",
    coins: 50,
    pictureUrl: "",
    imageAlt: "KarenPhoto"
  }
];

let htmlCode = "";

visitorsArray.forEach(function(visitor) {
  htmlCode +=
    `<div class="card" style="min-height: 360px;">
       <img class="card-img-top" src="${visitor.pictureUrl}" alt="${visitor.imageAlt}">
       <div class="card-body">
         <p class="card-text">${visitor.name}</p>
         <p class="card-text">${visitor.coins}</p>
       </div>
     </div>`;
});
const visitorsCards = document.querySelector(".all-visitors-cards");
visitorsCards.innerHTML = htmlCode;

document.getElementById("placeholder").innerHTML = htmlCode;

let visitorsForView = [...visitorsArray];
const dialog = document.querySelector("#product-dialog");

const getVisitorHTMLCard = (visitor) => {
  const template = `
      <div class="card" style="min-height: 360px;" >
        <img class="card-img-top" src="${visitor.pictureUrl}" alt="${visitor.name}"/>
        <div class="card-body">
          <p class="card-text">${visitor.name}</p>
          <p class="card-text">${visitor.coins}</p>
        </div>
      </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => handleVisitorClick(visitor));
  return wrapper;
};

const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = " Close modal";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
};

const handleVisitorClick = (visitor) => {
  dialog.innerHTML = "";
  dialog.append(getCloseModalHTMLButton(), getVisitorHTMLCard(visitor));
  dialog.showModal();
};

const getSearchBox = () => {
  const queryInput = document.createElement("input");
  queryInput.id = "query-input";
  queryInput.placeholder = "Search visitor";
  queryInput.className = "form-control";
  queryInput.oninput = (e) => {
    visitorsForView = visitorsArray.filter((visitor) =>
    visitor.name.includes(e.target.value)
    );
    renderVisitors();
  };
  return queryInput;
};

const getEmptyCardsHTMLTemplate = () => {
  const templateWrapper = document.createElement("div");
  templateWrapper.className = "empty-result";

  const template = `
    <h2>No Visitor Found</h2>
    <p>We're sorry, but no visitors match your search or filter criteria.</p>
    <button id="clear-filter-btn" class="btn btn-dark">Clear search text</button>
    `;
  templateWrapper.innerHTML = template;
  templateWrapper.children["clear-filter-btn"].addEventListener(
    "click",
    clearSearchBox
  );
  return templateWrapper;
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitorsArray];
  renderVisitors();
};

const renderVisitors = () => {
  const visitorCards = visitorsForView.map(getVisitorHTMLCard);
  const visitorsPlaceholder = document.getElementById("placeholder");
  visitorsPlaceholder.innerHTML = "";

  if (!visitorCards.length) {
    visitorsPlaceholder.appendChild(getEmptyCardsHTMLTemplate());
  }
  visitorsPlaceholder.append(...visitorCards);
};

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors);
