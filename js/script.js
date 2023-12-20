let body = document.querySelector(".body");

let button = document.querySelector(".button");

let text = document.querySelector(".text");

button.addEventListener("click", () => {
   body.classList.toggle("gray")
   if(body.classList.contains("gray")){
      text.innerText= "jasny";
   } else {
      text.innerText= "ciemny";
   }
});

