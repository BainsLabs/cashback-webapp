import React, { Component, Fragment } from 'react';
import { Dropdown, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CustomToggle extends Component {
  handleClick = (e) => {
    e.preventDefault();

    this.props.onClick(e);
    console.log(e.target, 'value');
  };

  render() {
    return (
      <a href="" onClick={this.handleClick}>
        {this.props.children}
      </a>
    );
  }
}

class CustomMenu extends Component {
  state = { value: '' };

  handleChange = (e) => {
    this.setState({ value: e.target.value.toLowerCase().trim() });
  };

  render() {
    const {
      children, style, className, 'aria-labelledby': labeledBy,
    } = this.props;

    const { value } = this.state;

    return (
      <div style={style} className={className} aria-labelledby={labeledBy}>
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={this.handleChange}
          value={value}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter((child) => {
            return !value || child.props.children.startsWith(value);
          })}
        </ul>
      </div>
    );
  }
}

class DropdownComponent extends Component {
  state = {
    label: this.props.label,
  };

  onClick = (e) => {
    this.setState({
      label: e.target.innerHTML,
    });
  };

  // languageClick = (key) => {
  //   const { languageChange } = this.props;
  //   languageChange({ lang: key });
  // };

  render() {
    const { label } = this.state;
    const {
      className, icon, iconLeft, menu, languageChange,
    } = this.props;
    return (
      <Dropdown className={className}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {iconLeft && <FontAwesomeIcon icon={icon} />}
          &nbsp;
          {label || this.props.label}
          {!iconLeft && (
            <>
              &nbsp;
              <FontAwesomeIcon icon={icon} />
            </>
          )}
        </Dropdown.Toggle>

        <Dropdown.Menu style={{ maxHeight: '20rem', overflowX: 'auto' }}>
          {menu
            && menu.map((item) => {
              return (
                <Fragment>
                  <Dropdown.Item
                    onClick={languageChange ? e => languageChange(e) : this.onClick}
                    as="option"
                    value={item.key || ''}
                  >
                    {item.item}
                  </Dropdown.Item>
                </Fragment>
              );
            })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
export default DropdownComponent;
