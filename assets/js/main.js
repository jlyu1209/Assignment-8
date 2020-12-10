jQuery(function() {
    gsap.set($("#homeimg"), {css: {opacity: 0}});
    gsap.to($("#homeimg"), {css: {opacity: 1},
                            duration: 1,
                            delay: 2});
});


var answers = [
    {
        label: "Cracked Egg Shells",
        correctAnswer: "compost",
        feedback: "That's right! Egg shells are rich source of calcium and other essential nutrients that plants need.",
        objectImg: "assets/img/Cracked Egg Shells.jpg"
    },
    {
        label: "Plastic Cups",
        correctAnswer: "trash",
        feedback: "That's right! Single-use plastic cups have polyethylene lining which can not be recycled nor composted.",
        objectImg: "assets/img/Plastic cups.jpg"
    }, 
    {
        label: "Soiled Pizza Box",
        correctAnswer: "trash",
        feedback: "That's right! The grease in the soiled pizza box makes it hard to recycle or compost. Any soiled cardboard might damage the recycling equiment or contaminate other materials.",
        objectImg: "assets/img/Greasy_PizzaBox.jpg"

    },
    {
        label: "Coffee Grounds",
        correctAnswer: "compost",
        feedback: "That's right! Coffee grounds are excellent source of nitrogen for the soil and make suitable compost material.",
        objectImg: "assets/img/Coffee Grounds.jpg"

    },
    {
        label: "Natural Corks",
        correctAnswer: "compost",
        feedback: "That's right! As long as the cork is not plastic or metal, you can break down natural corks for compost. They can be recycled BUT only through special recycling programs.",
        objectImg: "assets/img/Natural Corks.jpg"

    },
];

var index = 0;



function checkCorrectness(object, response) {
    const correctAnswer = answers[index].correctAnswer;

    // const identifier = object.dataset.identifier;
    //const correctAnswer = answers[identifier].correctAnswer;
    console.log(response.id);

    var clickedDot = document.getElementById(String(response.id));
    var image = response.querySelector(".img-label");
    var feedback = clickedDot.querySelector(".answer-feedback");

    feedback.classList.add("visible");
    image.classList.add("hidden");

    if (correctAnswer === response.id) {
        feedback.innerHTML = String(answers[index].feedback);
        //console.log(answers[index].feedback);

       
    } else {
        feedback.innerHTML = "Nice try but not quite. Try again!";
        //console.log("Nice try but not quite. Try again!");
    }
}




window.onload = function() {
    const object = document.querySelector("#object");
    const recycling = document.querySelector("#recycle");
    const compost = document.querySelector("#compost");
    const trash = document.querySelector('#trash');

    recycling.onclick = function (e) {
        checkCorrectness(object, this);
    }

    compost.onclick = function (e) {
        checkCorrectness(object, this);
    }

    trash.onclick = function (e) {
        checkCorrectness(object, this);
    };


    const next = document.querySelector("#next");

    next.onclick = function (e) {

        var image = recycling.querySelector(".img-label");
        var feedback = recycling.querySelector(".answer-feedback");
        feedback.classList.remove("visible");
        image.classList.remove("hidden");


        var image = trash.querySelector(".img-label");
        var feedback = trash.querySelector(".answer-feedback");
        feedback.classList.remove("visible");
        image.classList.remove("hidden");


        var image = compost.querySelector(".img-label");
        var feedback = compost.querySelector(".answer-feedback");
        feedback.classList.remove("visible");
        image.classList.remove("hidden");


        index = index + 1;

        if (index >= answers.length) {
            index = 0;
        };

        var label = object.querySelector("#object-label");
        label.innerText = answers[index].label;

        var objImg = object.querySelector("#object-img");
        objImg.src = answers[index].objectImg;
     
    };

    var recycleBtn = document.querySelector("#btn-recycle");
    recycleBtn.onclick = function (e) {
        location.href = "https://www.epa.gov/recycle/recycling-basics";
    };

    var compostBtn = document.querySelector("#btn-compost");
    compostBtn.onclick = function (e) {
        location.href = "https://www.epa.gov/recycle/composting-home";
    };   


};
