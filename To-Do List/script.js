function openAddCardModal() {
  const modal = new bootstrap.Modal(document.getElementById("addCardModal"));
  modal.show();
}

function addCard() {
  const name = document.getElementById("floatingInput").value;

  const description = document.getElementById("floatingDescription").value;

  const date = document.getElementById("floatingDate").value;

  let cardContainer = document.getElementById("card-container");

  cardContainer.innerHTML += `
    <div class="col">   
        <div class="card h-100">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text">${description}</p>
                <p class="card-text">${date}</p>
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

function deleteCard(button) {
  const card = button.closest(".col");
  card.remove();

  alert("Task deleted successfully!");
}

function editCard(button)
{
  const modal = new bootstrap.Modal(document.getElementById("editModal"));
  modal.show();

  let name = document.getElementById("editfloatingInput");
  let body = document.getElementById("editfloatingDescription");
  let date = document.getElementById("editfloatingDate");



}















































