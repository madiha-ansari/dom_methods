// function removeItem() {
//     // Parent element
//     var list = document.getElementById("myList");

//     // Child element to be removed
//     var item = document.getElementById("removeMe");

//     // Removing the child element
//     list.removeChild(item);
// }



// Child element ko select karo
// var childElement = document.getElementById("childPara");

// // parentNode se parent element ko access karo
// var parentElement = childElement.parentNode;

// // Parent element ka background color change karo
// parentElement.style.backgroundColor = "lightblue";

// // Parent element ka id check karo
// console.log("Parent Element ID: " + parentElement.id);


var parentElement = document.getElementById("parentDiv");

// Get all child nodes
var childNodesList = parentElement.childNodes;

// Log the child nodes list
console.log(childNodesList);

// Access individual child nodes
for (var i = 0; i < childNodesList.length; i++) {
    console.log(childNodesList[i]);
}