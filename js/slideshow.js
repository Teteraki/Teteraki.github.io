const imageData = [
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68014b1c002cfc67a016/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 1",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/680149ac0028e163dba4/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 2",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/680149ca001b8fecc6e2/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 3",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68014b0c001705aa78e3/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 4",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68014b150039aadea6d7/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 5",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6801496f00331af5e85b/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 6",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68014a230013b1604b84/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 7",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/68014a2e003b5beb6331/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 8",
  },
];

const carouselContainer = document.getElementById("carouselContainer");

imageData.forEach((image) => {
  const img = document.createElement("img");
  img.src = image.src;
  img.alt = image.alt;
  img.classList.add("carousel-image");
  carouselContainer.appendChild(img);
});
