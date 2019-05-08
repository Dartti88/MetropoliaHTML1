var hoverTime;
var nonHoverTime;
var listShown = false;
var dropDownButton = document.getElementById("dropDownButton")
dropDownButton.addEventListener('mouseenter', hoverList);
dropDownButton.addEventListener('mouseleave', resetHoverTime);
var dropDownList = document.getElementById("dropDownList")
dropDownList.addEventListener('mouseenter', hoverList);
dropDownList.addEventListener('mouseleave', resetHoverTime);
/*
 * Functions "hoverList" and "resetHoverTime" for running functions after hovering element for set time.
 * Functions below for dropdown list
 */
function hoverList() {
  clearTimeout(nonHoverTime);
  hoverTime = setTimeout(function() {
    if (listShown==false) {
      showDropDownList();
    }
  }, 250);
}
function resetHoverTime() {
  nonHoverTime = setTimeout(function() {
    clearTimeout(hoverTime);
    hideDropDownList();
  }, 100);
}
function showDropDownList() {
  var list = document.getElementById("dropDownList");
    //list.style.width="5px";
    list.style.height="200px";
  setTimeout(function() {
    list.style.width="100px";
    listShown = true;
  }, 200);
}
function hideDropDownList() {
  var list = document.getElementById("dropDownList");
  list.style.width="5px";
  setTimeout(function() {
    list.style.height="0px";
    listShown = false;
  }, 200);
}
/*
 * End of functions for dropdown list
 */

/*
 * Weather&Background functions
 */

//Säänhakufunktio
function saatiedot(lat, lon) {
  var key = '61307b4077223d705a311cfc93df2046';
  fetch('https://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + lat + '&lon=' + lon + '&appid=' + key)
      .then(function(vastaus) { return vastaus.json() })
      .then(function(data) {
        naytaSaa(data);
        console.log(data);
      })
      .catch(function () {
        //virheet
      });
  function naytaSaa(d) {
    var saa = d.weather[0].main;
    var tarkkaSaa = d.weather[0].description;
    var body = document.getElementsByTagName('body')[0];
    if (saa === 'Clouds') {
      if (tarkkaSaa === 'few clouds') {
        console.log('Puolipilvistä');
        body.style.backgroundImage = "url('../images/sää/KirkkaanSnVideo.gif')";
      } else {
        console.log('Pilvistä');
        body.style.backgroundImage = "url('../images/sää/pilvinenSaa.gif')";
      }
    } else if (saa === 'Haze') {
        console.log('Hazea');
        body.style.backgroundImage = "url('../images/sää/haze.jpg')";
    } else if (saa === 'Clear') {
        console.log('Kirkasta');
        body.style.backgroundImage = "url('../images/sää/KirkkaanSnVideo.gif')";
    } else if (saa === 'Rain') {
      console.log('Sadetta');
      body.style.backgroundImage = "url('../images/sää/Rain.gif')";
    }
  }
}

/*
 * End of weather&background functions
 */

/*
 * Functions for checking if element on screen
 */
// on screen checker
const gambitGalleryIsInView = el => {
  const scroll = window.scrollY || window.pageYOffset
  const boundsTop = el.getBoundingClientRect().top + scroll

  const viewport = {
    top: scroll,
    bottom: scroll + window.innerHeight,
  }

  const bounds = {
    top: boundsTop,
    bottom: boundsTop + el.clientHeight,
  }

  return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom )
      || ( bounds.top <= viewport.bottom && bounds.top >= viewport.top );
}


// Usage HERE
document.addEventListener( 'DOMContentLoaded', () => {
  //Initialize elements here
  //Myyrmäki
  const myy1 = document.querySelector( '#myyhidden1' );
  const myy2 = document.querySelector( '#myyhidden2' );
  //Campus
  const campKar = document.getElementById('campHidden1');
  const campMyl = document.querySelector('#campHidden2');
  const campMyy = document.querySelector('#campHidden3');
  // Opiskelu
  const stud1 = document.getElementById('studHidden1');
  const stud2 = document.getElementById('studHidden2');
  const stud3 = document.getElementById('studHidden3');

  const handler = () => raf( () => {

    if (myy1 != null) {
      if (gambitGalleryIsInView( myy1 )) {
        showElement(myy1);
      }
      if (gambitGalleryIsInView( myy2 )) {
        showElement(myy2);
      }
    }
    if (campKar != null) {
      if (gambitGalleryIsInView( campKar )) {
        showElement(campKar);
      }
      if (gambitGalleryIsInView( campMyl )) {
        showElement(campMyl);
      }
      if (gambitGalleryIsInView( campMyy )) {
        showElement(campMyy);
      }
    }
    if (stud1 != null) {
      if (gambitGalleryIsInView( stud1 )) {
        showElement(stud1);
      }
      if (gambitGalleryIsInView( stud2 )) {
        showElement(stud2);
      }
      if (gambitGalleryIsInView( stud3 )) {
        showElement(stud3);
      }
    }

  } )

  handler()
  window.addEventListener( 'scroll', handler )
} )

// requestAnimationFrame
const raf =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function( callback ) {
      window.setTimeout( callback, 1000 / 60 )
    }

/*
 * End of functions for checking if element is on screen
 */

function showElement(element) {
  setTimeout(function() {
    element.classList.add('animation1');
    element.classList.remove('hidden');
  }, 500);
}