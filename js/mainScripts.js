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