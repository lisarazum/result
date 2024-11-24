import { Component } from '../core/Component';

export class List extends Component {
  setup() {
    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donates-container';

    const $title = document.createElement('h2');
    $title.className = 'donates-container__title';
    $title.innerText = 'Список донатов';

    const $donatesList = document.createElement('div');
    $donatesList.className = 'donates-container__donates';

    this.$rootElement.append($title, $donatesList);

    this.$listContainer = $donatesList;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }
}