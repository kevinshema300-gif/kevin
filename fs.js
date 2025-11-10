// main.js
document.addEventListener('DOMContentLoaded', function(){
  // Ushobora kongeramo animasiyo: ex: “scroll reveal” cyangwa “video autoplay”
  const video = document.querySelector('video');
  if(video){
    // shyiraho autoplay + muted kugira ngo browser ikine neza
    video.muted = true;
    video.play().catch(err => {
      console.log('Video autoplay failed:', err);
    });
  }
});
