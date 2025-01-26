const data = [
  {
    name: "Dance",
    date: "2025-01-30",
    status: "Upcoming",
  },
  {
    name: "Dance",
    date: "2025-01-30",
    status: "Past",
  },
];


const create = document.getElementById("create")
const update = document.getElementById("update")
const home = document.getElementById("home")

// Toggle
const toggleCreate = () => {
  create.classList.toggle("active")
}

const toggleUpdate = () => {
  update.classList.toggle("active");
};

const toggleHome = () => {
  home.classList.toggle("active");
};

// State

document.getElementById("create-btn").addEventListener("click", () => {
  document.getElementById("create-form").reset()
  toggleHome();
  toggleCreate();
})

// Create

document.getElementById("create-form").addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let date = document.getElementById("date").value;
  const today = new Date().toISOString().split("T")[0];
  let status = (date < today) ? "Past" : "Upcoming";
  data.push({
    name: name,
    date: date,
    status: status,
  });
  renderTable();
  toggleHome();
  toggleCreate();
})

// View table
const fiter = document.getElementById("filter")
const listBody = document.getElementById("list-body")

filter.addEventListener("input", () => {
  if (filter.value == "Upcoming") {
    listBody.innerHTML = ""
    data.map((e, i) => {
      if (e.status == "Upcoming") {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${e.name}</td>
                          <td>${e.date}</td>
                          <td style>${e.status}</td>
                          <td>
                            <button class="btn btn-warning" onclick="edit(${i})">Edit</button>
                            <button class="btn btn-danger" onclick="del(${i})">Delete</button>
                          </td>`
        listBody.append(newRow);
      }
    })
  } else if (filter.value == "Past") {
    listBody.innerHTML = "";
    data.map((e, i) => {
      if (e.status == "Past") {
        const newRow = document.createElement("tr");
        newRow.innerHTML = `<td>${e.name}</td>
                          <td>${e.date}</td>
                          <td>${e.status}</td>
                          <td>
                            <button class="btn btn-warning" onclick="edit(${i})">Edit</button>
                            <button class="btn btn-danger" onclick="del(${i})">Delete</button>
                          </td>`;
        listBody.append(newRow);
      }
    });
  } else if (filter.value == "Show All") {
    listBody.innerHTML = "";
    data.map((e, i) => {
      const newRow = document.createElement("tr");
      newRow.innerHTML = `<td>${e.name}</td>
                          <td>${e.date}</td>
                          <td>${e.status}</td>
                          <td>
                            <button class="btn btn-warning" onclick="edit(${i})">Edit</button>
                            <button class="btn btn-danger" onclick="del(${i})">Delete</button>
                          </td>`;
      listBody.append(newRow);
    });
  }
});

// Edit

let editIdx;
const edit = (idx) => {
  editIdx = idx;
  toggleHome()
  toggleUpdate()
  document.getElementById("uname").value = data[idx].name;
  document.getElementById("udate").value = data[idx].date;  
}

document.getElementById("update-form").addEventListener("submit", (e) => {
  e.preventDefault()
  data[editIdx].name = document.getElementById("uname").value;
  data[editIdx].date = document.getElementById("udate").value;
  const today = new Date().toISOString().split("T")[0];
  data[editIdx].status = data[editIdx].date < today ? "Past" : "Upcoming";
  renderTable();
  toggleHome();
  toggleUpdate();
})

// Delete

const del = (idx) => {
  data.splice(idx, 1);
  renderTable()
}

const renderTable = () => {
  listBody.innerHTML = "";
  data.map((e, i) => {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${e.name}</td>
                          <td>${e.date}</td>
                          <td>${e.status}</td>
                          <td>
                            <button class="btn btn-warning" onclick="edit(${i})">Edit</button>
                            <button class="btn btn-danger" onclick="del(${i})">Delete</button>
                          </td>`;
    listBody.append(newRow);
  });
}


toggleHome()
renderTable()