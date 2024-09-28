var baseUrl = "";
var isFullscreen = false;

function setBaseUrl(url, serverName) {
  baseUrl = url;
  updateDropdownText(serverName);
  filterGames();
  hideDropdown();
}

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.toggle("hide");
}

function hideDropdown() {
  var dropdownContent = document.getElementById("dropdown-content");
  dropdownContent.classList.add("hide");
}

function updateDropdownText(serverName) {
  var dropdownBtn = document.getElementById("dropdown-btn");
  dropdownBtn.textContent = serverName || "Select Proxy Server";
}

function generateImageUrl(gameName) {
  return `https://res.cloudinary.com/dguh1n4hz/image/upload/v1720775948/${gameName
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/\./g, "-")}`;
}

function generateGameCards() {
  var gamesContainer = document.getElementById("games-container");
  gamesContainer.innerHTML = "";
  games.forEach(function (game) {
    var gameCard = document.createElement("a");
    gameCard.className = "game";
    gameCard.href = "#";
    gameCard.onclick = function () {
      openPopup(game.link);
    };

    var gameImage = document.createElement("img");
    gameImage.src = generateImageUrl(game.name);
    gameCard.appendChild(gameImage);

    var gameInfo = document.createElement("div");
    gameInfo.className = "game-info";

    var gameTitle = document.createElement("h3");
    gameTitle.className = "game-title";
    gameTitle.textContent = game.name;
    gameInfo.appendChild(gameTitle);

    var gameAuthor = document.createElement("p");
    gameAuthor.className = "game-author";
    gameAuthor.textContent = game.author;
    gameInfo.appendChild(gameAuthor);

    gameCard.appendChild(gameInfo);
    gamesContainer.appendChild(gameCard);
  });
}

function filterGames() {
  var searchInput = document.getElementById("search").value.toUpperCase();
  var games = document
    .getElementById("games-container")
    .getElementsByClassName("game");

  for (var i = 0; i < games.length; i++) {
    var gameName = games[i]
      .getElementsByClassName("game-title")[0]
      .textContent.toUpperCase();
    if (gameName.indexOf(searchInput) > -1) {
      games[i].style.display = "";
    } else {
      games[i].style.display = "none";
    }
  }
}

function openPopup(gameLink) {
  var popup = document.getElementById("popup");
  var iframe = document.getElementById("game-iframe");
  var placeholderImg = document.getElementById("placeholder-img");

  if (baseUrl) {
    iframe.src = baseUrl + gameLink;
    iframe.style.display = "block";
    placeholderImg.style.display = "none";
  } else {
    iframe.style.display = "none";
    placeholderImg.style.display = "flex";
  }

  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  var iframe = document.getElementById("game-iframe");
  iframe.src = "";
  popup.style.display = "none";
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("./serviceworker.js")
      .then((res) => console.log("ServiceWorker or smth idk lmao"))
      .catch((err) => console.log("Not working", err));
  });
}

function toggleFullscreen() {
  var popup = document.getElementById("popup");
  var fullscreenIcon = document.getElementById("fullscreen-icon");

  if (!isFullscreen) {
    popup.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
    });
    fullscreenIcon.src =
      "https://res.cloudinary.com/dguh1n4hz/image/upload/v1720878585/fullscreeno";
  } else {
    document.exitFullscreen();
    fullscreenIcon.src =
      "https://res.cloudinary.com/dguh1n4hz/image/upload/v1720878585/fullscreen";
  }

  isFullscreen = !isFullscreen;
}

function openInNewTab() {
  var iframe = document.getElementById("game-iframe");
  if (iframe.src) {
    window.open(iframe.src, "_blank");
  } else {
    alert("No game is currently loaded.");
  }
}

let games;
let url = `${window.location.href}games.json`;
console.log(url);

(async () => {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Can't find resource, sorry");
    }
    
    games = await response.json();
    generateGameCards(games); // Call the function to generate game cards
    
  } catch (error) {
    console.error(error);
  }
})();
