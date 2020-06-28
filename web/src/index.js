import '@webcomponents/webcomponentsjs/webcomponents-loader.js';
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';

import {LitElement, html, customElement} from "lit-element";
import "./board/Board";
import theme from "./assets/scss/theme.scss";

@customElement("app-main")
export class Main extends LitElement {
  static get styles() {
    return [theme];
  }

  // script() {
  //   let script = document.createElement('script');
  //   script.src = './assets/mdb/js/mdb.min.js';
  //   return script;
  // }

  render() {
    return html`
        <link href="./assets/mdb/css/mdb.min.css" rel="stylesheet"/>
        <graph-board></graph-board>
    `;
  }
}
