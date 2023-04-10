window.onload = function() {
    console.log("made by mahi1sokhary(Qoqnus master)");
    console.log("i made this website for my self");
    console.log("every thing on this website is for mahi1sokhary");
    console.log("tested on 6.67inch screen with 20:9 aspect ratio");


    logo = document.getElementById("logo");
    logo.onclick = function() {
        alert("مدزبیتن رو فالو کن زود تند سریییع");
    }
}
$(function() {
    $(".btn").click(function() {
        $(".submenu").slideToggle(500);
    });
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}