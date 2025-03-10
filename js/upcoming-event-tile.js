// Array of objects containing image URLs and event names
const events = [
    { image: 'https://placehold.co/500x300', name: 'Event 1.1' },
    { image: 'https://placehold.co/500x300', name: 'Event 1.2' },
    { image: 'https://placehold.co/500x300', name: 'Event 1.3' },
    // Add more events as needed
  ];
  
  // Select the container where tiles will be appended
  const container = document.getElementById('upcoming-events');
  
  // Loop through the events array and create tiles dynamically
  events.forEach(event => {
    // Create the outer div (tile)
    const tile = document.createElement('div');
    tile.classList.add('flex', 'flex-col', 'items-center');
  
    // Create the image element
    const img = document.createElement('img');
    img.classList.add('w-full', 'h-auto');
    img.src = event.image;
    img.alt = event.name;
  
    // Create the paragraph element for the event name
    const p = document.createElement('p');
    p.classList.add('mt-2');
    p.textContent = event.name;
  
    // Append image and paragraph to the tile div
    tile.appendChild(img);
    tile.appendChild(p);
  
    // Append the tile to the container
    container.appendChild(tile);
  });
  