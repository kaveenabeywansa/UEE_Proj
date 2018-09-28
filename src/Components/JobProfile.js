import React from 'react';
import logo from './logo1.png';
import './App.css';
import llogo from './images/logo.png';
import homeicon from './images/homeicon.png';
import carticon from './images/carticon.png';
import UserIcon from './images/usericon.png';
import Footer from './Footer';
import swal from 'sweetalert2';
import {
  Button, Container, Row, Col,
  InputGroup, InputGroupAddon, InputGroupText, Input,
  Form, FormGroup, Label, FormText, CardTitle, CardText,
  TabContent, TabPane, Nav, NavItem, NavLink, Card,
  Dropdown, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem,
  CardBody, CardSubtitle, AppRegistry, View, ButtonGroup, ButtonToolbar
}
  from 'reactstrap';
import classnames from 'classnames';
import DropdownReact from 'react-dropdown';
import 'react-dropdown/style.css';
const options = [
  'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua & Barbuda',
  'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan'
];
const defaultOption = options[0];



class App extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.bReset = this.bReset.bind(this);
    this.bCancel = this.bCancel.bind(this);
    this.bSave = this.bSave.bind(this);
    this.state = {
      activeTab: '1',
      dropdownOpen: false
    };
  }
  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
    /*
    this.setState(prevState =>({
      dropdownOpen:!prevState.dropdownOpen
    }));
    */
  }
  bReset() {

  }
  bCancel() {

  }
  bSave(data) {
    swal({
      type: 'info',
      title: 'Message',
      text: data
  });
  }

  render() {
    return (
      <div className="App">
        <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a href=""><img src={llogo} alt="laptop.lk" /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>
          </nav>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div className="logincreddiv">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/index"><img src={homeicon} alt="Home" /></a>&ensp;
                <a href="/cart"><img src={carticon} alt="Cart" /></a>&ensp;
                <a href="/login"><img src={UserIcon} alt="Login" /></a>&ensp;
                <a href="/customerreg">Sign Up</a></li>
              <li className="breadcrumb-item"><a href="/passwordReset">Forgot Password</a></li>
            </ol>
          </div>
        </div>
        <Container style={{ maxwidth: 100, backgroundColor: '' }}>

          <Nav tabs>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}>
                Create Job Profile
            </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}>
                View Profile
            </NavLink>
            </NavItem>
          </Nav>

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1" style={{ flex: 1, backgroundColor: '' }}>
              <Form style={{ flex: 2, backgroundColor: '' }}>
                <FormGroup style={{ flex: 2, backgroundColor: '' }}>

                </FormGroup>

                <FormGroup style={{ flex: 2, backgroundColor: '' }}>
                  <Label for="createjobFullname">Full Name</Label>
                  <Label for="createjobAsterisk" style={{ color: '#CE0A13' }}> * </Label>
                  <Input type="text" name="fullname" id="createjobFullname"
                    placeholder="Enter your full name here" />
                </FormGroup>
                <FormGroup style={{ flex: 2, backgroundColor: '' }}>
                  <Label for="createjobEmail">Email</Label>
                  <Label for="createjobAsterisk" style={{ color: '#CE0A13' }}> * </Label>
                  <Input type="email" name="email" id="createjobEmail"
                    placeholder="example@example.com" />
                </FormGroup>
                <FormGroup style={{ flex: 2, backgroundColor: '' }}>
                  <Card outline color="secondary">
                    <CardBody >
                      <FormGroup row >
                        <Label for="createjobHouseNo" sm={2}>House No:</Label>
                        <Label for="createjobAsterisk" style={{ color: '#CE0A13' }}> * </Label>
                        <Col >
                          <Input name="houseNo" id="createjobHouseNo"
                            placeholder="" />
                        </Col>
                      </FormGroup>
                      <FormGroup row >
                        <Label for="createjobStreet" sm={2}>Street:</Label>
                        <Col >
                          <Input name="street" id="createjobStreet"
                            placeholder="" />
                        </Col>
                      </FormGroup>
                      <FormGroup row >
                        <Label for="createjobCity" sm={2}>City:</Label>
                        <Col >
                          <Input name="city" id="createjobCity"
                            placeholder="" />
                        </Col>
                      </FormGroup>
                      <FormGroup row >
                        <Label for="createjobCountry" sm={2}>Country:</Label>
                        <Label for="createjobAsterisk" style={{ color: '#CE0A13' }}> * </Label>
                        <Col >
                          <DropdownReact options={options} onChange={this.onSelect} value={defaultOption} placeholder="Select an option" />
                        </Col>
                      </FormGroup>
                      <FormGroup row >
                        <Label for="createjobPostalCode" sm={2}>Postal Code:</Label>
                        <Label for="createjobAsterisk" style={{ color: '#CE0A13' }}> * </Label>
                        <Col >
                          <Input name="postalcode" id="createjobPostalCode" placeholder="" />
                        </Col>
                      </FormGroup>
                    </CardBody>
                  </Card>
                </FormGroup>
                <FormGroup style={{ flex: 2, backgroundColor: '' }}>
                  <FormGroup row>
                    <Label for="createjobPhone1">Phone 1</Label>
                    <Label for="createjobAsterisk" style={{ color: '#CE0A13' }}> * </Label>
                    <Input type="phone" name="phone" id="createjobPhone1"
                      placeholder="123456789" />
                  </FormGroup>
                  <FormGroup row>
                    <Button style={{ backgroundColor: '#2A9DA8' }}>Add More</Button>
                  </FormGroup>
                </FormGroup>
                <FormGroup>
                  <Card outline color="secondary">
                    <CardBody>

                      <Card outline color="secondary">
                        <CardBody>
                          <CardTitle>Hardware</CardTitle>
                          <FormGroup >
                            <FormGroup check>
                              <Col>
                                <Input type="checkbox" />{''}
                                Laptops
                          </Col>
                              <Col>
                                <Input type="checkbox" />{''}
                                Desktops
                          </Col>
                              <Col>
                                <Input type="checkbox" />{''}
                                Tablets
                          </Col>
                              <Col>
                                <Input type="checkbox" />{''}
                                Accessories
                          </Col>
                            </FormGroup>
                          </FormGroup>

                          <FormGroup >
                            <Button style={{ backgroundColor: '#2A9DA8' }}>Add More</Button>
                          </FormGroup>
                        </CardBody>
                      </Card>
                      <Card outline color="secondary">
                        <CardBody>
                          <CardTitle>Software</CardTitle>
                          <FormGroup >
                            <FormGroup check>
                              <Col>
                                <Input type="checkbox" />{''}
                                Windows
                          </Col>
                              <Col>
                                <Input type="checkbox" />{''}
                                Linux
                          </Col>
                              <Col>
                                <Input type="checkbox" />{''}
                                McIntosh
                          </Col>
                            </FormGroup>
                          </FormGroup>
                          <FormGroup >
                            <Button style={{ backgroundColor: '#2A9DA8' }}>Add More</Button>
                          </FormGroup>
                        </CardBody>
                      </Card>
                      <Card outline color="secondary">
                        <CardBody>
                          <CardTitle>Other</CardTitle>
                          <FormGroup >
                            <Button style={{ backgroundColor: '#2A9DA8' }}>Add More</Button>
                          </FormGroup>
                        </CardBody>
                      </Card>
                    </CardBody>
                  </Card>
                </FormGroup>
                <FormGroup row>
                  <ButtonGroup size="lg">
                    <Button style={{ backgroundColor: '#0D94ED' }} onClick={() => this.bReset()}>Reset</Button>
                    <Button style={{ backgroundColor: '#ED0D18' }} onClick={() => this.bCancel()}>Cancel</Button>
                    <Button style={{ backgroundColor: '#49ED0D' }} onClick={() => this.bSave("Your data has been saved")}>Save</Button>
                  </ButtonGroup>
                </FormGroup>
              </Form>
            </TabPane>
            <TabPane tabId="2">
            </TabPane>
          </TabContent>

        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
