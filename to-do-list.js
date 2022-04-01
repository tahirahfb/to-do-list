function addItem(list, inputField) { 
    var list = document.getElementById(list);
    var listItem = document.createElement("li");
    listItem.innerText = inputField.value;
    list.appendChild(listItem);
    inputField.value = " ";
    return false;
  }
  
const getLi = document.querySelector('ul');
getLi.addEventListener('click', function (rm){
    var listItem = rm.target;
    listItem.remove();
})



  