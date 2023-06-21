import React from 'react';
import ErrorPage from '../stateView/ErrorPage'
import AppContextProvider from '../../../contexts/AppContextProvider';
import Header from '../header';
import MegaMenu from '../megamenu';

class ErrorBoundry extends React.Component {
    constructor(props) {
      super(props);
      // Add some default error states
      this.state = {
        error: false,
        info: null,
      };
    }

    static getDerivedStateFromError(error) {
        return { error: error };
    }

    componentDidCatch(error, info) {
      // Add error to state
      this.setState({
        error: error,
        info: info,
      });
    }

    render() {
      if(this.state.error) {
        return (
            <AppContextProvider>
                <ErrorPage/>
            </AppContextProvider>
        )
      }
      return this.props.children;
    }
  }

  export default ErrorBoundry