import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import ModalWindow from '../ModalWindow/ModalWindow';
import DepartmentForm from '../DepartmentForm/DepartmentForm';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import './AddButton.scss';

export default class AddButon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      isOpen: false,
      body: '',
    };

    this.toggleModalWindow = this.toggleModalWindow.bind(this);
    this.openModalWindow = this.openModalWindow.bind(this);
  }

  toggleModalWindow = () => {
    console.log('toogle modal is working');
    this.setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  openModalWindow() {
    const { location } = this.props;

    if (location === '/departments') {
      this.setState({
        title: 'Add new department',
        isOpen: true,
        body: <DepartmentForm />,
      });
    } else {
      this.setState({
        title: 'Add new employee',
        isOpen: true,
        body: <EmployeeForm />,
      });
    }
  }

  render() {
    const { text } = this.props;
    const { title, isOpen, body } = this.state;

    console.log(this.props);

    return (
      <>
        <Col className="AddButton" xs="4">
          <Button
            className="AddButton__btn"
            color="success"
            size="lg"
            block
            onClick={this.openModalWindow}
          >
            {text}
          </Button>
        </Col>
        <ModalWindow
          title={title}
          isOpen={isOpen}
          body={body}
          toggleModalWindow={this.toggleModalWindow}
        />
      </>
    );
  }
}
