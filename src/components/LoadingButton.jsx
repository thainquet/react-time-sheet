import * as React from 'react'

import Button from 'react-bootstrap/Button'

function simulateNetworkRequest() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
export default  class LoadingButton extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleClick = this.handleClick.bind(this);
  
      this.state = {
        isLoading: false,
        buttonText: 'Create!',
        dis: false
      };
    }
  
    handleClick() {
      this.setState({ isLoading: true, dis: true }, () => {
        simulateNetworkRequest().then(() => {
          this.setState({ isLoading: false, buttonText: 'Successfully!'});
        })
        .then(() => simulateNetworkRequest())
        .then(() => {
            window.location.reload();
        });
      });
    }
  
    render() {
      const { isLoading , buttonText, dis} = this.state;
        console.log(this.props.data.test)
      return (
        <Button
          variant="primary"
          disabled={dis}
          onClick={!isLoading ? this.handleClick : null}
        >
          {isLoading ? 'Creating...' : buttonText}
        </Button>
      );
    }
  }