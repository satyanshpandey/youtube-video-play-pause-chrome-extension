chrome.tabs.onActivated.addListener(async (activeInfo) => {
    const tabs = await chrome.tabs.query({url: "*://*.youtube.com/*"});
    for (const tab of tabs) {
      if (tab.id === activeInfo.tabId) {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: playVideo
        });
      } else {
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          function: pauseVideo
        });
      }
    }
  });
  
  chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: addVisibilityChangeListener
      });
    }
  });
  
  function playVideo() {
    const video = document.querySelector('video');
    if (video) video.play();
  }
  
  function pauseVideo() {
    const video = document.querySelector('video');
    if (video) video.pause();
  }
  
  function addVisibilityChangeListener() {
    document.addEventListener('visibilitychange', () => {
      const video = document.querySelector('video');
      if (document.visibilityState === 'hidden' && video) {
        video.pause();
      } else if (document.visibilityState === 'visible' && video) {
        video.play();
      }
    });
  }
  