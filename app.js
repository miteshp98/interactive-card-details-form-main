"use strict";

const submitButton = document.querySelector(".submit-btn");
const continueButton = document.querySelector(".continue-btn");
const holderNameInput = document.querySelector("#cardholdername");
const cardNumberDisplay = document.querySelector(".card-number");
const holderNameDisplay = document.querySelector(".card-holder-name");
const expiryMonthDisplay = document.querySelector(".card-month");
const expiryYearDisplay = document.querySelector(".card-year");
const cvcNumberDisplay = document.querySelector(".cvc-number");
const expiryYearInput = document.querySelector("#exp-year");
const expiryMonthInput = document.querySelector("#exp-month");
const cvcNumberInput = document.querySelector("#cvcnumber");
const cardNumberInput = document.querySelector("#cardnumber");
const errorsMessage = document.querySelectorAll(".error");
const input = document.querySelectorAll("input");

//Show Error If Input wrong
function showError(index, message) {
  errorsMessage[index].textContent = message;
  errorsMessage[index].classList.add("show-error");
  input[index].style.borderColor = "hsl(0, 100%, 66%)";
}

//Hide error if Input Right
function hideError(index) {
  errorsMessage[index].classList.remove("show-error");
  input[index].style.borderColor = "hsl(278, 68%, 11%)";
}

function hideErrorAfterSometime(index) {
  setTimeout(() => {
    errorsMessage[index].classList.remove("show-error");
    input[index].style.borderColor = "hsl(270, 3%, 87%)";
  }, 3000);
}

//Check If HolderName Valid or not using regex
function checkCardHolderNameValid() {
  let cardUserName = holderNameInput.value;
  const nameRegex = /[0-9!-/:-@[-`{-~]/;

  if (cardUserName === "") {
    showError(0, "can't be blank");
    hideErrorAfterSometime(0);
  } else if (nameRegex.test(cardUserName)) {
    showError(0, "enter valid name");
    hideErrorAfterSometime(0);
    return false;
  } else {
    hideError(0);
    holderNameDisplay.textContent = holderNameInput.value;
    return true;
  }
}

//check card Number Include only numbers
function checkCardNumberValid() {
  let userCardNumber = cardNumberInput.value;
  const numberRegex = /[a-zA-Z!-/:-@[-`{-~]/;

  if (userCardNumber === "") {
    showError(1, "can't be blank");
    hideErrorAfterSometime(1);
  } else if (numberRegex.test(userCardNumber)) {
    showError(1, "wront format,numbers only");
    hideErrorAfterSometime(1);
    return false;
  } else {
    formatInput();
    hideError(1);
    cardNumberDisplay.textContent = cardNumberInput.value;
    return true;
  }
}

//Add Space After 4 character's
function formatInput() {
  let cardNum = cardNumberInput.value.replace(/\D/g, "");

  let formatedValue = "";

  for (let i = 0; i < cardNum.length; i++) {
    if (i % 4 == 0 && i > 0) {
      formatedValue += " ";
    }
    formatedValue += cardNum[i];
  }
  cardNumberInput.value = formatedValue;
}

//pad Zero in month
function padZero() {
  let userCardExpiryMonth = expiryMonthInput.value;

  if (userCardExpiryMonth < 10 && userCardExpiryMonth > 0) {
    expiryMonthInput.value = userCardExpiryMonth.padStart(2, "0");
  }
}

//Check expiry month  valid or not
function checkCardExpiryMonthValid() {
  let userCardExpiryMonth = expiryMonthInput.value;
  const numberRegex = /[a-zA-Z!-/:-@[-`{-~]/;

  if (userCardExpiryMonth === "") {
    showError(2, "can't be blank");
    hideErrorAfterSometime(2);
  } else if (numberRegex.test(userCardExpiryMonth)) {
    showError(2, "wrong format");
    hideErrorAfterSometime(2);
    return false;
  } else if (userCardExpiryMonth <= 0 || userCardExpiryMonth > 12) {
    showError(2, "wrong month");
    hideErrorAfterSometime(2);
    return false;
  } else {
    hideError(2);
    padZero();
    expiryMonthDisplay.textContent = expiryMonthInput.value;
    return true;
  }
}

//Check Expriy Year Valid
function checkCardExpiryYearValid() {
  let userCardExpiryYear = expiryYearInput.value;
  const date = new Date();
  const numberRegex = /[a-zA-Z!-/:-@[-`{-~]/;
  const currentYear = date.getFullYear().toString().slice(2);

  if (userCardExpiryYear === "") {
    showError(3, "can't be blank");
    hideErrorAfterSometime(3);
  } else if (numberRegex.test(userCardExpiryYear)) {
    showError(3, "wrong format");
    hideErrorAfterSometime(3);
    return false;
  } else if (userCardExpiryYear < currentYear) {
    showError(3, "expired card");
    hideErrorAfterSometime(3);
    return false;
  } else {
    hideError(3);
    expiryYearDisplay.textContent = expiryYearInput.value;
    return true;
  }
}

function checkCardCvcNumberValid() {
  let userCardCvcNumber = cvcNumberInput.value;
  const numberRegex = /[a-zA-Z!-/:-@[-`{-~]/;

  if (userCardCvcNumber === "") {
    showError(4, "can't be blank");
    hideErrorAfterSometime(4);
  } else if (numberRegex.test(userCardCvcNumber)) {
    showError(4, "numbes only");
    hideErrorAfterSometime(4);
    return false;
  } else if (userCardCvcNumber.length < 3) {
    showError(4, "wrong cvc");
    hideErrorAfterSometime(4);
    return false;
  } else {
    hideError(4);
    cvcNumberDisplay.textContent = cvcNumberInput.value;
    return true;
  }
}

//Display Info
holderNameInput.addEventListener("input", function () {
  checkCardHolderNameValid();
});

cardNumberInput.addEventListener("input", function () {
  checkCardNumberValid();
});

expiryMonthInput.addEventListener("blur", function () {
  checkCardExpiryMonthValid();
});

expiryYearInput.addEventListener("blur", function () {
  checkCardExpiryYearValid();
});

cvcNumberInput.addEventListener("blur", function () {
  checkCardCvcNumberValid();
});

//submit if everything is fine
submitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let isHolderName = checkCardHolderNameValid();
  let isCardNumber = checkCardNumberValid();
  let isCardExpiryMonth = checkCardExpiryMonthValid();
  let isCardExpiryYear = checkCardExpiryYearValid();
  let isCardCvcNumber = checkCardCvcNumberValid();

  if (
    isHolderName &&
    isCardNumber &&
    isCardExpiryMonth &&
    isCardExpiryYear &&
    isCardCvcNumber
  ) {
    document.querySelector(".card-detail-form").classList.add("hide-form");
    document.querySelector(".thank-you-wrap").classList.add("show-success");
    holderNameInput.value = "";
    cardNumberInput.value = "";
    cvcNumberInput.value = "";
    expiryMonthInput.value = "";
    expiryYearInput.value = "";
  }
});

continueButton.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".card-detail-form").classList.remove("hide-form");
  document.querySelector(".thank-you-wrap").classList.remove("show-success");

  holderNameDisplay.textContent = "Jane Appelessed";
  cardNumberDisplay.textContent = "0000 0000 0000 0000";
  expiryMonthDisplay.textContent = "00";
  expiryYearDisplay.textContent = "00";
  cvcNumberDisplay.textContent = "000";

  input.forEach((item) => {
    item.style.borderColor = "hsl(270, 3%, 87%)";
  });
});
