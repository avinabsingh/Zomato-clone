let btn1 = document.querySelector(".bj1");
let btn2 = document.querySelector(".bj2");
let body = document.querySelector("body");
let main = document.querySelector(".Main");
let lchild = document.querySelector(".loginchild");
let except1 = document.querySelector(".excep1");
let endpart = document.querySelector(".end-part");
let footer = document.querySelector(".footer");
let back = document.querySelector(".back");
let loginchild = document.querySelector(".loginchild");
let signupchild = document.querySelector(".signupchild");
let loginclose = document.querySelector(".loginclose");
let signclose = document.querySelector(".signclose");
let otp = document.querySelector(".otp21");
let otp2 = document.querySelector(".otp201");
// login button
btn1.addEventListener("click",() =>{
    console.log("button was clicked");
    body.style.backgroundColor="Black";
    main.style.opacity = 0.05;
    back.style.opacity = 0.05;
    except1.style.opacity = 0.0;
    endpart.style.opacity = 0.0;
    footer.style.opacity = 0.2;
    loginchild.style.opacity=1;
    signupchild.style.opacity=0;
    otp.classList.add("bl1");
    main.style.backgroundColor = "Black";
    except1.style.backgroundColor = "Black";
    endpart.style.backgroundColor = "Black";
    footer.style.backgroundColor =  "Black";
    lchild.classList.add("loginjs");

})
loginclose.addEventListener("click",() =>{
    console.log("button was clicked");
    body.style.backgroundColor="White";
    main.style.opacity = 1;
    except1.style.opacity = 1;
    endpart.style.opacity = 1;
    footer.style.opacity = 1;
    back.style.opacity = 1;
    loginchild.style.zIndex=0;
    signupchild.style.zIndex=0;
    loginchild.style.opacity=0;
    signupchild.style.opacity=0;
    otp.classList.remove("bl1");
    main.style.backgroundColor = "White";
    except1.style.backgroundColor = "#F8F8F8";
    endpart.style.backgroundColor = "#FCFCFC";
    footer.style.backgroundColor =  "#F8F8F8";
    lchild.classList.remove("loginjs");
    
})
// sign up button
btn2.addEventListener("click",() =>{
    console.log("button was clicked");
    body.style.backgroundColor="Black";
    main.style.opacity = 0.05;
    except1.style.opacity = 0.0;
    endpart.style.opacity = 0.0;
    back.style.opacity = 0.05;
    footer.style.opacity = 0.2;
    signupchild.style.opacity=1;
    loginchild.style.opacity=0;
    otp2.classList.add("bs1");
    main.style.backgroundColor = "Black";
    except1.style.backgroundColor = "Black";
    endpart.style.backgroundColor = "Black";
    footer.style.backgroundColor =  "Black";
    signupchild.classList.add("signupjs");
})
signclose.addEventListener("click",() =>{
    body.style.backgroundColor="White";
    console.log("button was clicked");
    main.style.opacity = 1;
    except1.style.opacity = 1;
    endpart.style.opacity = 1;
    footer.style.opacity = 1;
    back.style.opacity = 1;
    loginchild.style.zIndex=0;
    signupchild.style.zIndex=0;
    signupchild.style.opacity=0;
    loginchild.style.opacity=0;
    otp2.classList.remove("bs1");
    main.style.backgroundColor = "White";
    except1.style.backgroundColor = "#F8F8F8";
    endpart.style.backgroundColor = "#FCFCFC";
    footer.style.backgroundColor =  "#F8F8F8";
    signupchild.classList.remove("signupjs");})
