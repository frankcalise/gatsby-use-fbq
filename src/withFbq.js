import React from "react";

const withFbq = Component => {
  class WithFbq extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        fbqAvailable: false
      };
    }

    componentDidMount() {
      this.checkFbq();
    }

    componentDidUpdate() {
      this.checkFbq();
    }

    checkFbq = () => {
      if (typeof window !== "undefined") {
        if (window.fbq) {
          this.setState({ fbqAvailable: true });
        }
      }
    };

    track = (event, objectProps) => {
      if (this.state.fbqAvailable) {
        // Track the event
        window.fbq("track", event, objectProps);
      }

      // Simulation logging if desired
      // if (this.props.logging) {
      //   console.log(
      //     `useFbq (${
      //       fbqAvailable ? "available" : "not available"
      //     }), track("${event}, ${
      //       objectProps ? JSON.stringify(objectProps) : ""
      //     }")`
      //   );
      // }
    };

    render() {
      return (
        <Component fbq={this.track} fbqAvailable={this.state.fbqAvailable} />
      );
    }
  }

  return WithFbq;
};

export default withFbq;
