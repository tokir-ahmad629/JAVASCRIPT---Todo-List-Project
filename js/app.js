let itemInput = document.querySelector("#itemInput"),
    addButton = document.querySelector(".addButton"),

    clearList = document.querySelector("#clear-list"),
    alert = document.querySelector(".alert"),
    itemList = document.querySelector(".item-list");


   resultButton = (e) => {
    e.preventDefault();
    
    addList = itemInput.value;
    if(addList === "" || addList === " "){
        alert.classList.add('showItem','alert-danger');
        alert.innerText = `Please Enter Valid Value`;
        setTimeout(() => {alert.classList.remove('showItem')}, 3000);
    }else{

    let creatItem = document.createElement("div");
    creatItem.innerHTML = `<div class="item my-3">
    <h5 class="item-name text-capitalize">${addList}</h5>
    <div class="item-icons">
<a href="#" onclick="lineThrow(this)" class="complete-item mx-2 item-icon"><i class="far fa-check-circle"></i></a>
<a href="#" onclick="editLine(this)" class="edit-item mx-2 item-icon"><i class="far fa-edit"></i></a>
<a href="#" onclick="deleteLine(this)" class="delete-item item-icon"><i class="far fa-times-circle"></i></a>
    </div>
   </div> `;
    itemList.appendChild(creatItem);
  
    itemInput.value = "";

    }
        
   }
   addButton.addEventListener("click", resultButton);

         ///====== complete-item ======///
       lineThrow = (thro) => {
            lineElement = thro.parentNode.previousElementSibling;
            lineElement.style.textDecoration = "line-through";
            lineElement.style.color = "gray";
       }

         ///====== complete-edit-item ======///
       editLine = (edits) => {
           itemEdit = edits.parentNode.previousElementSibling.innerText;
           itemInput.value = itemEdit;
           display = edits.parentNode.parentNode;
           display.style.display = "none";
       }

       ///====== complete-delete-item ======///
       deleteLine = (none) => {
           deletElement = none.parentNode.parentNode;
           deletElement.style.display = "none";
       }
       
       clearItem = () => {
          itemList.style.display = 'none';
       }
       clearList.addEventListener("click", clearItem);