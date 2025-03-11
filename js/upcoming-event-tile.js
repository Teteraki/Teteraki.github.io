const events = [
  {
    image:
      "https://media.discordapp.net/attachments/1131763608938889287/1348814091250040943/image-37aab1ac5514624a7d3ccb3bb29365ae_3.png?ex=67d0d483&is=67cf8303&hm=639a3571d939079283a2569369344c10ac34b9654e323462a808656852ffd126&=&format=webp&quality=lossless&width=879&height=527",
    name: "Alberta Melee Mountain Climb - Biweekly Netplay Sunday @ 7PM GMT",
    url: "https://start.gg/abmc",
  },
  {
    image:
      "https://cdn.discordapp.com/attachments/1131763608938889287/1348814916601118750/image-589c66b57aa9eaef64ceda623641c73b_1.webp?ex=67d0d547&is=67cf83c7&hm=5d10b9e214a7353db47d2613a1ad6272025211a5a770dcb73579f8a48bfccea6&",
    name: "Black Tie Basement - Biweekly Friday @ 6PM GMT",
    url: "https://start.gg/btb",
  },

  // Add more events as needed
];

// Select the container where tiles will be appended
const container = document.getElementById("upcoming-events");

// Loop through the events array and create tiles dynamically
events.forEach((event) => {
  // Create the outer div (tile)
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
  img.classList.add("border-2", "border-black");

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
