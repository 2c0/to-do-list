// Create a "close" button and append it to each list item

/* function createCloseBtn () {
  var myNodelist = document.getElementsByTagName("LI");
  var i;

  for (i = 0; i < myNodelist.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
  }
} */

/* function createEditBtn () {
  var myNodelist = document.getElementsByTagName("LI");
  var i;

  for (i = 0; i < myNodelist.length; i++) {
    var editBtn = document.createElement("button");
    var txt = document.createTextNode("edit");
    editBtn.className = "edit-btn";
    editBtn.appendChild(txt);
    myNodelist[i].appendChild(editBtn);
  }
} */

var close = document.getElementsByClassName("checkbox-btn");

function createCheckboxes() {
  var myNodelist = document.getElementsByTagName("li");
  var i;

  for (i = 0; i < myNodelist.length; i++) {
    var input = document.createElement("input");
    input.setAttribute('type', 'checkbox');
    input.className = "checkbox-btn";
    myNodelist[i].appendChild(input);
  }
}

createCheckboxes();

// Click on a close button to hide the current list item
for (var i = 0; i < close.length; i++) {
  close[i].addEventListener('click', function () {
    var div = this.parentElement;
    setTimeout(function () {

      //div.style.display = "none";
      div.remove();
      console.log('test');

    }, 500);
  });
}

// Add a "checked" symbol when clicking on a list item
/* var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false); */

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  createCheckboxes();

/*   var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span); */



/*   for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  } */
}