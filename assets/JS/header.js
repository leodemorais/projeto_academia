
function openNav() {
  document.getElementById('myNav').style.width = '100%';
}

function closeNav() {
  document.getElementById('myNav').style.width = '0';  
}

const mediaQuery = window.matchMedia("(min-width: 768px)");

function checkWidth(mq) {
  if (mq.matches) {
    openNav(); // Open navigation if viewport width is at least 768px
  } else {
    closeNav(); // Close navigation if viewport width is less than 768px
  }
}

checkWidth(mediaQuery); // Check width on page load
mediaQuery.addListener(checkWidth); // Listen for changes in width
