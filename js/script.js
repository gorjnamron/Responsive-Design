function play() {
    let audio = document.getElementById("audio");
    
    audio.play();
  }
  function myFunction() {
    let x = document.getElementById("text");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }