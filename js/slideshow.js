const imageData = [
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/680958d80017cee7ca28/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 1",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6806e4c3002cd03edec9/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 1",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6809606a0014391c545f/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 2",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6806e4cb0016c60dd4a2/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 3",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6806e4d40012281b8090/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 4",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6806e4df0015f4015efe/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 5",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6806e4ed00008859254d/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 6",
  },
  {
    src: "https://fra.cloud.appwrite.io/v1/storage/buckets/68007f440024defdd52f/files/6801496f00331af5e85b/view?project=68007df0002d3c24adaa&mode=admin",
    alt: "Event Image 7",
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
