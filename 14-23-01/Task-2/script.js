const data = [
  {
    name : "EON",
    price :  120
  },
  {
    name : "Ghost",
    price : 500
  },
];

// Login

const login = document.getElementById("login")

const toggleLogin = () => {
    login.classList.toggle("active")
}

document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    toggleLogin();
    if(document.getElementById("user-type").value == "Admin") {
        toggleHome();
    } else if(document.getElementById("user-type").value == "User") {
        toggleUserHome();
    }
})



// Admin

const create = document.getElementById("create");
const update = document.getElementById("update");
const home = document.getElementById("home");
const userHome = document.getElementById("user-home");
const bookNow = document.getElementById("book-now")

// Toggle
const toggleCreate = () => {
  create.classList.toggle("active");
};

const toggleUpdate = () => {
  update.classList.toggle("active");
};

const toggleHome = () => {
  home.classList.toggle("active");
};

const toggleUserHome = () => {
  userHome.classList.toggle("active")
}

const toggleBookNow = () => {
  bookNow.classList.toggle("active");
}
// State

document.getElementById("create-btn").addEventListener("click", () => {
  document.getElementById("create-form").reset();
  toggleHome();
  toggleCreate();
});

document.getElementById("logout-btn").addEventListener("click", () => {
    toggleHome();
    toggleLogin();
})

document.getElementById("user-logout-btn").addEventListener("click", () => {
  toggleUserHome();
  toggleLogin();
});

// Create

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  data.push({
    name: name,
    price: price,
  });
  renderTable();
  toggleHome();
  toggleCreate();
  renderUserTable();
});

// Edit

let editIdx;
const edit = (idx) => {
  editIdx = idx;
  toggleHome();
  toggleUpdate();
  renderUserTable
  document.getElementById("uname").value = data[idx].name;
  document.getElementById("uprice").value = data[idx].price;
};

document.getElementById("update-form").addEventListener("submit", (e) => {
  e.preventDefault();
  data[editIdx].name = document.getElementById("uname").value;
  data[editIdx].price = document.getElementById("uprice").value;
  renderTable();
  toggleHome();
  toggleUpdate();
  renderUserTable();
});

// Delete

const del = (idx) => {
  data.splice(idx, 1);
  renderTable();
  renderUserTable();
};


// Render Table
const listBody = document.getElementById("list-body");
const renderTable = () => {
  listBody.innerHTML = "";
  data.map((e, i) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${e.name}</td>
                          <td>${e.price}</td>
                          <td>
                            <button class="btn btn-warning" onclick="edit(${i})">Edit</button>
                            <button class="btn btn-danger" onclick="del(${i})">Delete</button>
                          </td>`;
    listBody.append(newRow);
  });
};

const userListBody = document.getElementById("user-list-body");
const renderUserTable = () => {
  userListBody.innerHTML = "";
  data.map((e, i) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${e.name}</td>
                          <td>${e.price}</td>
                          <td>
                            <button class="btn btn-primary" onclick="bookNowForm(${i})">Book now</button>
                          </td>`;
    userListBody.append(newRow);
  });
}

const bookNowForm = (idx) => {
  toggleUserHome();
  toggleBookNow();
  document.getElementById("bname").value = data[idx].name;
  document.getElementById("bprice").value = data[idx].price;  
}

document.getElementById("book-now-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let startDate = new Date(document.getElementById("start-date").value);
  let endDate = new Date(document.getElementById("end-date").value);
  if (startDate < endDate) {
    let timeDifference = endDate.getTime() - startDate.getTime();
    let daysDifference = timeDifference / (1000 * 3600 * 24);
    alert(`The amount : ${daysDifference * document.getElementById("bprice").value}`)
    toggleBookNow();
    toggleUserHome();
  } else {
    alert("End date should be greater than start date.");
  }

})

renderUserTable();
renderTable();
toggleLogin();

