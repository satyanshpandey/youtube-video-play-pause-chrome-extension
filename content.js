document.addEventListener('visibilitychange', () => {
    const video = document.querySelector('video');
    if (document.visibilityState === 'hidden' && video) {
      video.pause();
    } else if (document.visibilityState === 'visible' && video) {
      video.play();
    }
  });
  