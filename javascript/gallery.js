$(function(){
  var galleryImage = $(".gallery").find("img").first();
  var images = [
    "image/image1.jpg",
    "image/image2.jpg",
    "image/image3.jpg",
  ];
  var i = 0;

$(document).ready(function(){
  $(".gallery").hide();
    $(".button").click(function(){
        $(".gallery").toggle();
    });
});
  setInterval(function(){
    i = (i+1) % images.length;
    galleryImage.fadeOut(function(){
        $(this).attr('src', images[i]);
        $(this).fadeIn();
    });
  }, 2500);

});