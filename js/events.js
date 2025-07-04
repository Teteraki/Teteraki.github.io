import { createEventTiles } from "/js/event-tile-factory.js";

const upcoming_events = [
  {
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68007f6700275c33cb49/view?project=68007df0002d3c24adaa&mode=admin",
    name: "Alberta Melee Mountain Climb - Biweekly Netplay Sunday's @ 7PM GMT",
    url: "https://start.gg/abmc",
  },
  {
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68095d640011d92672e8/view?project=68007df0002d3c24adaa&mode=admin",
    name: "Black Tie Basement - Biweekly Friday's @ 6PM GMT",
    url: "https://start.gg/btb",
  },
  {
    image:
      "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68095e350011c9304ae2/view?project=68007df0002d3c24adaa&mode=admin",
    name: "MRU Smash - Weekly Tuesday's @6:30 PM (Ran by MRU Smash Club)",
    url: "https://start.gg/mrusmash",
  },

  // Add more events as needed
];

const past_events = [
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
