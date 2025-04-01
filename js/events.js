import { createEventTiles } from "/js/event-tile-factory.js";

const upcoming_events = [
    {
      image:
        "/img/events/abmc.webp",
      name: "Alberta Melee Mountain Climb - Biweekly Netplay Sunday's @ 7PM GMT",
      url: "https://start.gg/abmc",
    },
    {
      image:
        "/img/events/btb.webp",
      name: "Black Tie Basement - Biweekly Friday's @ 6PM GMT",
      url: "https://start.gg/btb",
    },
  
    // Add more events as needed
  ];
  
const past_events = [
    { image: "/img/events/saltflats.png", name: "Salt Flats x Cold Hands Collective", url: "https://start.gg/saltflats" },
    { image: "/img/events/fireplace.png", name: "The Fireplace", url: "https://start.gg/fire" },
    
    // Add more events as needed
  ];
  
  // Create the upcoming events tiles and append them to the page.
  const upcoming_container = document.getElementById("upcoming-events");
  createEventTiles(upcoming_events, upcoming_container);

  // Craete the past events tiles and append them to the page.
  const past_container = document.getElementById("past-events");
  createEventTiles(past_events, past_container)
