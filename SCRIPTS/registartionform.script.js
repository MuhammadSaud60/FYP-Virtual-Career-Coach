
let inputFields = document.querySelectorAll('.step');
let cureentField = 0;
const nextBtn = document.querySelectorAll('.next');
const prevBtn = document.querySelectorAll('.prev');
const allInputs = document.querySelectorAll('input');



function showStep(stepIndex){
    inputFields.forEach((step, index) =>{
        if(index === stepIndex){
            step.classList.add('active');
        }
        else{
            step.classList.remove('active')
        }
    });
    checkInput();
}


nextBtn.forEach(next =>{
    next.addEventListener('click', ()=>{
        if(cureentField < inputFields.length - 1){
        cureentField ++;
        showStep(cureentField)
     }
    })
})

prevBtn.forEach(prev =>{
    prev.addEventListener('click', ()=>{
        if(cureentField > 0){
        cureentField--;
        showStep(cureentField)
        }
    })
})

showStep(cureentField);