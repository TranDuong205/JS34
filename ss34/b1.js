let items = [
    "List item number 1",
    "List item number 2",
    "List item number 3"
];
var ulElement = document.createElement("ul");
document.body.appendChild(ulElement);
for (var i = 0; i < items.length; i++) {
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(items[i]));
    ulElement.appendChild(listItem);
}