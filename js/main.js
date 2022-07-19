const basePrice = 6000;
const squareInput = document.querySelector("#square-input");
const squareRange = document.querySelector("#square-range");
const inputs = document.querySelectorAll("input");
let totalPrice = document.querySelector("#total-price");
const radiosType = document.querySelectorAll("input[name='type']");
const radiosBuilding = document.querySelectorAll("input[name='building']");
const radiosRooms = document.querySelectorAll("input[name='rooms']");
const checkboxes = document.querySelectorAll("input[type='checkbox']");

const formater = new Intl.NumberFormat("ru");  //создаем форматер цисла,что бы лучше выглядело и было с пробелами .format()


totalPrice.textContent = formater.format(parseInt(squareRange.value) * basePrice); // что бы считалось на старте кода, когда значение стоит по умолчанию и никаких действий не произошло
function calcPrice () {
  let currentPrice = parseInt(squareInput.value) * basePrice;

  radiosType.forEach(function (itemRadioType) {
    if (itemRadioType.checked === true) {
      currentPrice = parseFloat(itemRadioType.value) * currentPrice;
    }
  });
  radiosBuilding.forEach(function (itemRadioBuilding){
    if (itemRadioBuilding.checked) {
      currentPrice = parseFloat(itemRadioBuilding.value) * currentPrice;
    }
  });
  radiosRooms.forEach(function (itemRadioRooms) {
    if (itemRadioRooms.checked) {
      currentPrice = parseFloat(itemRadioRooms.value) * currentPrice;
    }
  });
  checkboxes.forEach(function (itemCheckbox) {
    if (itemCheckbox.checked) {
      currentPrice = parseFloat(itemCheckbox.value) * currentPrice;
    }
  });
  totalPrice.textContent = formater.format(currentPrice);
}

inputs.forEach(function (item) {
  item.addEventListener("input", function () {  // input при изменении запускать
    calcPrice();
  })
});

squareInput.addEventListener("input", function () {
  squareRange.value = squareInput.value;
  calcPrice();
  /*totalPrice.textContent = +squareInput.value * +basePrice;*/
});

squareRange.addEventListener("input", function () {
  squareInput.value = squareRange.value;
  calcPrice();
});



