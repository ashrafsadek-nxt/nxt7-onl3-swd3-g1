const daySelect = document.querySelector('#day');
const monthSelect = document.querySelector('#month');
const yearSelect = document.querySelector('#year');
const submitBtn = document.querySelector('button[type="submit"]');
// variables used in validation
let monthDays = {
    'jan' : Array.from({ length: 31 }, (_, i) => i + 1),
    'feb' : Array.from({ length: 29 }, (_, i) => i + 1),
    'mar' : Array.from({ length: 31 }, (_, i) => i + 1),
    'apr' : Array.from({ length: 30 }, (_, i) => i + 1),
    'may' : Array.from({ length: 31 }, (_, i) => i + 1),
    'jun' : Array.from({ length: 30 }, (_, i) => i + 1),
    'jul' : Array.from({ length: 31 }, (_, i) => i + 1),
    'aug' : Array.from({ length: 31 }, (_, i) => i + 1),
    'sep' : Array.from({ length: 30 }, (_, i) => i + 1),
    'oct' : Array.from({ length: 31 }, (_, i) => i + 1),
    'nov' : Array.from({ length: 30 }, (_, i) => i + 1),
    'dec' : Array.from({ length: 31 }, (_, i) => i + 1)
}
let today = new Date();

// filling in day, month, year options in the dropdowns
creatOptions(Array.from({ length: 121 }, (_, i) => -(i - today.getFullYear())), yearSelect);
creatOptions(Object.keys(monthDays), monthSelect);
creatOptions(Array.from({ length: 31 }, (_, i) => i + 1), daySelect);
// if input is left empty, change border color to highlight
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', checkEmpty);
});
// if input in focus, reset border color
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', (e)=>{
        input.style.border = 'px solid #ccc';
    });
});
// handel the radio box clicking to check the input
document.querySelectorAll('.radio-box').forEach(radio=>{
    radio.addEventListener('click',(e)=>{
        let options = Array.from(e.target.parentNode.children);
        options.forEach(option=>option.querySelector('input').removeAttribute('checked'));
        e.target.querySelector('input').setAttribute('checked', 'checked');
    },);
});
// set helping buttons to show their message
document.querySelectorAll('.form-field-title a').forEach(helpBtn=>{
    helpBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        let msg = '';
        if (e.target.parentNode.children[0].innerText.includes('birth')) {
            msg = 'Providing your birthday helps make sure that you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile.';
        } else {
            msg = 'You can change who sees your gender on your profile later.';
        }
        msgBox(msg, 'grey','white');
    });
});
// validate before submitting
submitBtn.addEventListener('click', validate);

function creatOptions(options, parent) {
    for (let i = 0; i < options.length; i++) {
        let option = document.createElement('option');
        option.value = options[i];
        option.appendChild(document.createTextNode(options[i]));
        parent.appendChild(option);
    }
    setDefault(parent);
}

function setDefault(element) {
    // set default value of the given element to today's value
    let options = Array.from(element.children);
    options.forEach(option => {
        if (element.id == 'year' && option.value == today.getFullYear()) {
            option.setAttribute('selected', 'selected');
        } else if (element.id == 'month' && option.value == Object.keys(monthDays)[today.getMonth()]) {
            option.setAttribute('selected', 'selected');
        } else if (element.id == 'day' && option.value == today.getDate()) {
            option.setAttribute('selected', 'selected');
        }
    });
}

function checkEmpty(event) {
    // if given input element is empty change border color 
    if(!event.target.value.trim()){
        event.target.style.borderColor = 'red';
    } else {
        event.target.style.borderColor = '#ccc';
    }
}

function validate(event) {
    event.preventDefault();
    let emailPhone = document.querySelector('#email');
    // check if day is out of boundaries for the chosen month
    if (!monthDays[monthSelect.value].includes(parseInt(daySelect.value)) || yearSelect.value > (today.getFullYear() - 14)) {
        msgBox('please enter your real date of birth! ensure day value is correct, you must be at least 14 years old','orange', 'white');
        return;
    }
    // check if any input is ledt empty
    let empty = 0;
    document.querySelectorAll('input').forEach(input=>{
        if(!input.value.trim()){
            empty++;
        }
    });
    if(!document.querySelector('.radio-box input:checked')){
        empty++;
    }
    if(empty){
        msgBox('please type all the required data', 'orange', 'white');
        return;
    }
    // validate email or mobile number
    if(!(emailPhone.value.trim().match(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/g) || emailPhone.value.trim().match(/^(\+\d{1,3})?\d{10}$/g))){
        console.log(emailPhone.value.trim());
        msgBox('pleas type a correct email "email@example.com" or mobile number','orange','white');
        return;
    }
    // if no error show success message and submit
    msgBox('creating account...','green','white');
    setTimeout(() => {
        event.target.parentNode.submit();
    }, 3000);
}

function msgBox(message, background, textColor) {
    // create a div with message paragraph and closing button
    let box = document.createElement('div');
    let msg = document.createElement('p');
    let close = document.createElement('button');
    close.appendChild(document.createTextNode('X'));
    msg.appendChild(document.createTextNode(message));
    box.appendChild(close);
    box.appendChild(msg);
    // styling message box
    box.style.border = '1px solid black';
    box.style.padding = '5vh 2vh';
    box.style.position = 'absolute';
    box.style.top = '10%';
    box.style.left = '30%';
    box.style.width = '30%';
    box.style.backgroundColor = background;
    box.style.boxShadow = '0 0 500px 50px';
    msg.style.textAlign = 'center';
    msg.style.fontWeight = 'bold';
    msg.style.color = textColor;
    close.style.backgroundColor = 'red';
    close.style.color = 'white';
    close.style.cursor = 'pointer';
    // adding message box to the body
    document.body.appendChild(box);
    // ading closing functionality to the button
    close.addEventListener('click', (e)=>document.body.removeChild(box));
}