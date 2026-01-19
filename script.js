const valentines = new Date("2026-02-14T00:00:00");

const messages = [
  "Day 1: I survived today. Barely. Missing you didn’t help.",
  "Day 2: You owe me a hug. With interest.",
  "Day 3: I saw something cute today. Annoying how often that’s you.",
  "Day 4: Reminder: you’re my favorite person. No competition.",
  "Day 5: If you were here, this day would’ve been 10x better.",
  "Day 6: I hope you smiled today. If not, I volunteer.",
  "Day 7: One week of this countdown already. Time’s moving too slow.",
  "Day 8: You live rent-free in my head btw.",
  "Day 9: I think the universe did a good job the day it made you.",
  "Day 10: You’re the reason my standards are permanently ruined.",
  "Day 11: Just checking in: still obsessed.",
  "Day 12: If I had one wish today, it would be you sitting next to me.",
  "Day 13: You’re dangerously easy to miss.",
  "Day 14: Halfway through this wait. Still thinking about you daily.",
  "Day 15: Do you realize how effortlessly you became important to me?",
  "Day 16: I’m convinced you’re my comfort person now.",
  "Day 17: One day I’ll tell you all the tiny moments that remind me of you.",
  "Day 18: If missing you was a job, I’d be employee of the month.",
  "Day 19: You + me + coffee someday soon. Deal?",
  "Day 20: I like how you exist. Please continue.",
  "Day 21: Almost February. Almost our month.",
  "Day 22: You’ve been my favorite thought lately.",
  "Day 23: I don’t even try to act nonchalant about you anymore.",
  "Day 24: You’re the kind of person I’d choose in every lifetime.",
  "Day 25: Countdown feels real now, huh?",
  "Day 26: Tomorrow’s the 13th… and I’m very, very excited about us."
];


function update() {
  const now = new Date();
  const diff = valentines - now;

  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  document.getElementById("countdown").innerText =
    daysLeft > 0
      ? `${daysLeft} days left until Valentine’s 💘`
      : "It’s Valentine’s Day ❤️";

  let index = messages.length - daysLeft;

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
