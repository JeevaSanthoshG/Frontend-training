document.getElementById("member-login").addEventListener("click", function () {
  toggleSidebar();
});

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");  
    sidebar.style.display = "block";
}