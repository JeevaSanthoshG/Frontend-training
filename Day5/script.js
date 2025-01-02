document.getElementById("member-login").addEventListener("click", function () {
  toggleSidebar();
});

function toggleSidebar() {
  var sidebar = document.getElementsByClassName("sidebar");  
    sidebar.style.display = "block";
}