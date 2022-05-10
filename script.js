//create a "close" button and append it to each list item

var myNodeList = document.getElementsByTagName("LI");
var i;
for(i=0;i<myNodeList.length;i++){
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span)
}
//click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for(i=0;i<close.length;i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none"
    }
}
//add a "checked symbol when clicking on a list item"
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false)

//create a  new list item when clicking on the add button

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myUL").appendChild(li)
    }
        document.getElementById('myInput').value = "";

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7")
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
        for(let i = 0; i<close.length; i++) {
            close[i].onclick = function() {
                var div = this.parentElement;
                div.style.display = "none"
            }
         }
}

//create sub-list items //currently inactive

function newSubListing() {
    let subli = document.createElement('li');
    let inputValue = document.getElementById("subInput").value;
    let st = document.createTextNode(inputValue);
    subli.appendChild(st);
    if(inputValue === '') {
        alert("break it down...")
    } else {
        document.getElementById('subli').appendChild(subli);
    }
    document.getElementById("mySubList").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    li.appendChild(span);
    for(let i=0;i<close.length;i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
        div.style.display = "none"
     }
    }
}

// local storage of to- do list

localStorage.setItem('myUL', 1)