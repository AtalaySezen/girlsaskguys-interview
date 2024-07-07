document.addEventListener("DOMContentLoaded", () => {
  const bodyOverlay = document.getElementById("popup-overlay");
  const popupContainer = document.getElementById("popup-container");
  const popupFirstContent = document.getElementById("popup-first-content");
  const popupSecondContent = document.getElementById("popup-second-content");
  const popupThirdContent = document.getElementById("popup-third-content");
  const popupHeader = document.getElementById("popup-header");
  const planNowButton = document.getElementById("planNowButton");
  const planNowLoaderButton = document.querySelector(
    ".popup-footer #planNowButtonLoader"
  );
  const closeButton = document.getElementById("close-btn");
  const exploreNowButton = document.getElementById("btn-explore");
  const inputDateSelector = document.getElementById("trip-date");
  const planVacationImage = document.getElementById("plan-vacation");
  let timeOut;

  const checkPastDates = () => {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const yyyy = today.getFullYear();
    const formattedDate = `${yyyy}-${mm}-${dd}`;
    inputDateSelector.min = formattedDate;
  };

  const startPlanVacation = () => {
    bodyOverlay.style.display = "block";
    popupContainer.style.display = "flex";
  };

  const closePopup = () => {
    bodyOverlay.style.display = "none";
    popupContainer.style.display = "none";
    popupFirstContent.style.display = "flex";
    popupSecondContent.style.display = "none";
    planNowButton.style.display = "flex";
    planNowLoaderButton.style.display = "flex";
    popupHeader.innerHTML = "Plan Your Vacation";
    popupThirdContent.style.display = "none";
    clearVacationTimeout();
  };

  const validateInput = (input) => {
    const errorElement = input.nextElementSibling;
    if (input.value.trim() === "") {
      errorElement.textContent = `Please fill out this field.`;
      errorElement.style.display = "block";
      return false;
    } else {
      errorElement.style.display = "none";
      return true;
    }
  };

  const validateForm = () => {
    const inputs = document.querySelectorAll(".popup-input");
    let isValid = true;
    inputs.forEach((input) => {
      if (!validateInput(input)) {
        isValid = false;
      }
    });
    return isValid;
  };

  const planVacation = () => {
    popupFirstContent.style.display = "none";
    popupSecondContent.style.display = "flex";
    timeOut = setTimeout(() => {
      popupSecondContent.style.display = "none";
      planNowButton.style.display = "none";
      planNowLoaderButton.style.display = "none";
      popupHeader.innerHTML = "Travel Guide";
      popupThirdContent.style.display = "flex";
      clearVacationTimeout();
    }, 2000);
  };

  const clearVacationTimeout = () => {
    clearTimeout(timeOut);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      planVacation();
    }
  };

  const handleEscapeKey = (event) => {
    if (event.key === "Escape") {
      closePopup();
    }
  };

  checkPastDates();

  closeButton.addEventListener("click", closePopup);
  exploreNowButton.addEventListener("click", closePopup);
  planVacationImage.addEventListener("click", startPlanVacation);
  popupFirstContent.addEventListener("submit", handleFormSubmit);
  document.addEventListener("keydown", handleEscapeKey);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closePopup();
    }
  });

  const inputs = document.querySelectorAll(".popup-input");
  inputs.forEach((input) => {
    input.addEventListener("input", () => validateInput(input));
    input.addEventListener("change", () => validateInput(input));
  });
});
