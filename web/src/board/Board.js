import {customElement, LitElement, html} from "lit-element";
import "./BoardNavbar";

@customElement("graph-board")
export class Board extends LitElement {
    render() {
        return html`
        <board-navbar></board-navbar>
        `;
    }
    createRenderRoot() {
        return this;
    }
}