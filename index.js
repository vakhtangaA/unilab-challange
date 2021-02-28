const main = document.getElementById("main");
const hiddenNav = document.getElementById("hiddenNav");
const shownNav = document.getElementById("shownNav");
const hiddenFooter = document.getElementById("hidedFooter");
const shownFooter = document.getElementById("overlayFooter");
const linearGradient = document.getElementById("linearGradient");

const openNav = () => {
  let hidden = [hiddenFooter, main, hiddenNav];
  let shown = [shownFooter, shownNav, linearGradient];

  shown.forEach((item) => {
    item.style.display = "flex";
  });

  hidden.forEach((item) => {
    item.style.display = "none";
  });

  shownNav.classList.add("navOverlay");
  shownFooter.classList.add("footerOverlay");
};

const closeNav = () => {
  let hidden = [shownFooter, shownNav, linearGradient];
  let shown = [hiddenFooter, main, hiddenNav];

  shown.forEach((item) => {
    item.style.display = "initial";
  });

  hidden.forEach((item) => {
    item.style.display = "none";
  });

  shownNav.classList.remove("navOverlay");
  shownFooter.classList.remove("footerOverlay");
};
