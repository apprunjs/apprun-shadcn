import { app, Component } from 'apprun';

export default class ComponentsComponent extends Component<string> {
  state = 'Components';

  view = (state: string) => <div>
    <h1>{state}</h1>
  </div>;

}

