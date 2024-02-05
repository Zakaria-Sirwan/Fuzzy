// function z (fileName) {
//     let myImage = document.body.style.backgroundImage = "url('../photos/C_men.jpg')";
//     myImage.setAttribute("src../photos/C_men.jpg", fileName);
// }
//onclick="z('C_men.jpg')"
//onclick="secondAr"



  document.addEventListener( 'DOMContentLoaded', function() {
    let splide = new Splide( '.splide' , {
        classes: {
            pagination: 'splide__pagination pagination',
            page      : 'splide__pagination__page pagination-item',
      },
    });
    splide.mount();
  });
