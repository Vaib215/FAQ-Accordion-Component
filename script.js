let ques = document.querySelectorAll("details");

const addBold = (e) => {
    for (let i = 0; i < ques.length; i++) {

        if(e && e.target !== ques[i].children[0].children[0]) {
            // ques[i].setAttribute("open", null);
            ques[i].removeAttribute("open");
            ques[i].children[0].classList.remove("bold");
            ques[i].children[0].children[1].classList.remove("rotated");
        } else{
            ques[i].children[0].classList.add("bold");
            ques[i].children[0].children[1].classList.add("rotated");
        }
    }
}

ques.forEach(question => {
    question.addEventListener("click", addBold);
} 
);