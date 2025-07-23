// Image gallery logic
const thumbnails = document.querySelectorAll('.galeria-thumbnails img');
const fullViewer = document.getElementById('fullscreenViewer');
const fullImage = document.getElementById('fullImage');
const closeBtn = document.getElementById('closeBtn');

thumbnails.forEach(img => {
  img.addEventListener('click', () => {
    fullImage.src = img.src;
    fullViewer.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  fullViewer.style.display = 'none';
  fullImage.src = '';
});
