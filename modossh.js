let darkBlack = '#141414';

document.getElementsByClassName(
  'svg-inline--fa fa-stopwatch fa-w-14 '
)[0].style.display = 'none';
document.getElementsByClassName(
  'ExamProgress-bar-progress'
)[0].style.borderRadius = 0;
document.getElementsByTagName('body')[0].style.backgroundColor = darkBlack;
document.getElementsByClassName('BaseLayout')[0].style.backgroundColor =
  darkBlack;
Array.from(document.getElementsByClassName('QuestionOption-content')).map(
  (element) => (element.style.backgroundColor = darkBlack)
);
Array.from(document.getElementsByClassName('QuestionOption-letter')).map(
  (element) => (element.style.backgroundColor = darkBlack)
);
document.getElementsByClassName('ControlBar')[0].style.backgroundColor =
  'transparent';
document.getElementsByClassName('ExamProgress-top-title')[0].style.color =
  'white';
document.getElementsByClassName('Nav-header-logged')[0].style.display = 'none';
document.getElementsByClassName(
  'ExamProgress-bar-progress'
)[0].style.backgroundColor = 'white';
document.getElementsByClassName(
  'ExamProgress-bar-container'
)[0].style.backgroundColor = 'transparent';
document.getElementsByClassName('ExamProgress-bar-container')[0].style.height =
  '0.8rem';
document.getElementsByClassName(
  'Header-v2 Header-v2-content is-dark-header'
)[0].style.backgroundColor = darkBlack;

document.getElementsByClassName(
  'ControlBar-button ControlBar-button--left'
)[0].style.background = 'transparent';
document.getElementsByClassName(
  'ControlBar-button ControlBar-button--left'
)[0].style.color = 'white';

document.getElementsByClassName(
  'Header-v2 Header-v2-content is-dark-header'
)[0].style.boxShadow = 'none';

document.getElementsByClassName('LogoHeader-name')[0].style.display = 'none';

let percentageCompleted = document.getElementsByClassName(
  'ExamProgress-bar-progress'
)[0].style.width;

document.getElementsByClassName('ExamProgress-top-count')[0].style.display =
  'none';

let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.href =
  'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&display=swap';
head.appendChild(link);
