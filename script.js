const valentines = new Date("2026-02-14T00:00:00");

const messages = [
  "I dint survive today. Barely. Missing you didn’t help.",
  "You owe me a hug. With interest.",
  "I saw something cute today. Annoying how often that’s you.",
  "Reminder: you’re my favorite person. No competition.",
  "If you were here, this day would’ve been 10x better.",
  "I hope you smiled today. If not, I volunteer.",
  "One week of this countdown already. Time’s moving too slow.",
  "You live rent-free in my head btw.",
  "I think the universe did a good job the day it made you.",
  "You’re the reason my standards are permanently ruined.",
  "Just checking in: still obsessed.",
  "If I had one wish today, it would be you sitting next to me.",
  "You’re dangerously easy to miss.",
  "Halfway through this wait. Still thinking about you daily.",
  "Do you realize how effortlessly you became important to me?",
  "I’m convinced you’re my comfort person now.",
  "One day I’ll tell you all the tiny moments that remind me of you.",
  "If missing you was a job, I’d be employee of the month.",
  "You + me + coffee someday soon. Deal?",
  "I like how you exist. Please continue.",
  "Almost February. Almost our month.",
  "You’ve been my favorite thought lately.",
  "I don’t even try to act nonchalant about you anymore.",
  "You’re the kind of person I’d choose in every lifetime.",
  "Countdown feels real now, huh?",
  "Tomorrow’s the 13th… and I’m very, very excited about us."
];



function update() {
  const now = new Date();
  const diff = valentines - now;

  // If Valentine’s has passed
  if (diff <= 0) {
    document.getElementById("countdown").innerText = "Happy Valentine's Sweetheart 💋";
    document.getElementById("timer").innerText = "";
    document.getElementById("message").innerText = messages[messages.length - 1];
    return;
  }

  // Time calculations
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds / (60 * 60)) % 24);
  const minutes = Math.floor((totalSeconds / 60) % 60);
  const seconds = totalSeconds % 60;

  // Display countdown
  document.getElementById("countdown").innerText =
    `${days} days left till you're my Valentine's 🎀`;

  document.getElementById("timer").innerText =
    `${hours}h ${minutes}m ${seconds}s`;

  // Message logic
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));
  const index = messages.length - daysLeft;

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
