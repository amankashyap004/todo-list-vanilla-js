const formBody = document.getElementById("form-body");
const formBtn = document.getElementById("form-btn");
const formInputTitle = document.getElementById("form-input-title");
const formInputDescription = document.getElementById("form-input-description");
const toDoAdd = document.getElementById("to-do-add");

formBtn.addEventListener("click", (event) => {
   event.preventDefault();
   const inputValueTitle = formInputTitle.value;
   const inputValueDescription = formInputDescription.value;

   const newItem = document.createElement("div");
   newItem.className = "todo-box";

   const newTextSection = document.createElement("div");
   newTextSection.className = "text-section";

   const newTitle = document.createElement("h2");
   newTitle.className = "todo-title";
   newTitle.textContent = inputValueTitle;

   const newPara = document.createElement("p");
   newPara.className = "todo-description";
   newPara.textContent = inputValueDescription;

   const newRemoveBtn = document.createElement("button");
   newRemoveBtn.type = "submit";
   newRemoveBtn.className = "btn remove-btn";
   newRemoveBtn.textContent = "Remove";

   toDoAdd.append(newItem);
   newItem.append(newTextSection);
   newTextSection.append(newTitle);
   newTextSection.append(newPara);
   newItem.append(newRemoveBtn);

   newRemoveBtn.addEventListener("click", function (event) {
      event.preventDefault();
      newItem.remove();
   });

   formInputTitle.value = "";
   formInputDescription.value = "";
});
