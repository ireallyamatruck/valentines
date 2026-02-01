const valentines = new Date("2026-02-14T00:00:00");

const messages = [
  "I just want to hug and give you all the kisses.",
  "I saw something cute today. Annoying how often that's you.",
  "Love how you make me laugh. Like please put a ring alreadyyyy.",
  "Did you smile today? If not, I volunteer. Me! Me! Me!",
  "You really are my comfort person.",
  "Who thought I could really find the best partner?",
  "I hope we are cats in the next life, so I can purr on you all the time.",
  "I think of you everytime I see something nice, cute, or hear something funny.",
  "Your presence brings the fun out of me.",
  "I love when you take care of things for me. Like yes tell me how to eat, give me skincare, kiss me.",
  "Growing old with you will be the most sweetest thing I'd have done in life.",
  "I can't contemplate how pretty you look, how deep I've fallen in love with you.",
  "Can we be the bestest friends forever? I'd love to take care of you and be close with you.",
  "Two years, lots of memories and a lifetime to go with you. I love you so much baby"
];


function update() {
  const now = new Date(); // use real time
  const valentines = new Date("2026-02-14T00:00:00");

  const diff = valentines - now;

  const introCard = document.getElementById("intro-card");
  const countdownCard = document.getElementById("countdown-card");
  const yesBtn = document.getElementById("yes-btn");
  const daysSpan = document.getElementById("days-count");
  const introText = document.querySelector(".intro-text");

  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  /* ---------------- INTRO CARD LOGIC ---------------- */

  const isValentinesDay =
    now.getFullYear() === 2026 &&
    now.getMonth() === 1 &&   // February (0-based)
    now.getDate() === 14;

  if (isValentinesDay) {
    introText.innerHTML = "Will you be my Valentine? 💘";
  } else {
    const dayWord = daysLeft === 1 ? "day" : "days";
    daysSpan.innerText = daysLeft;
    introText.innerHTML =
      `Will you wait <span id="days-count">${daysLeft}</span> ${dayWord} to be my Valentine? 🌸`;
  }

  /* ---------------- COUNTDOWN CARD ---------------- */

  if (diff <= 0) {
    document.getElementById("countdown").innerText =
      "Happy Valentine's Sweetheart 💋";
    document.getElementById("timer").innerText = "";
    document.getElementById("message").innerText =
      messages[messages.length - 1];
    return;
  }

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  if (days > 1) {
    document.getElementById("countdown").innerText =
      `${days} days left till you're my Valentine's 🎀`;
  } else if (days === 1) {
    document.getElementById("countdown").innerText =
      `1 day left till you're my Valentine's 🎀`;
  } else {
    document.getElementById("countdown").innerText =
      `I think you know what's gonna happen 🤭`;
  }

  document.getElementById("timer").innerText =
    days > 0
      ? `${days} ${days === 1 ? "day" : "days"} ${hours}h ${minutes}m ${seconds}s`
      : `${hours}h ${minutes}m ${seconds}s`;

  const index = messages.length - daysLeft - 1;

  document.getElementById("message").innerText =
    index < 0
      ? "The countdown has begun 💞"
      : messages[Math.min(index, messages.length - 1)];

  yesBtn.addEventListener("click", () => {
    introCard.classList.add("hidden");
    countdownCard.classList.remove("hidden");
  });
}

update();
setInterval(update, 1000);
