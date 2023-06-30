addEventListener("load", () => {
  let shows = document.getElementsByClassName("tooltip");

  for (let i = 0; i < shows.length; i++) {
    shows[i].children[1].addEventListener("click", (e) => {
      let el = e.target.parentElement.children[0];

      if (el.classList.contains("visible")) {
        el.classList.add("hidden");
        el.classList.remove("visible");
        console.log(el);
      } else {
        el.classList.add("visible");
        el.classList.remove("hidden");
        console.log(el);
      }
    });
  }
});
