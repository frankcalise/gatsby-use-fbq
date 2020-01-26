import React from "react";

export default function useFbq({ logging = false } = {}) {
  const [fbqAvailable, setFbqAvailable] = React.useState(false);

  // Some Gatsby SSR checks, make sure window is available
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.fbq) {
        setFbqAvailable(true);
      }
    }
  }, []);

  // Don't need first parameter, will always send track
  // Since we are initialized via gatsby-plugin-facebook-pixel
  function track(event, objectProps) {
    if (fbqAvailable) {
      // Track the event
      window.fbq("track", event, objectProps);
    }

    // Simulation logging if desired
    if (logging) {
      console.log(
        `useFbq (${
          fbqAvailable ? "available" : "not available"
        }), track("${event}, ${
          objectProps ? JSON.stringify(objectProps) : ""
        }")`
      );
    }
  }

  return track;
}
