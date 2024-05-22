isEmailCopied = false
isDiscordCopied = false
function copyToClipboard(element, text, v) {
    if (isEmailCopied && v) {
        return
    }
    if (isDiscordCopied && !v)
    {
        return
    }
    console.log("run!")
    let e = document.getElementById(element)
    navigator.clipboard.writeText(text)
    let text_inside = e.innerText
    e.innerText = "Copied"
    if (v)
    {
        isEmailCopied = true
    }
    else {
        isDiscordCopied = true
    }
    
    setTimeout(function() {
        e.innerText = text_inside
        if (v)
            {
                isEmailCopied = false
            }
            else {
                isDiscordCopied = false
            }
    }, 2000)
}

document.getElementById("email").addEventListener("click", function(){
    copyToClipboard("email", "ovie.boi@gmail.com", true)
}, false);


document.getElementById("discord").addEventListener("click", function(){
    copyToClipboard("discord", "_ovieboi", false)
}, false);