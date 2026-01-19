const valentines = new Date("2026-02-14T00:00:00");

const messages = [
  "Day 1: I saw something today that reminded me of you.",
  "Day 2: You live rent-free in my head.",
  "Day 3: I hope you smiled today.",
  "Day 4: You make everything softer.",
  "Day 5: I’m really lucky it’s you.",
  "Day 6: Just saying… I adore you.",
  "Day 7: One week closer to our day ❤️",
  "Day 8: You’re my favorite person.",
  "Day 9: I wish I could steal you for a day.",
  "Day 10: You're literally magic.",
  "Day 11: Almost there 👀",
  "Day 12: You + me soon.",
  "Day 13: Tomorrow ❤️",
  "Day 14: Happy Valentine’s Day, my love 💘"
];

function update() {
  const now = new Date();
  const diff = valentines - now;

  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerText =
    daysLeft > 0
      ? `${daysLeft} days left until Valentine’s 💘`
      : "It’s Valentine’s Day ❤️";

  let index = messages.length - daysLeft - 1;

  if (index < 0) {
    document.getElementById("message").innerText = "The countdown has begun 💞";
  } else if (index >= messages.length) {
    document.getElementById("message").innerText = messages[messages.length - 1];
  } else {
    document.getElementById("message").innerText = messages[index];
  }
}

update();
setInterval(update, 1000);
