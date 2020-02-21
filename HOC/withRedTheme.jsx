import React from "react";

function redTheme(Component) {
  return class RedTheme extends React.Component {
    render() {
      return (
        <div style={{ color: "red" }}>
          <Component />
        </div>
      );
    }
  };
}

export default redTheme;
