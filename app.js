const position = document.querySelector(".position");

let poss = [];
window.addEventListener("click", (mouse) => {
  const pos = (position.innerHTML = `${parseInt(
    (mouse.pageX / innerWidth) * 100
  )}% ${parseInt((mouse.pageY / innerHeight) * 100)}%`);
  poss.push(pos);
  position.innerHTML = poss.map((e) => e);

  console.log(position.innerHTML);
  // console.log(
  //   `${parseInt((mouse.pageX / innerWidth) * 100)}% ${parseInt(
  //     (mouse.pageY / innerHeight) * 100
  //   )}%`
  // );
});


