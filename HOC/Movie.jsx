import React from "react";
import withToolTip from "./withToolTip";
import redTheme from "./withRedTheme";

class Movie extends React.Component {
  render() {
    return (
      <>
        <div>Hello Movies</div>
      </>
    );
  }
}

export default redTheme(withToolTip(Movie));
