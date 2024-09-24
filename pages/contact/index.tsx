import { app, Component } from 'apprun';

export default class ContentComponent extends Component<string> {
  state = 'Contact';

  view = (state: string) => <div>
    <h1>{state}</h1>
  </div>;

}

