function main() {


  const checkTheme = localStorage.getItem("theme") || "light";
checktheme();
let moonBtn;

do {
  moonBtn = document.getElementById("moon");
} while (!moonBtn);
let sunBtn;
do {
  sunBtn = document.getElementById("sun");
} while (!sunBtn);

moonBtn?.addEventListener("click", function () {
  localStorage.setItem("theme", "dark");
  moonBtn.style.display = "none";
  sunBtn.style.display = "block";
  checktheme();
});
sunBtn?.addEventListener("click", function () {
  localStorage.setItem("theme", "light");
  moonBtn.style.display = "block";
  sunBtn.style.display = "none";
  checktheme();
});

console.log(checkTheme);
const body = document.body;

}


main();



function checktheme() {
  const checkTheme = localStorage.getItem("theme") || "light";
  const body = document.body;
  let moonBtn;

  do {
    moonBtn = document.getElementById("moon");
  } while (!moonBtn);
  let sunBtn;
  do {
    sunBtn = document.getElementById("sun");
  } while (!sunBtn);

  switch (checkTheme) {
    case "dark":
      moonBtn.style.display = "none";
      sunBtn.style.display = "block";
      body.classList.add("darkMode");
      break;
    case "light":
      moonBtn.style.display = "block";
      sunBtn.style.display = "none";
      body.classList.remove("darkMode");
      break;
  }
}
