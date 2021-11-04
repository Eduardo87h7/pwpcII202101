/* eslint-disable no-console */
/* eslint-disable no-alert */
import './stylesheets/style.css';
import './stylesheets/mystyles.css';

console.log('Webpack workig!!');

// Inicializando Scripts de materialize
document.addEventListener('DOMContentLoaded', () => {
  const sideNav = document.querySelectorAll('.sidenav');
  // eslint-disable-next-line no-undef
  M.Sidenav.init(sideNav);
});
