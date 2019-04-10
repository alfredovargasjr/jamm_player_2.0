import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { Alert } from 'reactstrap';
import Loading from '../components/Loading';

const HomeRoute = React.lazy(() => import('../pages/Home'));

const CreateRoom = React.lazy(() => import('../pages/CreateRoom'));

const JoinRoom = React.lazy(() => import('../pages/JoinRoom'));

const SpotifySignIn = React.lazy(() => import('../pages/SpotifySignIn'));

const Room = React.lazy(() => import('../pages/Room'));

const PageNotFoundRoute = React.lazy(() => import('../pages/PageNotFound'));

const RoutePath = ({ location }: RouteComponentProps) => (
  <React.Suspense fallback={<Loading />}>
    <Switch key={location.key} location={location}>
      <Route exact={true} path="/" component={HomeRoute} />
      <Route exact={true} path="/createroom" component={CreateRoom} />
      <Route exact={true} path="/joinroom" component={JoinRoom} />
      <Route exact={true} path="/login" component={SpotifySignIn} />
      <Route exact={true} path="/room" component={Room} />
      <Route exact={true} path="/loading" component={Loading} />
      <Route component={PageNotFoundRoute} />
    </Switch>
  </React.Suspense>
);

class Routes extends React.Component {
  public state = {
    error: new Error(),
    hadError: false,
  };
  public componentDidCatch(error: Error) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      hadError: true,
    });
    // You can also log error messages to an error reporting service here
  }
  // Reset the error variables
  public handleDismiss() {
    this.setState({
      error: new Error(),
      hadError: false,
    });
  }

  public render() {
    const { error, hadError } = this.state;
    if (!hadError) {
      return (
        <Route
          render={(locationProps: RouteComponentProps) => (
            <RoutePath {...locationProps} />
          )}
        />
      );
    }
    return (
      <Alert color="danger" toggle={() => this.handleDismiss()}>
        Oh Snap! You got an error!
        <p>{error.message}</p>
      </Alert>
    );
  }
}

export default Routes;
