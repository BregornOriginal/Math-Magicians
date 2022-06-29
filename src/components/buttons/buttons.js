/* eslint-disable */

import React from 'react';
import './button.css';
import propTypes from 'prop-types';

class Button extends React.PureComponent {
  static propTypes = {
    className: propTypes.string,
    value: propTypes.string,
    OnClick: propTypes.func,
  }

  render() {
    return (
      <button
        type="button"

        className={`${this.props.className} ${'symbol'}`}
        onClick={this.props.OnClick}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
