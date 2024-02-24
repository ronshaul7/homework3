const addAnimalForm = document.getElementById("visitors-cards");
function loginAsVisitor(visitorName) {
  
}

let visitorsForView = [...visitors];
const dialog = document.querySelector("#visitor-dialog");

function checkForSelectedVisitor() {
  const selectedVisitor = localStorage.getItem("selectedVisitor");
  if (selectedVisitor) {
    const confirmLogout = confirm("You are already logged in as a visitor. Do you want to log out?");
    if (confirmLogout) {
      localStorage.removeItem("selectedVisitor");
      alert("You have been logged out.");
    }
  }
}



const getVisitorHTMLCard = (visitor) => {
  const template = `
      <div class="card" style="min-height: 360px;" >
        <img class="card-img-top" src="${visitor.thumbImage}" alt="${visitor.name}"/>
        <div class="card-body">
          <p class="card-text">${visitor.name}</p>
          <p class="card-text">${visitor.coins}</p>
        </div>
      </div>`;

  const wrapper = document.createElement("div");
  wrapper.className = "visitor-card";
  wrapper.innerHTML = template;
  wrapper.addEventListener("click", () => loginAsVisitor(visitor.name));
  return wrapper;
};

const getCloseModalHTMLButton = () => {
  const closeButton = document.createElement("button");
  closeButton.innerText = " Close modal";
  closeButton.addEventListener("click", () => dialog.close());
  return closeButton;
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

const filterVisitorsByName = (query) => {
  visitorsForView = visitors.filter((visitor) =>
    visitor.name.toLowerCase().includes(query.toLowerCase())
  );
  renderVisitors();
};

const clearSearchBox = () => {
  const input = document.getElementById("query-input");
  input.value = "";
  visitorsForView = [...visitors];
  renderVisitors();
};

document.getElementById("query-input").addEventListener("input", (event) => {
  filterVisitorsByName(event.target.value);
});

document.body.insertAdjacentElement("afterbegin", getSearchBox());
window.addEventListener("load", renderVisitors);
window.addEventListener("load", checkForSelectedVisitor);
