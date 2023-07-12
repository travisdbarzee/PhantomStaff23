addEventListener("load", () => {
   
let judgeInfo = document.getElementsByClassName("tooltip");
  
    for (let i = 0; i < judgeInfo.length; i++) {
      judgeInfo[i].children[1].addEventListener("click", (e) => {
        let el = e.target.parentElement.children[0];
        el.classList.toggle("visible")
      });
    }

let shows = document.getElementsByClassName('show')

for (let i = 0; i < shows.length; i++) {
  shows[i].children[1].addEventListener('click', (e) => {

    let el = e.target.parentElement.children[2];
    el.classList.toggle("visible")
  })
}
})

window.addEventListener('click', function handleClickOutsideBox(event) {

  let shows = document.getElementsByClassName('show')
  let judgeInfo = document.getElementsByClassName("tooltip");
  if (!shows.contains(event.target)) {
    shows.style.display = 'hidden';
  }
  })

