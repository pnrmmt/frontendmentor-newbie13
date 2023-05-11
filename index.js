const error = document.querySelector(".error");
const input= document.getElementById("input");
const please = document.querySelector(".please")

document.getElementById("button").addEventListener("click", function (){
    const inputValue = input.value.trim()
    console.log(inputValue)

    if(!isEmail(inputValue)){
        error.style.display="block";
        please.style.display="block";
        input.style.border="2px solid hsl(0, 93%, 68%)"
    }else{
        error.style.display="none";
        please.style.display="none";
        input.style.border="1px solid hsl(0, 36%, 70%)"
    }
})

function isEmail(input){
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(input)
}