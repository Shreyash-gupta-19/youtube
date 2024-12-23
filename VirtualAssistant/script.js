let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice = document.querySelector("#voice")
function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text)
    text_speak.rate = 1
    text_speak.pitch = 1
    text_speak.volume = 1
    text_speak.lang = "hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wishMe() {
    let day = new Date()
    let hours = day.getHours()
    if (hours >= 0 && hours < 12) {
        speak("Good Morning Sir ")
    }
    else if (hours >= 12 && hours < 16) {
        speak("Good afternoon Sir")
    }
    else {
        speak("Good Evening Sir")
    }
}
window.addEventListener("load", function () {
    wishMe()
})
let speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

let recognition = new speechRecognition()
recognition.onresult = (event) => {
    let currentIndex = event.resultIndex
    let transcript = event.results[currentIndex][0].transcript
    content.innerText = transcript
    takeCommand(transcript.toLowerCase())
}
btn.addEventListener("click", () => {
    recognition.start()
    btn.style.display = "none"
    voice.style.display = "block"
})
function takeCommand(message) {
    btn.style.display = "flex"
    voice.style.display = "none"
    if (message.includes("hello") || message.includes("hey")) {
        speak("hello sir,what can i help you?")
    }
    else if(message.includes("who is samay")){
        speak("Samay to maadharrchood hai")
    }
    else if(message.includes("who is prashant")){
        speak("prashant to bhaai hai apna")
    }
    else {  
        let finalText = "this is what i found on internet regarding" + message.replace("shifra", "") || message.replace("shipra", "")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("shipra", "") || message.replace("shipra", "")}`, "_blank")
    }
}
