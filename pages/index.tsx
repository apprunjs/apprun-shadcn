import { app, Component } from 'apprun';
import { Button } from "@/components/ui/button"
export default class HomeComponent extends Component<string> {
  state = 'Home';

  view = (state: string) => <div>
    <h1>{state}</h1>
    <Button>Button</Button>
  </div>;

}

