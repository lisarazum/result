import { Component } from '../core/Component';

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date(),
      amount: props.amount,
    }

    const formattedDate = this.state.date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'donate-item';
    this.$rootElement.innerHTML = `${formattedDate} - <b>$${this.state.amount}</b>`

    const $deleteBtn = document.createElement('button');
    $deleteBtn.className = 'delete-button';
    $deleteBtn.innerText = 'Удалить';

    this.$rootElement.append($deleteBtn)

    $deleteBtn.addEventListener('click', () => {
      if (props.onRemove) {
        props.onRemove(this);
      }

      this.$rootElement.remove();
    });
  }
}
