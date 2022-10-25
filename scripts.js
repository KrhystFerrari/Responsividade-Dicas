// Make Cards
const sectionCards = document.querySelector("section.cards");

const card = document.querySelector("div.card");

const videos = [
  {
    title: "Exemplo",
    duration: "57 min",
    thumb: "https://www.youtube.com/watch?v=DjecRNbaFSM",
    video_id: "DjecRNbaFSM"
  },
  {
    title: "Exemplo",
    duration: "36 min",
    thumb: "https://www.youtube.com/watch?v=DjecRNbaFSM",
    video_id: "DjecRNbaFSM"
  },
  {
    title: "Exemplo",
    duration: "54 min",
    thumb: "https://www.youtube.com/watch?v=DjecRNbaFSM",
    video_id: "DjecRNbaFSM"
  },
  {
    title: "Exemplo",
    duration: "33 min",
    thumb: "https://www.youtube.com/watch?v=DjecRNbaFSM",
    video_id: "DjecRNbaFSM"
  },
  {
    title: "Exemplo",
    duration: "48 min",
    thumb: "https://www.youtube.com/watch?v=DjecRNbaFSM",
    video_id: "DjecRNbaFSM"
  },
  {
    title:
      "Exemplo",
    duration: "33 min",
    thumb: "https://www.youtube.com/watch?v=DjecRNbaFSM",
    video_id: "DjecRNbaFSM"
  }
];

videos.map(video => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", video.video_id);
  cardClone.querySelector("img").src = video.thumb;
  cardClone.querySelector(".title").innerHTML = video.title;
  cardClone.querySelector(".info > p.text--medium").innerHTML =
    video.duration;
  sectionCards.appendChild(cardClone);
});

card.remove();

// Modal actions
const modalOverlay = document.querySelector(".modal-overlay");
const modal = document.querySelector(".modal");
const cards = [...document.querySelectorAll(".cards .card")];

cards.forEach(card => {
  card.addEventListener("click", () => {
    modal.querySelector(
      "iframe"
    ).src = `https://www.youtube.com/embed/${card.getAttribute("id")}`;
    modalOverlay.classList.add("active");
    modal.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
  });
});

document.querySelector(".close-modal").addEventListener("click", () => {
  modalOverlay.classList.remove("active");
  modal.classList.remove("active");
  modal.querySelector("iframe").src = ``;
  document.querySelector("body").style.overflow = "initial";
});




// MENU RESPONSIVO