function stickyHeader() {
  var header = document.getElementById('header')
  if (header !== null) {
    if (window.pageYOffset >= 100) {
      header.classList.add('shrink')
    } else {
      header.classList.remove('shrink')
    }
  }
}

window.onscroll = function() {
  stickyHeader()
}
