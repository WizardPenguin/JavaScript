### linking
<script src=".."></script> 
but this causes loading of js and execution parallel to html loading so some element might be unknown at that time, using async causes both loading and parsing html parallely but when loading done parsing stops and it starts executing javascritp still some element might now be known to us
** so better is to use defer **

### getting element 
1.) getting element by query selector 
document.querySelector or document.querySelectorAll() passed with same string as we use in css
this gives nodeList which can work of simple for , for OF and forEach loops
they provide static list 
2.) id/class/element selectors 
getElementByClassName, getElementById, getElementByTagName etc gives all things matches argument 
this can only work with forOf and simple for loop, it is of type HTMLCollections
they provides live list 

### working with elements html/css


element.style.backgroundColor or .. etc 


element.innerHTML that can be changed or appended with new element according to requirement 
but when changes made by this method whole inner html of element is parced again which might take some time 
instead we creates new element and appends it by using DOM manipulation 
element.textContent : text which might or might not shown on webpage but is present in html 
element.innerText : text which is shown on webpage(due to css or something)

* getting and setting attributes *
element.getAttribute("href") 
element.setAttribute("type","button") etc 
.removeAttribute(elm)
.hasAttribute(attr)

* dealing with class added to element *
 classes = element.classList 
 this classList is something of set type means 
 .add()
 .remove()
 .contains()
 .toggle()
are methods available here 

### dom manipulation 
document.getRootNode()
.parentNode
.childNodes
.children
.nextSibling
.nextElementSibling
.nodeName

* adding new element *
newelm = document.createElement("li")
txt = document.createTextNode("this is text") 
newelm.append(txt) 
or 
newem.textContent = "this is text" 

then we can add this Node to dom tree 
node.append(newelm)

operations allowed are : 
append(elm) // adds new element insider it at end 
prepend(elm) // adds new element inside it at begining
.remove(); removes element on which function is called from dom tree
.after(elm) // adds new element after it at same level 
.before(elm) // adds new element before it at same level 


* cloning nodes *
newNode = node.cloneNode() // cleaning just element 
            node.cloneNode(true) // deep cleaning with metadata

* Event Object * 
when even is called then browser api's gives calling function to JS Engine, 
for that it gives EVENT OBJECT function as argument so that it can know imformation how even is called
2 important properties of even object are 
1. target =>  due to which even it trigerred 
2. currentTraget => who's even it called