document.getElementById('danceButton').addEventListener('click', function() {
    const image = document.getElementById('dancingImage');
    const danceArea = document.getElementById('danceArea');
    const maxX = danceArea.clientWidth - image.clientWidth;
    const maxY = danceArea.clientHeight - image.clientHeight;

    // Generate random positions within the dance area
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    // Generate a random rotation between 0 and 360 degrees
    const randomRotation = Math.random() * 360;

    // Move the image to the new position and rotate it
    image.style.transform = `translate(${randomX}px, ${randomY}px) rotate(${randomRotation}deg)`;
});

document.getElementById('walkButton').addEventListener('click', function() {
    const image = document.getElementById('walkingImage');
    const walkArea = document.getElementById('walkArea');
    const maxX = walkArea.clientWidth - image.clientWidth;
    const maxY = walkArea.clientHeight - image.clientHeight;

    // Generate random positions within the walk area
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
  

    // Move the image to the new position
    image.style.transform = `translate(${randomX}px, ${randomY}px)`;


});