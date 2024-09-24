import { app, Component } from 'apprun';

export default class AboutComponent extends Component<string> {
  state = 'About';

  view = (state: string) => <div>
    <h1>{state}</h1>
  </div>;

}

