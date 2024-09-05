
var baseUrl = '';
var isFullscreen = false;

function setBaseUrl(url, serverName) {
  baseUrl = url;
  updateDropdownText(serverName);
  filterGames();
  hideDropdown();
}

function toggleDropdown() {
  var dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.classList.toggle('hide');
}

function hideDropdown() {
  var dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.classList.add('hide');
}

function updateDropdownText(serverName) {
  var dropdownBtn = document.getElementById('dropdown-btn');
  dropdownBtn.textContent = serverName || 'Select Proxy Server';
}

var games = [{name: "Baseball League", author: "9VR", link: "/hvtrs8%2F-ioaeeq-mpgnqoaicl%2Cgmoelguqepcmnvelt%2Ccmm-gcdeevs-idr%3Dupl%3Fhvtrs8%2F-s1.cmczmncwq.aoo%2Frrmdwcvimn%2Faqsgtqbwciev-%3Alhv%7Br3xazob-1ge00423-41%60c%2F4gc%3A-c8gc%2F5g819a2g6gda%250F%60aqe%60anl%5Dlgaeug.zmn%26aoltcilep%3Dkg"},
{name: "Basketball Stars", author: "MadPuffers", link: "/hvtrs8%2F-wctahfoauoeltcrkeq.aoo%2Fup%2Fcmnvelt-urlmafs-gcmgs-bcsievbcln-qtcrq%2F"},
{name: "Cookie Clicker", author: "DashNet", link: "/hvtrs8%2F-wctahfoauoeltcrkeq.aoo%2Fup%2Fcmnvelt-urlmafs-gcmgs-cmoiig-alkciep%2F"},
{name: "Cool Math Games", author: "Coolmath LLC", link: "/hvtrs8%2F-wuw%2Ccmonmctjgcmgs%2Ccmm-"},
{name: "Crossy Road", author: "Hipster Whale", link: "/hvtrs8%2F-wctahfoauoeltcrkeq.aoo%2Fup%2Fcmnvelt-urlmafs-gcmgs-cpoqs%7B-pocd-"},
{name: "Doge Miner", author: "rkn", link: "/hvtrs8%2F-dmggmkngr%2Csg%2F"},
{name: "Doge Miner 2", author: "rkn", link: "/hvtrs8%2F-dmggmkngr0.aoo%2F"},
{name: "Doodle Jump", author: "Lima Sky", link: "/hvtrs8%2F-cfn%2Cwcnvef5eaoeq.aoo%2Feaoeq%2Ffomdne%2Fjwmr-leu-gn%2Fs%2Fiea%2Fcnowd-ildgx%2Chvmn%3Fru%60%3D751"},
{name: "Flappy Bird", author: "Dong Nguyen", link: "/hvtrs8%2F-fnarp%7B-%60ipd%2Ccm%2Feaoe-fnarp%7B-%60ipd-"},
{name: "Four Colors", author: "CodeThisLab", link: "/hvtrs8%2F-wuw%2Ccclaunavops%2Copg-gcmgs-ulo-gcmg.rhr"},
{name: "Garfield 2048", author: "FatGarfield777", link: "/hvtrs8%2F-fcteapfkend575.eivhwb%2Cim%2Frlcy-Gcrdiglf224%3A%2F"},
{name: "GeForce Now", author: "Nvidia Corporation", link: "/hvtrs8%2F-wuw%2Cntific.aoo%2Fgn%2Fuq%2Feedopcg-lou%2F"},
{name: "Geometry Dash", author: "RobTop Games", link: "/hvtrs8%2F-wctahfoauoeltcrkeq.aoo%2Fup%2Fcmnvelt-urlmafs-gcmgs-ggooevr%7B-faqh-"},
{name: "Hextris", author: "Logan Engstrom", link: "/hvtrs8%2F-hgxvrks%2Cim%2F"},
{name: "Little Alchemy", author: "Recloak", link: "/hvtrs8%2F-lktvlgancjeoy%2Ccmm-"},
{name: "Little Alchemy 2", author: "Recloak", link: "/hvtrs8%2F-lktvlgancjeoy0.aoo%2F"},
{name: "Minecraft", author: "Mojang", link: "/hvtrs8%2F-ecgnepcpadt%2Ccmm-ma%2F3.%3A.%3A%2F"},
{name: "paper.io", author: "Voodoo", link: "/hvtrs8%2F-pcpgr%2Fim.aoo%2F"},
{name: "Retro Bowl", author: "New Star Games", link: "/hvtrs8%2F-gcmg33620%3B.iolgeaoeq.aoo%2Feaoex%2F2011-620%3B%2Fnite-ildgx%2Chvmn"},
{name: "Scrap Metal 3 Infernal Trap", author: "Ciorbyn", link: "/hvtrs8%2F-affpeg3ih2.eivhwb%2Cim%2Frrmjgcvs-sarcpoevan%2Fknfez.jtol"},
{name: "Scratch", author: "Scratch Foundation, Inc.", link: "/hvtrs8%2F-sarctah%2Cmkt%2Cefu-"},
{name: "slither.io", author: "Steve Howse", link: "/hvtr%3A-%2Fqlktjep.ko"},
{name: "Slope", author: "Y8 Games", link: "/hvtrs8%2F-wctahfoauoeltcrkeq.aoo%2Fup%2Fcmnvelt-urlmafs-gcmgs-snore-"},
{name: "Snake", author: "CMG", link: "/hvtrs8%2F-wuw%2Ccmonmctjgcmgs%2Ccmm-0%2Fslaie-pna%7B"},
{name: "Snake 3D", author: "PlaysNicely", link: "/hvtrs8%2F-wuw%2Ccmonmctjgcmgs%2Ccmm-0%2Fslaie%2F3f%2Frlcy"},
{name: "Stack", author: "Ketchapp", link: "/hvtrs8%2F-affpeg3ih2.eivhwb%2Cim%2Frrmjgcvs-svaak-ildgx%2Chvmn"},
{name: "Stickman Hook", author: "Madbox", link: "/hvtrs8%2F-bmxkne2%2Cgktju%60.ko-b-sviakoal-jomk-"},
{name: "Subway Surfers", author: "SYBO & Kiloo", link: "/hvtrs8%2F-affpeg3ih2.eivhwb%2Cim%2Frrmjgcvs-swbua%7B-qupfgrq%2Fknfez.jtol"},
{name: "The Impossible Quiz", author: "Splapp-me-do", link: "/hvtrs8%2F-i%2Fetafe%2Cgktju%60.ko-6z%2FVhgIopmsqi%60lgQwix%2F"},];

