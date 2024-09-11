


function userData(){
    const user = document.querySelector('.personal');
    const educationInfo = document.querySelector('.education');
    const interest = document.querySelector('.interest');
    const skill = document.querySelector('.skills');


   const name =  localStorage.getItem('Name');
   const email =  localStorage.getItem('Email');
   const gender =  localStorage.getItem('Gender');
   const education =  localStorage.getItem('Education');
   const country =  localStorage.getItem('Country');
   const interests =  localStorage.getItem('Interest');
   const skills =  localStorage.getItem('Skills');

    //for name, email, country and gender    
   const userNameEmail = document.createElement('div');
   userNameEmail.classList.add('user');

    //name 
   const userName = document.createElement('h2');
    userName.textContent = name;

    // email
    const userEmail = document.createElement('p');
    userEmail.textContent = email;

    // append name and email in userNameEmail div
    userNameEmail.appendChild(userName);
    userNameEmail.appendChild(userEmail);

    // gender and country
    const userCountry = document.createElement('i');
    userCountry.textContent = 'from ' + country;

    const userGender = document.createElement('i'); 
    userGender.textContent = gender;

    // appending name, email country, gender in user div
    user.appendChild(userNameEmail);
    user.appendChild(userCountry);
    user.appendChild(userGender);
    
    // education
    const userEducation = document.createElement('p');
    userEducation.textContent = education;
    educationInfo.appendChild(userEducation);
   
    
    // interest
    const userInterest = document.createElement('p');
    userInterest.textContent = interests;
    interest.appendChild(userInterest);


    // skills
    const userSkill = document.createElement('ul');

    const skillArray = skills.split(',');

    skillArray.forEach(skill =>{
        const skillList = document.createElement('li');
        skillList.textContent = skill.trim();
        userSkill.appendChild(skillList);
    })
    
    
    
    

    skill.appendChild(userSkill);
}



window.onload = () =>{
    userData();
}