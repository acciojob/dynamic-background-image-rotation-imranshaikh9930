//your JS code here. If required.
function changeBackground(){

  const landscape = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg" ;
  const portrait = "https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg";


  if(window.innerWidth > window.innerHeight){

    document.body.style.background =  `url(${landscape})`;
  }else{
    document.body.style.background = `url(${portrait})`;
  }


}

changeBackground();


window.addEventListener("resize",changeBackground)