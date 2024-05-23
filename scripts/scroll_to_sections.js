document.getElementById("games_link").addEventListener("click", function(){
    scroll_to("games");
}, false);

document.getElementById("art_link").addEventListener("click", function(){
    scroll_to("art");
}, false);

document.getElementById("3d_link").addEventListener("click", function(){
    scroll_to("3d");
}, false);

document.getElementById("about_link").addEventListener("click", function(){
    scroll_to("about");
}, false);

document.getElementById("contact_link").addEventListener("click", function(){
    scroll_to("contact");
}, false);

function scroll_to(id) {
    console.log(id)
    const element = document.getElementById(id);
    element.scrollIntoView({behavior: "smooth"});
}