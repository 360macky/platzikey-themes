document.getElementsByClassName('Menu-list')[0].style.display = 'none';
document.getElementsByClassName('Searchv-content')[0].style.display = 'none';
document.getElementsByClassName('Actionsv2')[0].style.display = 'none';
document.getElementsByClassName('Tinkerbell')[0].style.display = 'none';

document.getElementsByClassName('Tinkerbell')[0].remove();

document.getElementsByClassName('Header-v2')[0].style.display = 'flex';
document.getElementsByClassName('Header-v2')[0].style.justifyContent = 'center';
document.getElementsByClassName('ControlBar')[0].style.background =
  'transparent';
document.getElementsByClassName('Nav-header-logged')[0].style.display = 'none';
document.getElementsByClassName(
  'Header-v2 Header-v2-content is-dark-header'
)[0].style.boxShadow = 'none';
document.getElementsByClassName(
  'ExamProgress-bar-progress'
)[0].style.backgroundColor = '#33b1ff';
document.getElementsByClassName(
  'ExamProgress-bar-container'
)[0].style.backgroundColor = '#24385b';
