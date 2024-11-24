import { Component } from '../core/Component';
import { Form } from './Form';
import { List } from './List';
import { ListItem } from './ListItem';

export class App extends Component {
  setup(props) {
    this.state = {
      total: 0,
      donates: [],
    }

    this.$rootElement = document.createElement('div');
    this.$rootElement.className = 'app';

    const title = document.createElement('h1');
    title.classList.add('total-amount');
    title.innerText = 'Итого: $';

    const totalSpan = document.createElement('span');
    totalSpan.innerText = this.state.total;

    title.appendChild(totalSpan);
    this.$rootElement.appendChild(title);
    
    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);

    this.$total = totalSpan;
    this.$donateList = donateList;
  }
  
  onItemCreate(amount) {
    const item = new ListItem({ amount, onRemove: this.onItemRemove.bind(this) });

    this.state.donates.push(item);

    this.state.total += +amount;
    this.$total.innerText = this.state.total;

    this.$donateList.addItem(item);
  }

  onItemRemove(item) {
    this.state.total -= item.state.amount;
    this.$total.innerText = this.state.total;
  
    this.state.donates = this.state.donates.filter((donate) => donate !== item);
  }
}
