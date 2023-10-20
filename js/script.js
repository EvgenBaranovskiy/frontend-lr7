document.addEventListener("DOMContentLoaded", () => {
    document.body.innerHTML += "<div id='main-box'></div>"
    //контейнер для шару та запитання (input)
    let mainBox = document.getElementById("main-box");
    mainBox.innerHTML += "<div id='question-box'></div>";
    mainBox.innerHTML += "<div id='ball-box'></div>";
    //Контейнер для input
    let questionBox = document.getElementById("question-box");
    questionBox.innerHTML += "<input type='text' id='question-input'>";
    //input для вводу запитання
    let questionInput = document.getElementById("question-input");
    questionInput.value = "Чи буде завтра тепло?";
    //Контейнер для шару
    let ballBox = document.getElementById("ball-box");
    ballBox.innerHTML += "<a href='#'><img id='ball'  alt='The magic ball' src = './img/ball.png'></a>";
    ballBox.innerHTML += "<div id='answer'></div>";
    //Шар
    let ball = document.getElementById("ball");
    //Відповідь
    let answer = document.getElementById("answer");
    //Задання css стилів
    //*
    document.querySelector('*').style.cssText += "box-sizing: border-box;";
    //html
    document.querySelector('html').style.height = "100%";
    document.querySelector('html').style.width = "100%";
    document.querySelector('html').style.fontFamily = "'Comic Sans MS', 'Comic Sans', cursive;";
    //body
    document.body.style.height = "100%";
    document.body.style.width = "100%";
    document.body.style.minHeight = "400px";
    document.body.style.margin = 0;
    document.body.style.padding = 0;
    document.body.style.backgroundColor = "black";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    //#main-box
    mainBox.style.width = "50%";
    mainBox.style.height = "90%";
    mainBox.style.border = "2px solid";
    mainBox.style.cssText += "border-image-source: linear-gradient(45deg,  #00def8, #a1ff00);";
    mainBox.style.cssText += "box-shadow: -7px 5px 20px #00def8, 7px -5px 20px #a1ff00;";
    mainBox.style.borderImageSlice = 1;
    //#question-box
    questionBox.style.width = "100%";
    questionBox.style.height = "15%";
    questionBox.style.display = "flex";
    questionBox.style.justifyContent = "center";
    questionBox.style.alignItems = "flex-end";
    questionBox.style.zIndex = "flex-end";
    //#question-input
    questionInput.style.width = "80%";
    questionInput.style.height = "60%";
    questionInput.style.borderRadius = "50px";
    questionInput.style.border = "0px";
    questionInput.style.fontSize = "30px";
    questionInput.style.textAlign = "center";
    questionInput.style.backgroundColor = "#eeddff";
    //#ball-box
    ballBox.style.width = "550px";
    ballBox.style.height = "550px";
    ballBox.style.display = "flex";
    ballBox.style.justifyContent = "center";
    ballBox.style.alignItems = "center";
    ballBox.style.position = "relative";
    ballBox.style.textAlign = "center";
    ballBox.style.color = "white";
    //#ball
    ball.style.width = "100%";
    ball.style.height = "100%";
    ball.style.filter = "drop-shadow(-7px 5px 8px #37114a) drop-shadow(7px 5px 8px #37114a)";
    //#answer
    answer.style.position = "absolute";
    answer.style.top = "50%";
    answer.style.left = "50%";
    answer.style.transform = "translate(-50%, -50%)";
    answer.style.fontSize = "80px";
    answer.style.filter = "drop-shadow(3px 3px 7px black) drop-shadow(-3px -3px 7px black) drop-shadow(3px -3px 7px black) ";
    //Адаптувати сторінку
    adaptiveResize();

    //Події взаємодії з шаром
    ball.addEventListener("mouseleave", (event) => {
        ball.style.filter = "drop-shadow(-7px 5px 8px #37114a) drop-shadow(7px 5px 8px #37114a)";
    });

    ball.addEventListener("mouseover", (event) => {
        ball.style.filter = "drop-shadow(-7px 5px 8px #00def8) drop-shadow(7px -5px 8px #a1ff00)";
    });

    ball.addEventListener("click", (event) => {
        //Валідація
        var question = questionInput.value.replace(' ', '');
        if (question == "" || question.charAt(question.length - 1) != '?') {
            alert('Ви маєте ввести питання!');
            answer.innerText = "";
            return;
        }

        //Генератор відповіді
        var randomValue = Math.random();
        if (randomValue >= 0.5) {
            answer.innerText = "Yes!";
        }
        else {
            answer.innerText = "No!";
        }
    });

    //Подія зміни розміру вікна
    addEventListener("resize", (event) => {
        adaptiveResize();
    });

    //Функія для адаптивності
    function adaptiveResize() {
        var mainBoxWidth = mainBox.getBoundingClientRect().width;
        var mainBoxHeight = mainBox.getBoundingClientRect().height;

        //Масштубування шрифту
        if (mainBoxWidth <= 1000) {
            questionInput.style.fontSize = "60px";
            answer.style.fontSize = "120px";
            mainBox.style.width = "50%";
            mainBox.style.height = "90%";
        }
        if (mainBoxWidth <= 800) {
            questionInput.style.fontSize = "40px";
            answer.style.fontSize = "90px";
            mainBox.style.width = "50%";
            mainBox.style.height = "90%";
        }
        if (mainBoxWidth <= 650) {
            questionInput.style.fontSize = "30px";
            answer.style.fontSize = "80px";
            mainBox.style.width = "50%";
            mainBox.style.height = "80%";
        }
        if (mainBoxWidth <= 600) {
            questionInput.style.fontSize = "24px";
            answer.style.fontSize = "70px";
            mainBox.style.width = "50%";
            mainBox.style.height = "70%";
        }
        if (mainBoxWidth <= 400) {
            questionInput.style.fontSize = "20px";
            answer.style.fontSize = "60px";
            mainBox.style.width = "50%";
            mainBox.style.height = "50%";
        }
        if (mainBoxWidth <= 300) {
            questionInput.style.fontSize = "16px";
            answer.style.fontSize = "40px";
            mainBox.style.width = "50%";
            mainBox.style.height = "35%";
        }

        //Масштабування кулі
        mainBoxWidth = mainBox.getBoundingClientRect().width;
        mainBoxHeight = mainBox.getBoundingClientRect().height;
        var questionBoxHeight = questionBox.getBoundingClientRect().height;
        ballBox.style.margin = 0;
        var newBallBoxHeight = mainBoxHeight - questionBoxHeight - 4;
        var newBallBoxWidth = mainBoxWidth;
        ballBox.style.height = newBallBoxHeight + "px";
        ballBox.style.width = newBallBoxWidth + "px";
        //Масштабування за коротшою стороною
        if (newBallBoxWidth < newBallBoxHeight) {
            ball.style.height = newBallBoxWidth * 0.85 + "px";
            ball.style.width = newBallBoxWidth * 0.85 + "px";
        }
        else {
            ball.style.height = newBallBoxHeight * 0.85 + "px";
            ball.style.width = newBallBoxHeight * 0.85 + "px";
        }
    }
});