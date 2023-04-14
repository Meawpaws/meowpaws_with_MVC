(function () {
  ("use strict");
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "click",
      function (event) {
        localStorage.setItem("checkClickUserEdit", 0);
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const form = document.getElementById("editItem");

const idKeyValue = window.location.search;
const idParam = new URLSearchParams(idKeyValue);
const id = idParam.get("id_p");
const checkClickProductEdit = localStorage.getItem("checkClickProductEdit");

if (checkClickProductEdit != 1) {
  location.replace(`${URLROOT}admin/Items`);
} else {
  fetch(`http://localhost/meowpaws/backend/Admins/Product/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      var info = data.result.infoProduct;
      var category = data.result.categories;
      var category = data.result.images;
      var inputs = `<div class="col-md-12">
                        <input class="form-control" type="text" name="name" value="${info.name}" placeholder="Name" required>
                        <div class="valid-feedback">Name is valid!</div>
                        <div class="invalid-feedback">Name cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="text" name="price" value="${info.prenom}" placeholder="Prenom" required>
                        <div class="valid-feedback">Prenom is valid!</div>
                        <div class="invalid-feedback">Prenom cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="text" name="username" value="${info.username}" placeholder="Username" required>
                        <div class="valid-feedback">Username is valid!</div>
                        <div class="invalid-feedback">Username cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="email" name="email" value="${info.email}" placeholder="E-mail" required>
                        <div class="valid-feedback">Email field is valid!</div>
                        <div class="invalid-feedback">Email field cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="text" name="number" value="${info.number}" placeholder="Number" required>
                        <div class="valid-feedback">Number field is valid!</div>
                        <div class="invalid-feedback">Number field cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="text" name="adress" value="${info.adress}" placeholder="Adress" required>
                        <div class="valid-feedback">Adress field is valid!</div>
                        <div class="invalid-feedback">Adress field cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="text" name="postCode" value="${info.postcode}" placeholder="PostCode" required>
                        <div class="valid-feedback">PostCode field is valid!</div>
                        <div class="invalid-feedback">PostCode field cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="text" name="state" value="${info.State}" placeholder="State" required>
                        <div class="valid-feedback">State field is valid!</div>
                        <div class="invalid-feedback">State field cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <input class="form-control" type="text" name="country" value="${info.Country}" placeholder="Country" required>
                        <div class="valid-feedback">Country field is valid!</div>
                        <div class="invalid-feedback">Country field cannot be blank!</div>
                    </div>
    
                    <div class="col-md-12">
                        <select class="form-select mt-3" name="role" id="roleSelect" required>
                            <option value="">Role</option>
                            <option value="1">Admin</option>
                            <option value="0">User</option>
                        </select>
                        <div class="valid-feedback">You selected a Role!</div>
                        <div class="invalid-feedback">Please select a Role!</div>
                    </div>
    
                    <div class="form-button mt-3">
                        <button id="submit" type="submit" class="btn btn-primary">Save</button>
                    </div>`;
      form.innerHTML = inputs;
      // Get the select element
      var roleSelect = document.getElementById("roleSelect");

      // Get the options of the select element
      var options = roleSelect.options;

      // Loop through the options and do something with each one
      // for (var i = 0; i < options.length; i++) {
      //   if (result.role == options[i].value) {
      //     options[i].selected = true;
      //   }
      // }

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log(data);

        fetch(`http://localhost/meowpaws/backend/Admins/UpdateItem/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(data)
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.message == "Product Updated") {
              location.replace(`${URLROOT}admin/Items`);
            } else {
              location.replace(`${URLROOT}admin/Items`);
            }
          });
      });
    });
}
