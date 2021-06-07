const checkbox = document.getElementById('light-dark-mode');

checkbox.addEventListener("click", function() {
    checkbox.checked ? darkMode() : lightMode();
});

function darkMode() {
    document.body.classList.add("darkMode");
}

function lightMode() {
    document.body.classList.remove("darkMode"); 
}
  