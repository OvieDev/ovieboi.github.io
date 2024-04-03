document.getElementById("games_link").addEventListener("click", function(){
    scroll_to("games");
}, false);

function scroll_to(id) {
    console.log(id)
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
}