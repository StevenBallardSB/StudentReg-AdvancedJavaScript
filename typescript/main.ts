/**
 * Represents a CPTC Student
 */
class Student{

    firstName:string;
    lastName:string;
    dateOfBirth:Date;
}

//test code
//Create a new instance, creating an object, instantiating an object
let testStu:Student = new Student();
testStu.firstName = "Joe";
testStu.lastName = "Ortiz";
testStu.dateOfBirth = new Date(1980, 3, 1);//March 1st 1980

window.onload = function(){
    let regBtn = <HTMLButtonElement>document.querySelector("main > button");
    regBtn.onclick = registerStudent;
}

function registerStudent(){
    if(isValid()){
        let nextStudent:Student = getStudent();
        displayStudent(nextStudent);
    }
}

function isValid(){
    //validate all required elements
    let reqElems = document.querySelectorAll("main > input[data-required]");

    let valid = true;

for (let i = 0; i < reqElems.length; i++) {
    let currInput = <HTMLInputElement>reqElems[i]
    if(currInput.value == ""){
        //disp error
        let span = currInput.nextElementSibling;
        let msg = span.getAttribute("data-msg");
        span.innerHTML = msg;
        valid = false;
    }
    return valid;
}
    //foreach element
        //check if input is empty
        //if true, display err in span and set boolean flag
}
/**
 * Gets user input from the user
 */
function getStudent():Student{
    let s = new Student();
    s.firstName = (<HTMLInputElement>document.getElementById("first-name")).value;
    s.lastName = (<HTMLInputElement>document.getElementById("last-name")).value;
    //TODO: get date of birth
    return s;
}

function displayStudent(stu:Student){
    let studentLI:HTMLLIElement = document.createElement("li");
    studentLI.innerText = stu.firstName + " " + stu.lastName;

    studentLI.onclick = function() {
        let StudentName = <HTMLElement>this;
        let agree = confirm("Are you sure you want to delete " + StudentName.innerHTML);
        if(agree){
            let currItem= <HTMLLIElement>this;
            currItem.remove();
        }
    }

    //getting <ul> and appending the new <li>
    let list = document.querySelector("#roster > ul");
    list.appendChild(studentLI);
}