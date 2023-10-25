var tabs = document.querySelectorAll('.tabinnhold');
var currentTab = 0;

function showTab(tabIndex) {
  tabs[currentTab].classList.remove('active');
  tabs[tabIndex].classList.add('active');
  currentTab = tabIndex;
}

function rotateTabs() {
  var nextTab = (currentTab + 1) % tabs.length;
  showTab(nextTab);
}

// Starter bildekarusellen ved å vise den første fanen
showTab(currentTab);

// Bytter til neste fane hvert 2. sekund
var carouselInterval = setInterval(rotateTabs, 2000);

// Stopp karusellen når musepekeren beveger seg over fanen
var tabContainer = document.querySelector('.forside-tabs');
tabContainer.addEventListener('mouseenter', function() {
  clearInterval(carouselInterval);
});

// Gjenoppta karusellen når musepekeren beveger seg bort fra fanen
tabContainer.addEventListener('mouseleave', function() {
  carouselInterval = setInterval(rotateTabs, 3000);
});
