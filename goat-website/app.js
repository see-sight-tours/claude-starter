// ===== GOAT ZONE APP =====

// Floating background goats
function createFloatingGoats() {
  const container = document.getElementById('floatingGoats');
  const goatEmojis = ['🐐', '🌿', '🏔️', '🌾', '🍃'];
  for (let i = 0; i < 20; i++) {
    const el = document.createElement('span');
    el.classList.add('floating-goat-emoji');
    el.textContent = goatEmojis[Math.floor(Math.random() * goatEmojis.length)];
    el.style.left = Math.random() * 100 + 'vw';
    el.style.animationDuration = (8 + Math.random() * 12) + 's';
    el.style.animationDelay = (Math.random() * 15) + 's';
    el.style.fontSize = (1.5 + Math.random() * 2) + 'rem';
    container.appendChild(el);
  }
}

// Goat screams
const screams = [
  'BAAAAAAAAAAAAAA!!!',
  'MAAAAAAAAAAAAAA!!!',
  'BWAAAAAAAAAAAAA!!!',
  'MEEEEEEEEHHHHHH!!!',
  'BAAAA BAAAA BAAAA!!!',
  'AAAAAAAAAHHHHHHH!!!',
  'BAA BAA BAA... BAA!!!',
  'MAAAAAAAAAAAAAAAH!!!',
];

const screamEmojis = ['😱', '🐐', '💥', '🔊', '😤', '🤪', '🫨'];

function goatScream() {
  const btn = document.getElementById('screamBtn');
  const output = document.getElementById('screamOutput');

  btn.classList.add('screaming');
  setTimeout(() => btn.classList.remove('screaming'), 400);

  const scream = screams[Math.floor(Math.random() * screams.length)];
  const emoji = screamEmojis[Math.floor(Math.random() * screamEmojis.length)];

  output.style.opacity = '0';
  setTimeout(() => {
    output.textContent = emoji + ' ' + scream + ' ' + emoji;
    output.style.opacity = '1';
    output.style.transform = 'scale(1.1)';
    setTimeout(() => { output.style.transform = 'scale(1)'; }, 200);
  }, 150);

  // Screen flash
  document.body.style.transition = 'background 0.1s';
  document.body.style.background = '#e76f51';
  setTimeout(() => { document.body.style.background = ''; }, 100);
}

// Goat wisdom
const wisdomList = [
  '"If the mountain is steep, climb it anyway. Or just eat the mountain."',
  '"The grass is always greener on the other side. So jump the fence."',
  '"Never explain yourself. Just scream."',
  '"You cannot fail if you headbutt every obstacle."',
  '"Four legs good. Two legs suspicious."',
  '"A goat without a fence is a goat living their best life."',
  '"Eat first. Ask questions never."',
  '"The highest peak is just a staircase for those who believe."',
  '"Rectangular pupils are how you see the world differently."',
  '"When in doubt, BAA loudly and see what happens."',
  '"The cardboard box is not trash. It is lunch."',
  '"Stand on things. All things. Assert dominance."',
];

let lastWisdomIndex = -1;

function newWisdom() {
  const quoteEl = document.getElementById('wisdomQuote');
  let idx;
  do { idx = Math.floor(Math.random() * wisdomList.length); } while (idx === lastWisdomIndex);
  lastWisdomIndex = idx;

  quoteEl.style.opacity = '0';
  setTimeout(() => {
    quoteEl.textContent = wisdomList[idx];
    quoteEl.style.opacity = '1';
  }, 300);
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  createFloatingGoats();
  newWisdom(); // show a random wisdom on load
});
