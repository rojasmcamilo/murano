const firebaseConfig = {
    apiKey: "AIzaSyAvben2u0LJCYe0U-U1EU5jODMqnD75UMc",
    authDomain: "test-2-29ed7.firebaseapp.com",
    projectId: "test-2-29ed7",
    storageBucket: "test-2-29ed7.appspot.com",
    messagingSenderId: "272714521766",
    appId: "1:272714521766:web:adf2b482df36e479246867"
  };













let contactInfo = firebase.database().ref("infos");

document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;

    saveContactInfo(name, email, phone, message)
}

//Save infos to Firebase
function saveContactInfo(name, email, phone, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name ,
        email: email,
        phone: phone,
        message: message
    })

}