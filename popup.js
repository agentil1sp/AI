document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('video');
    video.addEventListener('loadedmetadata', function() {
      video.requestPictureInPicture();
    });
  });