import { Component } from 'react';
import PropTypes from 'prop-types';

import { ImSearch } from 'react-icons/im';

import { Form, Input, Submit } from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    tag: '',
  };

  handleChange = e => {
    const serchTag = e.currentTarget.value;
    this.setState({
      tag: serchTag,
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const tag = this.state.tag.trim();
    if (tag === '') {
      alert('lol');
      return;
    }
    this.props.onSerchSubmit(tag);
    this.reset();
  };

  reset = () => {
    this.setState({
      tag: '',
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Input
          onChange={this.handleChange}
          value={this.state.tag}
          placeholder="Search images..."
        />
        <Submit type="submit">
          <ImSearch size="20" fill="#2b47a8" />
        </Submit>
      </Form>
    );
  }
}

Searchbar.propTypes = {
  onSerchSubmit: PropTypes.func.isRequired,
};
