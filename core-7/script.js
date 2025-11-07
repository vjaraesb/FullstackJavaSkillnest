function like(button) {
    let count = parseInt(button.textContent.split(" ")[0]);
    count ++;
    button.textContent = count + " me gusta";

    let name = button.parentElement.querySelector('h2').textContent;
    alert(name +  " was liked!");
}

function login(button) {
    if (button.textContent === "Iniciar sesión") {
        button.textContent = "Cerrar sesión";
    } else {
        button.textContent = "Iniciar sesión";
    }
}
function add(button){
    button.remove();
}