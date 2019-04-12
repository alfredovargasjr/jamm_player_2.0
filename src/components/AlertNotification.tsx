import * as React from 'react';
import { Alert } from 'reactstrap';

enum AlertTypes {
  success,
  danger,
  warning,
}

interface AlertProps {
  visible: boolean;
  color: string;
  alertText: string;
}

interface AlertState {
  visible: boolean;
}

class AlertNotification extends React.Component<AlertProps, AlertState> {
  public state = {
    visible: false,
  };

  public componentDidMount() {
    const { visible } = this.props;
    this.setState({ visible });
  }

  public render() {
    const { color, alertText } = this.props;
    return (
      <div>
        <Alert
          color={color}
          isOpen={this.state.visible}
          toggle={() => {
            this.setState({ visible: false });
          }}
        >
          {alertText}
        </Alert>
      </div>
    );
  }
}

export default AlertNotification;
