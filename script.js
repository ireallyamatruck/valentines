// Set Valentine’s Day
const valentines = new Date("2026-02-14T00:00:00");

// Your daily messages (edit these!)
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

  const days = Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));

  document.getElementById("countdown").innerText =
    days > 0 ? `${days} days left until Valentine’s 💘` : "It’s Valentine’s Day ❤️";

  const messageIndex = Math.min(messages.length - 1, messages.length - days - 1);

  document.getElementById("message").innerText =
    messageIndex >= 0 ? messages[messageIndex] : "The countdown has begun 💞";
}

update();
setInterval(update, 1000);