function generateImageUrl(gameName) {
  return `https://res.cloudinary.com/dguh1n4hz/image/upload/v1720775948/${gameName.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '-')}`;
}

function generateGameCards() {
  var gamesContainer = document.getElementById('games-container');
  gamesContainer.innerHTML = '';
  games.forEach(function(game) {
    var gameCard = document.createElement('a');
    gameCard.className = 'game';
    gameCard.href = '#';
    gameCard.onclick = function() {
      openPopup(game.link);
    };

    var gameImage = document.createElement('img');
    gameImage.src = generateImageUrl(game.name);
    gameCard.appendChild(gameImage);

    var gameInfo = document.createElement('div');
    gameInfo.className = 'game-info';

    var gameTitle = document.createElement('h3');
    gameTitle.className = 'game-title';
    gameTitle.textContent = game.name;
    gameInfo.appendChild(gameTitle);

    var gameAuthor = document.createElement('p');
    gameAuthor.className = 'game-author';
    gameAuthor.textContent = game.author;
    gameInfo.appendChild(gameAuthor);

    gameCard.appendChild(gameInfo);
    gamesContainer.appendChild(gameCard);
  });
}

function filterGames() {
  var searchInput = document.getElementById('search').value.toUpperCase();
  var games = document.getElementById('games-container').getElementsByClassName('game');

  for (var i = 0; i < games.length; i++) {
    var gameName = games[i].getElementsByClassName('game-title')[0].textContent.toUpperCase();
    if (gameName.indexOf(searchInput) > -1) {
      games[i].style.display = '';
    } else {
      games[i].style.display = 'none';
    }
  }
}

function openPopup(gameLink) {
  var popup = document.getElementById('popup');
  var iframe = document.getElementById('game-iframe');
  var placeholderImg = document.getElementById('placeholder-img');

  if (baseUrl) {
    iframe.src = baseUrl + gameLink;
    iframe.style.display = 'block';
    placeholderImg.style.display = 'none';
  } else {
    iframe.style.display = 'none';
    placeholderImg.style.display = 'flex';
  }

  popup.style.display = 'block';
}

function closePopup() {
  var popup = document.getElementById('popup');
  var iframe = document.getElementById('game-iframe');
  iframe.src = '';
  popup.style.display = 'none';
}

if("serviceWorker" in  navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("./serviceworker.js")
        .then(res => console.log("ServiceWorker or smth idk lmao", res))
        .catch(err => console.log("Not working", err))
    })
}

function toggleFullscreen() {
  var popup = document.getElementById('popup');
  var fullscreenIcon = document.getElementById('fullscreen-icon');

  if (!isFullscreen) {
    popup.requestFullscreen().catch(err => {
      alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
    });
    fullscreenIcon.src = 'https://res.cloudinary.com/dguh1n4hz/image/upload/v1720878585/fullscreeno';
  } else {
    document.exitFullscreen();
    fullscreenIcon.src = 'https://res.cloudinary.com/dguh1n4hz/image/upload/v1720878585/fullscreen';
  }

  isFullscreen = !isFullscreen;
}

function openInNewTab() {
  var iframe = document.getElementById('game-iframe');
  if (iframe.src) {
    window.open(iframe.src, '_blank');
  } else {
    alert('No game is currently loaded.');
  }
}

generateGameCards();
