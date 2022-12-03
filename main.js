const selectField = document.getElementById("selectField");
const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("options");
const list = document.getElementById("list");
const arrowIcon = document.getElementById("arrowIcon");

selectField.onclick = function () {
  list.classList.toggle("hide");
  arrowIcon.classList.toggle("rotate");
};

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
  };
}

const selectField2 = document.getElementById("selectField2");
const selectText2 = document.getElementById("selectText2");
const options2 = document.getElementsByClassName("options2");
const list2 = document.getElementById("list2");
const arrowIcon2 = document.getElementById("arrowIcon2");

selectField2.onclick = function () {
  list2.classList.toggle("hide2");
  arrowIcon2.classList.toggle("rotate2");
};

for (option of options2) {
  option.onclick = function () {
    selectText2.innerHTML = this.textContent;
    list2.classList.toggle("hide2");
    arrowIcon2.classList.toggle("rotate2");
  };
}
