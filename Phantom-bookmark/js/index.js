window.addEventListener('DOMContentLoaded', () => {
  console.log('JS Loaded');
  const urlInput = document.getElementById("urlInput");
  const myForm = document.getElementById("myForm");
  let pageList = new Array();
  let currentPage = 1;
  let numberPerPage = 20;
  let numberOfPages = 1;   // calculates the total number of pages
  let existing = localStorage.getItem("localList");

  function fillArray() {
    let newUrl = urlInput.value.trim();
    existing = localStorage.getItem("localList");
    existing = existing ? existing.split(',') : [];
    existing.push(newUrl);
    localStorage.setItem("localList", existing);
    loadList();
    numberOfPages = getNumberOfPages();
    urlInput.value = "";
    urlInput.focus();
  }

function getNumberOfPages() {
    existing = localStorage.getItem("localList");
    return Math.ceil(existing.length / numberPerPage);
}

 nextPage = () => {
    currentPage += 1;
    loadList();
}
 previousPage = () => {
    currentPage -= 1;
    loadList();
}
 firstPage = () => {
    currentPage = 1;
    loadList();
}
 lastPage = () => {
    currentPage = numberOfPages;
    loadList();
}

function loadList() {//loading the existing list of bookmarks from localStorage
    var existing = localStorage.getItem("localList");
    existing = existing ? existing.split(',') : [];
    var begin = ((currentPage - 1) * numberPerPage);
    var end = begin + numberPerPage;
    pageList = existing.slice(begin, end);
    drawList();    // draws out the data
    check();         // determines the states of the pagination buttons
}

function drawList(e) {//draws the unordered list of first 20 bookmarks per page
    document.getElementById("list").innerHTML = "";
    for (i = 0; i < pageList.length; i++) {
        document.getElementById("list").innerHTML += `<li> ${pageList[i]} </li>`;
    }
}

function check() { // disbales buttons that aren't in use
    document.getElementById("next").disabled = currentPage == numberOfPages ? true : false;
    document.getElementById("previous").disabled = currentPage == 1 ? true : false;
    document.getElementById("first").disabled = currentPage == 1 ? true : false;
    document.getElementById("last").disabled = currentPage == numberOfPages ? true : false;
}

function load() { //on page load load list
    loadList();
}

window.onload = load;
  myForm.addEventListener("submit", function(evt) {
      evt.preventDefault();
      isValidUrl();//checks whether it's a url does not submit if not url
  });
  const isValidUrl = () => {
    try {
      new URL(urlInput.value);
      return fillArray();
    } catch (_) {
      return false;
      }
    }

});
