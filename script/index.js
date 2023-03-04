const checkBox = document.querySelector("#checkbox-menu");
const navBar = document.querySelector("#navBar");

checkBox.addEventListener("change", function(){
  console.log('teste')
  if(this.checked){
    navBar.classList.add('nav-mobilie')
  }
  else{
    navBar.classList.remove('nav-mobilie')
  }
})