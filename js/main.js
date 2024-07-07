document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById(
    "mobile-menu-icon-container"
  );
  const mobileMenuIcon = document.getElementById("mobile-menu-icon");
  const mobileSideBar = document.getElementById("mobile-menu");
  const mobileHeaderItems = document.querySelectorAll(".mobile-header-item");
  const mobileCloseIcon = document.getElementById("mobile-close-icon");
  const bodyOverlay = document.getElementById("popup-overlay");

  const openSidenav = () => {
    mobileSideBar.classList.toggle("mobile-active");
    checkBodyOverlay();
  };

  const closeSidenav = () => {
    mobileSideBar.classList.remove("mobile-active");
    checkBodyOverlay();
  };

  const checkBodyOverlay = () => {
    if (mobileSideBar.classList.contains("mobile-active")) {
      bodyOverlay.style.display = "block";
    } else {
      bodyOverlay.style.display = "none";
    }
  };

  mobileMenuButton.addEventListener("click", openSidenav);
  mobileCloseIcon.addEventListener("click", closeSidenav);

  document.body.addEventListener("click", (event) => {
    const target = event.target;
    const isMobileHeaderItem = Array.from(mobileHeaderItems).some((item) =>
      item.contains(target)
    );

    const isMobileSidebar = mobileSideBar.contains(target);
    const checkMenuButton = mobileMenuButton.contains(target);
    const checkMenuIcon = mobileMenuIcon.contains(target);

    if (mobileSideBar.classList.contains("mobile-active")) {
      if (
        !isMobileHeaderItem &&
        !isMobileSidebar &&
        !checkMenuButton &&
        !checkMenuIcon
      ) {
        closeSidenav();
      }
    }
  });
});
