// Setup inital media player controls
$('#videoPlayer').mediaelementplayer({
  features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen' ],
  videoWidth: "100%",
  videoHeight: "100%",
});

// Set global constants
const player    = document.querySelector('#videoPlayer');
const textItems = document.querySelectorAll('.timer');

// Add an event listener to each item
for (let i = 0; i < textItems.length; i += 1) {
  let textItem = textItems[i];

// Use the setCurrentTime function provided by Media Element JS
  textItem.addEventListener('click', (e) => {
    let textTime = e.target.getAttribute('data-start')
    player.setCurrentTime(textTime);
  });
}

// Get the current time and 
player.addEventListener('timeupdate', () => {
  let currentTime = player.currentTime;

  for (let i = 0; i < textItems.length; i += 1) {
    let textItem = textItems[i];
    let textItemStartTime = textItem.getAttribute('data-start');
    let textItemEndTime = textItem.getAttribute('data-end');

    if(currentTime > textItemStartTime && currentTime < textItemEndTime) {
        textItem.className = "timer highlight";
    } else {
        textItem.className = "timer";        
    }
  }
});