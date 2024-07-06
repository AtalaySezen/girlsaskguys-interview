let popupOverlay = document.getElementById("popup-overlay");
let popupContainer = document.getElementById("popup-container");
let popupFirstContent = document.getElementById("popup-first-content");
let popupSecondContent = document.getElementById("popup-second-content");
let popupThirdContent = document.getElementById("popup-third-content");
let popupHeader = document.getElementById("popup-header");
let planNowButton = document.getElementById("planNowButton");
let timeOut;

function checkPastDates() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  document.getElementById("trip-date").min = today;
}

//Show Black Overlay
function startPlanVacation() {
  popupOverlay.style.display = "block";
  popupContainer.style.display = "flex";
}

function closePopup() {
  popupOverlay.style.display = "none";
  popupContainer.style.display = "none";
  popupFirstContent.style.display = "flex";
  popupSecondContent.style.display = "none";
  planNowButton.style.display = "flex";
  popupHeader.innerHTML = "Plan Your Vacation";
  popupThirdContent.style.display = "none";
  clearVacationTimeout();
}

function handleFormSubmit(event) {
  event.preventDefault();
  planVacation();
}

function planVacation() {
  event.preventDefault();
  popupFirstContent.style.display = "none";
  popupSecondContent.style.display = "flex";

  timeOut = setTimeout(function () {
    popupSecondContent.style.display = "none";
    planNowButton.style.display = "none";
    popupHeader.innerHTML = "Travel Guide";
    popupThirdContent.style.display = "flex";
    clearVacationTimeout();
  }, 2000);
}

function clearVacationTimeout() {
  clearTimeout(timeOut);
}

checkPastDates();
