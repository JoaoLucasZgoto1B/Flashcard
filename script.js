const toggleButton = document.getElementById('toggle-theme');
const htmlRoot = document.documentElement;

// Verifica se já existe preferência salva
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlRoot.setAttribute('data-theme', savedTheme);
  updateButtonText(savedTheme);
} else {
  // Detecta preferência do sistema operacional
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (prefersDark) {
    htmlRoot.setAttribute('data-theme', 'dark');
    updateButtonText('dark');
  }
}

toggleButton.addEventListener('click', () => {
  const currentTheme = htmlRoot.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  if (newTheme === 'light') {
    htmlRoot.removeAttribute('data-theme');
  } else {
    htmlRoot.setAttribute('data-theme', newTheme);
  }

  localStorage.setItem('theme', newTheme);
  updateButtonText(newTheme);
});

function updateButtonText(theme) {
  toggleButton.textContent = theme === 'dark' ? '☀️ Modo Claro' : '🌙 Modo Escuro';
}