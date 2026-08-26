const body = document.body;
const toggleBtn = document.getElementById('toggleBtn');
 
// Verifica se o usuário já tinha escolhido um modo antes
if (localStorage.getItem('tema') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️ Modo claro';
}
 
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
 
  if (body.classList.contains('dark')) {
    toggleBtn.textContent = '☀️ Modo claro';
    localStorage.setItem('tema', 'dark');
  } else {
    toggleBtn.textContent = '🌙 Modo escuro';
    localStorage.setItem('tema', 'light');
  }
});