//console.log('ggg')
let x = document.getElementById("input");

function submit() {
  var para = document.createElement("div");
  para.setAttribute("class", "para");

  //var node = document.createTextNode(x.value);

  //para.appendChild(node);

  node = document.createElement("div");
  node.setAttribute("class", "txt");
  node.appendChild(document.createTextNode(x.value));

  para.appendChild(node);

  var element = document.getElementById("list");
  element.appendChild(para);
  var check = document.createElement("input");
  check.setAttribute("type", "checkbox");
  para.appendChild(check);

  var deleteButton = document.createElement("div");
  deleteButton.setAttribute("class", "deleteButton");

  deleteButton.addEventListener("click", () => {
    para.remove();
  });

  var deleteButtonNode = document.createTextNode("delete");
  deleteButton.appendChild(deleteButtonNode);
  para.appendChild(deleteButton);
  //function of the delete button
}
