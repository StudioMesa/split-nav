document.addEventListener("DOMContentLoaded", function() {
const headerTitleNavWrapper = document.querySelector(".header-layout-branding-center-nav-center .header-title-nav-wrapper");const headerNav = document.querySelector(".header-layout-branding-center-nav-center .header-nav");const clonedHeaderNav = headerNav.cloneNode(true); headerTitleNavWrapper.prepend(clonedHeaderNav);setTimeout(function(){ headerTitleNavWrapper.classList.add('has-nav'); }, 200);
});
