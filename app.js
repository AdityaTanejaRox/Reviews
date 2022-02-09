// local reviews data
const reviews = [
  {
    id: 1,
    name: "Alexander The Great",
    job: "KING",
    img:
      "profi.jpg",
    text:
    "I've travelled the world more than you ever will.",
  },
  {
    id: 2,
    name: "Gengis Khan",
    job: "KNIG",
    img:
      "prof.jpg",
    text:
      "The name is 'Gangsta-Khan' but it got lost in translation",
  },
  {
    id: 3,
    name: "Aditya Taneja",
    job: "CONQUEROR",
    img:
      "cat.jpg",
    text:
      "Nyaa~ Nyaa meowww meeeooow meow grrr.",
  },
];

// select items
const img = document.getElementById('aditya-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting items
let currentItem = 0;

//load initial items
window.addEventListener("DOMContentLoaded", function(){
  showPerson();
})

// show person based on items
function showPerson(){
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person
nextBtn.addEventListener("click", function(){
  currentItem++;
  if(currentItem > reviews.length - 1){
    currentItem = 0;
  }
  showPerson();
});

// show prev person
prevBtn.addEventListener("click", function(){
  currentItem--;
  if(currentItem < 0){
    currentItem = reviews.length - 1;
  }
  showPerson();
});


// random suprise
randomBtn.addEventListener("click", function(e){
  window.location.replace("https://youtube.com/clip/UgkxW1h4xYAotHVQRu_yKgNKv9xSNdGsPseF")
})
