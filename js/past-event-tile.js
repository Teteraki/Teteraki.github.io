// Array of objects containing image URLs and event names
const events = [
  { image: "https://placehold.co/500x300", name: "Event 1.1", url: "#" },
  { image: "https://placehold.co/500x300", name: "Event 1.2", url: "#" },
  { image: "https://placehold.co/500x300", name: "Event 1.3", url: "#" },
  // Add more events as needed
];

// Select the container where tiles will be appended
const container = document.getElementById("past-events");

// Loop through the events array and create tiles dynamically
events.forEach((event) => {
  // Create the outer div (tile)
  const tile = document.createElement("div");
  tile.classList.add("flex", "flex-col", "items-center");

  // Create the image element
  const img = document.createElement("img");
  img.classList.add("w-full", "h-auto");
  img.src = event.image;
  img.alt = event.name;
  img.classList.add("border-2", "border-black");

  // Create the anchor element for the event name
  const a = document.createElement("a");
  a.classList.add("mt-2", "text-blue-500", "hover:underline");
  a.href = event.url; // Set the URL
  a.target = "_blank"; // Open the link in a new tab
  a.textContent = event.name;

  // Append image and anchor to the tile div
  tile.appendChild(img);
  tile.appendChild(a);

  // Append the tile to the container
  container.appendChild(tile);
});
