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
  }, 500);
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
function saatiedotLeiritiella(lat, lon) {
  var key = '61307b4077223d705a311cfc93df2046';
  fetch('https://api.openweathermap.org/data/2.5/weather?' +
      'lat=' + lat + '&lon=' + lon + '&appid=' + key)
      .then(function(vastaus) { return vastaus.json() })
      .then(function(data) {
        naytaSaa(data);
      })
      .catch(function () {
        //virheet
      });
  function naytaSaa(d) {
    var saa = d.weather[0].main;
    if (saa === 'Clouds') {
      console.log('Oli se');
      var body = document.getElementsByTagName('body')[0];
      body.style.backgroundImage = "url('../images/pilvinenSaa.gif')";
    }
  }
}
