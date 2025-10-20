import { createEventTiles } from "/js/event-tile-factory.js";

const upcoming_events = [
  {
    image:
      "https://images.start.gg/images/tournament/839773/image-13226cfb3c1170eec9153e3989bf15e1.jpg",
    name: "The Arena Arc - Biweekly Friday's at Bow Valley College 6:00 PM MDT",
    url: "https://start.gg/taa",
  },
  {
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68095e350011c9304ae2/view?project=68007df0002d3c24adaa&mode=admin",
    name: "MRU Smash - Weekly Tuesday's at MRU 6:30 PM MDT",
    url: "https://start.gg/mrusmash",
  },
  {
    image:
      "https://images.start.gg/images/tournament/820623/image-21bb6c70be3219f451a7ddb01722bfc3.png",
    name: "Alberta Melee Mountain Climb - Biweekly Netplay Sunday's 7PM MDT (ON HAITUS)",
    url: "https://start.gg/abmc",
  },
  

  // Add more events as needed
];

const past_events = [
  {
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6890fa730036e39b5762/view?project=68007df0002d3c24adaa&mode=admin",
    name: "Heat Check Regional at Bow Valley College Esports Arena",
    url: "https://start.gg/heatcheck",
  },
  {
    image:
      "https://images.start.gg/images/tournament/772466/image-27886da338fb58461a492e4183e26311.png",
    name: "Black Tie Basement Biweekly",
    url: "https://start.gg/btb",
  },
  {
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68095e40002036619e8d/view?project=68007df0002d3c24adaa&mode=admin",
    name: "Salt Flats x Cold Hands Collective",
    url: "https://start.gg/saltflats",
  },
  {
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68095e2f0012b249fe79/view?project=68007df0002d3c24adaa&mode=admin",
    name: "The Fireplace",
    url: "https://start.gg/fire",
  },

  // Add more events as needed
];

// Create the upcoming events tiles and append them to the page.
const upcoming_container = document.getElementById("upcoming-events");
createEventTiles(upcoming_events, upcoming_container);

// Craete the past events tiles and append them to the page.
const past_container = document.getElementById("past-events");
createEventTiles(past_events, past_container);
