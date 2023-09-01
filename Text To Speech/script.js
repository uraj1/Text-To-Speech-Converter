let speech = new SpeechSynthesisUtterance();

let voices = [];

let voiceSelect = document.querySelector("select");

if ('speechSynthesis' in window) {
    var synthesis = window.speechSynthesis;
  } else {
    console.log('Text-to-speech not supported.');
  }

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name,i)));
};

voiceSelect.addEventListener("change", ()=>{
    speech.voice = voices[voiceSelect.value];
})

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

// --------------------------TEXT COUNTER---------------------------------

let inputTextArea = document.getElementById("textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", ()=>{
  characCount.textContent = inputTextArea.value.length;
  let txt = inputTextArea.value.trim();
  wordCount.textContent = txt.split(/\s+/).filter((items)=> items).length;
})