function falar(texto) {
  let frase = new SpeechSynthesisUtterance(texto);
  frase.voice = window.speechSynthesis.getVoices().filter(v => v.lang == "pt-BR")[9];
  frase.rate = 0.8;
  frase.lang = "pt-BR";
  window.speechSynthesis.speak(frase);
}