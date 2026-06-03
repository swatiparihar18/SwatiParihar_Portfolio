/* hero.js */

// TYPING ANIMATION
const commands = [
  'whoami',
  'cat about.txt',
  'ls projects/',
  'docker ps',
  'aws ec2 describe-instances',
  'kubectl get pods',
];
let cmdIdx = 0, charIdx = 0, typing = true;

const cmdEl = document.getElementById('typingCmd');

function typeLoop() {
  if (!cmdEl) return;
  const cmd = commands[cmdIdx];
  if (typing) {
    if (charIdx < cmd.length) {
      cmdEl.textContent = cmd.slice(0, ++charIdx);
      setTimeout(typeLoop, 70 + Math.random() * 40);
    } else {
      typing = false;
      setTimeout(typeLoop, 1800);
    }
  } else {
    if (charIdx > 0) {
      cmdEl.textContent = cmd.slice(0, --charIdx);
      setTimeout(typeLoop, 30);
    } else {
      typing = true;
      cmdIdx = (cmdIdx + 1) % commands.length;
      setTimeout(typeLoop, 400);
    }
  }
}
typeLoop();

// MATRIX CANVAS
const canvas = document.getElementById('matrix-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const chars = '01アイウエオABCDEFGHIJKLMNOP{}[]<>/\\|';
  let cols, drops;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    cols = Math.floor(canvas.width / 18);
    drops = new Array(cols).fill(1);
  }

  window.addEventListener('resize', resize);
  resize();

  function drawMatrix() {
    ctx.fillStyle = 'rgba(4,6,13,0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00d4ff';
    ctx.font = '14px JetBrains Mono, monospace';
    for (let i = 0; i < cols; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      ctx.fillText(char, i * 18, drops[i] * 18);
      if (drops[i] * 18 > canvas.height && Math.random() > 0.975) drops[i] = 0;
      drops[i]++;
    }
  }
  setInterval(drawMatrix, 60);
}

// Scroll reveal for quick-nav cards
document.querySelectorAll('.qn-card').forEach((card, i) => {
  card.style.animationDelay = `${i * 0.08}s`;
  card.classList.add('reveal');
});
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.qn-card').forEach(c => obs.observe(c));
