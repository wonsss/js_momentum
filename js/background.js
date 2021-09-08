const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  const button = document.getElementById("bgBtn");
  const body = document.querySelector("body");
  function handleGradient() {
    const randomNumber1 = Math.random();
    const randomNumber2 = Math.random();
    const a = Math.floor(colors.length * randomNumber1);
    const b = Math.floor(colors.length * randomNumber2);
    const pickedColorA = colors[a];
    const pickedColorB = colors[b];
    body.style.background = `linear-gradient(to right, ${pickedColorA}, ${pickedColorB})`;
  }
  handleGradient();
  button.addEventListener("click", handleGradient);
