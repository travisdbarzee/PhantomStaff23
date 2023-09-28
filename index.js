addEventListener("load", () => {
  let judgeInfo = document.getElementsByClassName("tooltip");

  for (let i = 0; i < judgeInfo.length; i++) {
    judgeInfo[i].children[1].addEventListener("click", (e) => {
      let el = e.target.parentElement.children[0];
      el.classList.toggle("visible");
    });
  }

  let shows = document.getElementsByClassName("show");

  for (let i = 0; i < shows.length; i++) {
    shows[i].children[1].addEventListener("click", (e) => {
      let el = e.target.parentElement.children[2];
      el.classList.toggle("visible");
    });
  }
});

document.addEventListener("click", (event) => {
  let popups = document.getElementsByClassName("visible");

  for (let i = 0; i < popups.length; i++) {
    if (
      popups[i].parentNode != event.target.parentNode &&
      !popups[i].contains(event.target)
    ) {
      popups[i].classList.toggle("visible");
      i--;
    }
  }
});