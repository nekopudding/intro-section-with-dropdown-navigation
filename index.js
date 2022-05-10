    //reposition dropdowns to be the child of button
    let featuresDropdown = document.getElementById("features-dropdown");
    let features = document.getElementById("features");
    features.appendChild(featuresDropdown);
    let companyDropdown = document.getElementById("company-dropdown");
    let company = document.getElementById("company");
    company.appendChild(companyDropdown);

    //desktop functions
    function toggleDropdown(n) {
      if (n === 0) {
        if (features.classList.contains('arrow-down')) features.classList.replace('arrow-down', 'arrow-up');
        else features.classList.replace('arrow-up', 'arrow-down');
        featuresDropdown.classList.toggle("hide");
        hideCompanyDropdown();
      } else if (n === 1) {
        if (company.classList.contains('arrow-down')) company.classList.replace('arrow-down', 'arrow-up');
        else company.classList.replace('arrow-up', 'arrow-down');
        companyDropdown.classList.toggle("hide");
        hideFeaturesDropdown();
      }
    }
    function closeDropdown() {
      hideCompanyDropdown();
      hideFeaturesDropdown();
    }
    function hideFeaturesDropdown() {
      featuresDropdown.classList.add("hide");
      features.classList.replace('arrow-up', 'arrow-down');
    }
    function hideCompanyDropdown() {
      company.classList.replace('arrow-up', 'arrow-down');
      companyDropdown.classList.add("hide");
    }
    window.onclick = function(event) { //close dropdown on click out
      if (!event.target.matches('.dropdown') && !event.target.matches('.arrow-up')) {
        closeDropdown();
      }
    }   
    handleResize();
    window.addEventListener('resize', handleResize);

    //mobile functions
    function handleResize() {
      if (window.innerWidth <= 1000) {
        console.log("changing to mobile layout...");
        document.getElementsByClassName('page-links')[0].classList.add('hide');
        document.getElementsByClassName('login')[0].classList.add('hide');
        document.getElementsByClassName('register')[0].classList.add('hide');
        document.getElementsByClassName('menu-icon')[0].classList.remove('hide');
        document.getElementsByClassName('hero')[0].src = "./images/image-hero-mobile.png"
      } else {
        document.getElementsByClassName('page-links')[0].classList.remove('hide');
        document.getElementsByClassName('login')[0].classList.remove('hide');
        document.getElementsByClassName('register')[0].classList.remove('hide');
        document.getElementsByClassName('menu-icon')[0].classList.add('hide');
        document.getElementsByClassName('hero')[0].src = "./images/image-hero-desktop.png"
      }
    }

    let appbar = document.getElementById("appbar");
    let body = document.getElementsByTagName("body");
    let mobileMenu = document.getElementById("mobile-menu");
    let dimmer = document.getElementsByClassName("dimmer");
    let featuresMobile = document.getElementById("features-mobile");
    let companyMobile = document.getElementById("company-mobile");
    let featuresDropdownMobile = document.getElementById("features-dropdown-mobile");
    let companyDropdownMobile = document.getElementById("company-dropdown-mobile");

    // appbar.classList.add("fixed");

    function toggleMenu() {
      mobileMenu.classList.toggle('hide');
      dimmer[0].classList.toggle('hide');
      body[0].classList.toggle("disable-scroll");
    }
    function toggleMobileDropdown(n) {
      if (n === 0) {
        if (featuresMobile.classList.contains('arrow-down')) featuresMobile.classList.replace('arrow-down', 'arrow-up');
        else featuresMobile.classList.replace('arrow-up', 'arrow-down');
        featuresDropdownMobile.classList.toggle("hide");
      } else if (n === 1) {
        if (companyMobile.classList.contains('arrow-down')) companyMobile.classList.replace('arrow-down', 'arrow-up');
        else companyMobile.classList.replace('arrow-up', 'arrow-down');
        companyDropdownMobile.classList.toggle("hide");
      }
    }
    function closeMobileDropdown() {
      featuresMobile.classList.replace('arrow-up', 'arrow-down');
      companyMobile.classList.replace('arrow-up', 'arrow-down');
      companyDropdownMobile.classList.add('hide');
      featuresDropdownMobile.classList.add("hide");
    }