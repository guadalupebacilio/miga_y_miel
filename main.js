// Navegación móvil progresiva: los enlaces también funcionan sin JavaScript.
document.body.classList.add('js-ready');
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');
function closeMenu() { menu.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); menu.classList.toggle('open', open); });
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => { if (e.key === 'Escape' && menu.classList.contains('open')) { closeMenu(); toggle.focus(); } });
// Filtros del catálogo sin recargar la página.
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    let count = 0; document.querySelectorAll('.product').forEach(card => { card.hidden = button.dataset.filter !== 'Todos' && card.dataset.category !== button.dataset.filter; if (!card.hidden) count++; });
    document.querySelector('#filter-status').textContent = `${count} productos mostrados`;
}));
// La consulta selecciona el producto; no realiza compras ni envíos.
document.querySelectorAll('[data-product]').forEach(a => a.addEventListener('click', () => { document.querySelector('#interest').value = a.dataset.product; }));
const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => { event.preventDefault(); const name = form.elements.nombre; const message = form.elements.mensaje; if (!name.value.trim() || message.value.trim().length < 10) { document.querySelector('#form-status').textContent = 'Escribe tu nombre y un mensaje de al menos 10 caracteres, sin contar espacios al inicio o al final.'; return; } document.querySelector('#form-status').textContent = 'Validación correcta. Esta es una demostración: tu mensaje no se ha enviado ni guardado.'; });
form.addEventListener('input', () => { document.querySelector('#form-status').textContent = ''; });
