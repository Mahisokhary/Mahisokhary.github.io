window.onload = function() {
    console.log("made by mahi1sokhary(Qoqnus master)");
    console.log("i made this website for my self");
    console.log("every thing on this website is for mahi1sokhary");
    console.log("tested on 6.67inch screen with 20:9 aspect ratio");
}
$(function() {
    $(".btn").click(function() {
        $(".submenu").slideToggle(500);
    });
});
$(function() {
    $(".btn2").click(function() {
        $(".submenu2").slideToggle(500);
    });
});

const container = document.querySelector(".container");
const coffees = [{
    name: "logo",
    image: "../assets/logo.jpg"
},
    {
        name: "bg2",
        image: "../assets/bg2.gif"
    },
];
const showCoffees = () => {
    let output = "";
    coffees.forEach(
        ({
            name, image
        }) =>
        (output += `
            <div class="card">
            <img class="card--avatar" src=${image} />
            <h1 class="card--title">${name}</h1>
            <a class="card--link" href="#">Taste</a>
            </div>
            `)
    );
    container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showCoffees);

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("serviceWorker werked"))
        .catch(err => console.log("serviceWorker not worked"));
    });
}