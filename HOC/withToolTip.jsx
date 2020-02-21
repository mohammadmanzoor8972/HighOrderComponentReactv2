import React from "react";

function withToolTip(Component) {
  return class WithToolTip extends React.Component {
    state = {
      showToolTip: false
    };

    mouseOver = () => this.setState({ showToolTip: true });
    mouseOut = () => this.setState({ showToolTip: false });

    render() {
      return (
        <div
          onMouseOver={this.mouseOver}
          onMouseOut={this.mouseOut}
          style={{ cursor: "pointer" }}
        >
          <Component {...this.state} />
          {this.state.showToolTip && <div>Hell India cdscdo</div>}
        </div>
      );
    }
  };
}

export default withToolTip;
