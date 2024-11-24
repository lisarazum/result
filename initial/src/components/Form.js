import { Component } from '../core/Component';

export class Form extends Component {
  setup(props) {
    this.state = {
      amount: '',
    }

    this.$rootElement = document.createElement('form');
    this.$rootElement.className = 'donate-form';

    const $label = document.createElement('label');
    $label.classList.add('donate-form__input-label');
    $label.innerText = 'Введите сумму в $';

    const $input = document.createElement('input');
    $input.classList.add('donate-form__donate-input');
    $input.setAttribute('name', 'amount');
    $input.setAttribute('type', 'number');
    $input.setAttribute('max', '100');
    $input.setAttribute('min', '1');
    $input.setAttribute('required', '');

    const $button = document.createElement('button');
    $button.classList.add('donate-form__submit-button');
    $button.setAttribute('disabled', '');
    $button.setAttribute('type', 'submit');
    $button.innerText = 'Задонатить';

    this.$rootElement.appendChild($label);
    $label.appendChild($input);
    this.$rootElement.appendChild($button);

    this.$input = $input;
    this.$button = $button;

    this.onSubmit = props.onSubmit;

    this.$input.addEventListener('input', this.handleInput.bind(this));
    this.$rootElement.addEventListener('submit', this.handleSubmit.bind(this));
  }

  handleInput(event) {
    this.state.amount = event.target.value;
    if (this.isValid) {
      this.$button.removeAttribute('disabled');
    } else {
      this.$button.setAttribute('disabled', '');
    }

  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(this.state.amount)

      this.state.amount = '';
      this.$input.value = '';
    }
  }
}
