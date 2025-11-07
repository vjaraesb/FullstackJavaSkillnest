function like(button){
    let count = button.parentElement.querySelector("span").innerText.split(" ")[0];
    
    count ++;
    button.parentElement.querySelector("span").innerText = count + " likes";
}