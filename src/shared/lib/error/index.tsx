import { Component, ErrorInfo, ReactNode } from 'react';

import { Alert } from '@mantine/core';

import { log } from 'shared/lib';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  errorTitle?: string;
  errorMessage?: string;
  errorInfo?: string;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // log('Derived State Error', error);

    return { hasError: true, errorTitle: error.name, errorMessage: error.message };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    log('Did Catch Error', error);

    this.setState({
      errorInfo: info.componentStack,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert mt="md" color="red" title={this.state.errorTitle} closeButtonLabel="Close error">
          {this.state.errorMessage}

          <br />
          <br />

          {this.state.errorInfo}
        </Alert>
      );
    }

    return this.props.children;
  }
}
