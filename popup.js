document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById('image');
  image.addEventListener('click', function() {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    } else {
      image.requestPictureInPicture();
    }
  });
});