function openAddCardModal() {
  const modal = new bootstrap.Modal(document.getElementById("addCardModal"));
  modal.show();
}

function addCard() {
  const name = document.getElementById("floatingInput").value.trim();

  const description = document.getElementById("floatingDescription").value.trim();

  const date = document.getElementById("floatingDate").value.trim();

  let cardContainer = document.getElementById("card-container");

  cardContainer.innerHTML += `
    <div class="col">   
        <div class="card h-100">
            <div class="card-body">
                <h1 class="card-title">${name}</h1>
                <h4 class="card-text task-date">${date}</h4>
                <h5 class="card-text task-description">${description}</h5>
            </div>
            <div class="card-button">
              <button class="btn btn-danger m-3" onClick="deleteCard(this)">Delete</button>
              <button class="btn btn-primary m-3" onClick="editCard(this)">Edit</button>
            </div>
        </div>
    </div>
    `;
  alert("Task added successfully!");
}

function deleteCard(button)
{
  const card = button.closest(".col");
  card.remove();

  alert("Task deleted successfully!");
}

let cardBeingEdited = null;

function getTaskFields(card) {
  const textFields = card.querySelectorAll(".card-text");

  return {
    title: card.querySelector(".card-title"),
    date: card.querySelector(".task-date") || textFields[0],
    description: card.querySelector(".task-description") || textFields[1],
  };
}

function editCard(button) {
  cardBeingEdited = button.closest(".col");
  const fields = getTaskFields(cardBeingEdited);

  document.getElementById("editfloatingInput").value =
    fields.title.textContent;

  document.getElementById("editfloatingDate").value =
    fields.date.textContent;

  document.getElementById("editfloatingDescription").value =
    fields.description.textContent;

  const modal = new bootstrap.Modal(document.getElementById("editModal"));
  modal.show();
}

function saveEditedCard() {
  if (!cardBeingEdited) return;

  const name = document.getElementById("editfloatingInput").value.trim();
  const description = document.getElementById("editfloatingDescription").value.trim();
  const date = document.getElementById("editfloatingDate").value;

  const fields = getTaskFields(cardBeingEdited);
  fields.title.textContent = name;
  fields.date.textContent = date;
  fields.description.textContent = description;

  cardBeingEdited = null;

  alert("Task updated successfully!");
}
