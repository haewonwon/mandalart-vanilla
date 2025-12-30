import './style.css';
import App from './App';

// class App {
//   private $target: HTMLElement;

//   constructor($target: HTMLElement) {
//     this.$target = $target;
//     this.render();
//   }

//   render() {
//     this.$target.innerHTML = `
//       <h1>Mandalart Start</h1>
//     `;
//   }
// }

// index.html의 <div id="app">을 찾아 앱을 시작
const appElement = document.querySelector<HTMLElement>('#app');

if (appElement) {
  new App(appElement);
}
