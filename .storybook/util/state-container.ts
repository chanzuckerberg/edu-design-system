import React from 'react';

type Props = {
  children: (value: any, setValue: (value: any) => void) => JSX.Element;
  initialValue: any;
};

type State = {
  value: any;
};

class StateContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = { value: props.initialValue };

    this.setValue = this.setValue.bind(this);
  }

  setValue(value: any) {
    this.setState({ value });
  }

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return children(value, this.setValue);
  }
}

export default StateContainer;
