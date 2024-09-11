
let inputFields = document.querySelectorAll('.step');
let currentField = 0;
const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');
const allInputs = document.querySelectorAll('input');



function cureentFieldValidation(){
    const current = inputFields[currentField];
    const currentInputs = current.querySelectorAll('input, select');

    return Array.from(currentInputs).every(input =>{
      if(input.type === 'text' || input.type === 'password' || input.type === 'email'){
        return input.value.trim() !== '';
      }
      else if(input.type === 'select-one'){
        return input.value !== 'NA';
      }


    })

    return true;
}


nextBtn.forEach(next =>{
    
   
        next.addEventListener('click', ()=>{
            if(cureentFieldValidation()){
            inputFields[currentField].classList.remove('active');
            currentField++;
            inputFields[currentField].classList.add('active');
        }
            else{
                alert('Please Fill all inputs then click next')
            }
        })
    
   
})


prevBtn.forEach(prev =>{
    prev.addEventListener('click', ()=>{
        inputFields[currentField].classList.remove('active');
        currentField--;
        inputFields[currentField].classList.add('active')
    })
})





document.addEventListener('DOMContentLoaded', ()=>{

  const registerBtn = document.querySelector('.registerBtn');


  registerBtn.addEventListener('click',(event) =>{
    event.preventDefault();

    const userName = document.querySelector('#userName').value;
    const userEmail = document.querySelector('#userEmail').value;
    const gender = document.querySelector('#gender').value;
    const userEducation = document.querySelector('#userEducation').value;
    const userCountry = document.querySelector('#userCountry').value;
    const userInterest = document.querySelector('#userInterest').value;
    const userSkills = document.querySelector('#userSkills').value;
  
    localStorage.setItem('Name',userName)
    localStorage.setItem('Email',userEmail)
    localStorage.setItem('Gender',gender)
    localStorage.setItem('Education',userEducation)
    localStorage.setItem('Country',userCountry)
    localStorage.setItem('Interest',userInterest)
    localStorage.setItem('Skills',userSkills)
  
  
    window.location.href = '../HTML/user.html';

    
  })


})

