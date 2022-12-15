const number=document.querySelector(".card-number").oninput=()=> {
    document.querySelector(".pin-holder").innerHTML=document.querySelector(".card-number").value;
}

const holder=document.querySelector(".card-holder").oninput=()=> {
    document.querySelector(".name").innerHTML=document.querySelector(".card-holder").value;
}

const expire=document.querySelector(".month-year").oninput=()=> {
    document.querySelector(".mm").innerHTML=document.querySelector(".month-year").value;
}

const cvv=document.querySelector(".cvv").oninput=()=> {
    document.querySelector(".strip").innerHTML=document.querySelector(".cvv").value;
}