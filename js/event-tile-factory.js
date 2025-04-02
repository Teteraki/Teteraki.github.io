export function createEventTiles(events, container) {
    events.forEach(event => {
        const tile = document.createElement("div");
        tile.classList.add("flex", "flex-col", "items-center");
      
        // Create the anchor element to wrap the image
        const imageLink = document.createElement("a");
        imageLink.href = event.url; // Set the URL
        imageLink.target = "_blank"; // Open the link in a new tab
      
        // Create the image element
        const img = document.createElement("img");
        img.classList.add("w-full", "h-auto");
        img.src = event.image;
        img.alt = event.name;
        img.classList.add("border-2", "border-gray-400", "rounded-xl");
      
        // Append the image to the anchor
        imageLink.appendChild(img);
      
        // Create the anchor element for the event name
        const a = document.createElement("a");
        a.classList.add("mt-2", "text-blue-500", "hover:underline");
        a.href = event.url; // Set the URL
        a.target = "_blank"; // Open the link in a new tab
        a.textContent = event.name;
      
        // Append the clickable image and anchor to the tile div
        tile.appendChild(imageLink);
        tile.appendChild(a);
      
        // Append the tile to the container
        container.appendChild(tile);
    });
}
