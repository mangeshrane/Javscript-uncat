
let signup = document.querySelector("#signup-link");
let signupDiv = document.getElementById("signup-container");
let activeColorTab = "#1ab188";
let inactiveColorTab = "#13232f";
let signinLink = document.querySelector("#signin-link");
signupDiv.style.display = "none";

signup.addEventListener("click", () => {
    let signin = document.querySelector("#signin-container");
    signin.style.display = "none";
    signupDiv.style.display = "block";
    signup.parentElement.style.backgroundColor = activeColorTab;
    let signinLink = document.querySelector("#signin-link");
    signinLink.style.backgroundColor = inactiveColorTab;
});

signinLink.addEventListener("click", ()=>{
    let signin = document.querySelector("#signin-container");
    signin.style.display = "block";
    signupDiv.style.display = "none";
    signup.parentElement.style.backgroundColor = inactiveColorTab;
    let signinLink = document.querySelector("#signin-link");
    signinLink.style.backgroundColor = activeColorTab;
})