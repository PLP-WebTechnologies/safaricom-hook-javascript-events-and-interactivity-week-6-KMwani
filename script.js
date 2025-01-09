const togglebtn = document.getElementById('togglebtn');
const body = document.body;

togglebtn.addEventListener('click', () => {
    if(body.style.backgroundColor === "white")
    {
         body.style.backgroundColor = "black";
        body.style.color = "white"
     
    }
    else
    {
        body.style.backgroundColor = "white";
        body.style.color = "black"
    }
});

const fontslider = document.getElementById("fontslider");
const increased = document.getElementById("increased");

fontslider.oninput = function () {
    increased.style.fontSize = `${fontslider.value}px`;
}


let openbtn = document.getElementById("openbtn");
let closebtn = document.getElementById("closebtn");
let modal = document.getElementById("modal");

openbtn.onclick = function (){
    modal.style.display = "block";
}

closebtn.onclick = function (){
    modal.style.display = "none";
}


document.getElementById('assignform').addEventListener('submit', function (event) {
    let isValid = true;

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    nameError.style.display = 'none';
    emailError.style.display = 'none';
    passwordError.style.display = 'none';

    if (name.length < 3) {
        nameError.style.display = 'block';
        isValid = false;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailError.style.display = 'block';
        isValid = false;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        passwordError.style.display = 'block';
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});

function showCustomMessage() {
    const message = document.getElementById('message');
    const selectedOption = document.getElementById('customMessage').value;

    if (selectedOption === 'option1') {
        message.textContent = 'Option 1';
    } else if (selectedOption === 'option2') {
        message.textContent = 'Option 2';
    } else if (selectedOption === 'option3') {
        message.textContent = 'Option 3';
    } else {
        message.textContent = '';
    }
}