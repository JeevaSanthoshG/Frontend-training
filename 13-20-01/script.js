const data = [
  {
    name: "Jeeva",
    age: 21,
    phone: "8778121406",
    gender: "Others",
    subject: ["Tamil", "English", "Maths", "Science", "Social"],
    dob: "2004-02-17",
    location: "Chennai",
  },
];

const viewTable = document.querySelector("#viewTable tbody");
const createForm = document.getElementById("create-form");
const updateForm = document.getElementById("update-form");

const toggleCreateForm = () => {
  document.getElementById("userForm").reset();
  createForm.classList.toggle("active");
};

const toggleUpdateForm = () => {
  updateForm.classList.toggle("active");
};

const renderTable = () => {
  viewTable.innerHTML = "";
  data.forEach((e, idx) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${e.name}</td>
            <td>${e.age}</td>
            <td>${e.phone}</td>
            <td>${e.gender}</td>
            <td>${e.subject.join(", ")}</td>
            <td>${e.dob}</td>
            <td>${e.location}</td>
            <td><button class="btn btn-info" id="edit-btn" onclick="edit(${idx})">Edit</button><button class="btn btn-danger" onclick="del(${idx})">Delete</button></td>
        `;
    viewTable.appendChild(row);
  });
};

document.getElementById("userForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());
  const selectedSubjects = [];

  document
    .querySelectorAll('input[name="subject"]:checked')
    .forEach((checkbox) => {
      selectedSubjects.push(checkbox.value);
    });

  formValues.subject = selectedSubjects;

  data.push(formValues);
  renderTable();
  toggleCreateForm();
});

const edit = (idx) => {
  toggleUpdateForm();
  const user = data[idx];
  document.getElementById("uname").value = user.name;
  document.getElementById("uage").value = user.age;
  document.getElementById("uphone").value = user.phone;
  document.getElementById(`u${user.gender.toLowerCase()}`).checked = true;
  document.getElementById("udob").value = user.dob;
  document.getElementById("ulocation").value = user.location;

  document.querySelectorAll(".usubject").forEach((e) => {
    if (user.subject.includes(e.value)) {
      e.checked = true;
    } else {
      e.checked = false;
    }
  });

  const updateForm = document.getElementById("updateForm");
  const newUpdateForm = updateForm.cloneNode(true);
  updateForm.parentNode.replaceChild(newUpdateForm, updateForm);

  newUpdateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    user.name = document.getElementById("uname").value;
    user.age = document.getElementById("uage").value;
    user.phone = document.getElementById("uphone").value;
    user.gender = document.querySelector('input[name="gender"]:checked').value;
    user.dob = document.getElementById("udob").value;
    user.location = (document.getElementById("ulocation").value) ? document.getElementById("ulocation").value : user.location;
    user.subject = [];
    document.querySelectorAll(".usubject:checked").forEach((e) => {
      user.subject.push(e.value);
    });
    data[idx] = user;
    renderTable();
    toggleUpdateForm();
  });
};

const del = (idx) => {
  data.splice(idx, 1);
  renderTable();
};

renderTable();
