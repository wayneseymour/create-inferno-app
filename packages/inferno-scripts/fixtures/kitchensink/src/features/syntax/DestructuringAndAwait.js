import Inferno from 'inferno';
import Component from 'inferno-component';

async function load() {
  return { users: [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' }
  ] };
}

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] };
  }

  async componentDidMount() {
    const { users } = await load();
    this.setState({ users });
  }

  render() {
    return (
      <div id="feature-destructuring-and-await">
        {this.state.users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    );
  }
}
