const samples = [
  {
    title: "Palmas",
    src: "./audios/clap.m4a",
  },
  {
    title: "Sirene",
    src: "./audios/clap.m4a"
  },
  {
    title: "Haha",
    src: "./audios/clap.m4a"
  },
  {
    title: "Miau",
    src: "./audios/clap.m4a"
  },
  {
    title: "Chico",
    src: "./audios/clap.m4a"
  },
  {
    title: "Ops",
    src: "./audios/clap.m4a"
  },
];

let currentAudio = null;
for (let i=0; i<samples.length; i++) {
  let button = document.createElement("button");
  button.innerText = samples[i].title;
  button.addEventListener('click', function() {
    if (currentAudio != null) {
      currentAudio.pause();
      currentAudio = null;
    }
    const audio = new Audio(samples[i].src);
    audio.play();
    currentAudio = audio;
  });
  document.querySelector("#samples").appendChild(button);
}