const questions = document.querySelectorAll(".questions__item")

questions.forEach(question => {
    question.onclick = function() {
        this.classList.toggle("active")
    }
})