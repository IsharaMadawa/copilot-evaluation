import React, { useState, useEffect } from 'react';
import { DatePicker } from '@progress/kendo-react-dateinputs';
import { TextBox } from '@progress/kendo-react-inputs';
import { Card, CardHeader, CardTitle, CardBody, CardActions } from '@progress/kendo-react-layout';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { MultiSelect } from '@progress/kendo-react-dropdowns';

import { Button } from '@progress/kendo-react-buttons';
import { Error, Label } from '@progress/kendo-react-labels';
import PropTypes from 'prop-types';
import './add-assignee.module.scss';
import AddAsigneeOperator from '../add-assignee-operator';

const AddAssignee = () => {
  const { useGetCourseLinkDetails } = AddAsigneeOperator,
  observeCourseLinkDetails = useGetCourseLinkDetails(1);

  const [formData, setFormData] = useState({
    firstName: {
      value: '',
      isValid: true,
      error: ''
    },
    lastName: {
      value: '',
      isValid: true,
      error: ''
    },
    email: {
      value: '',  
      isValid: true,
      error: ''
    },
    phoneNumber: {
      value: '',
      isValid: true,
      error: ''
    },
    birthDate: {
      value: '',
      isValid: true,
      error: ''
    },
    courses: {
      value: [],
      isValid: true,
      error: ''
    }
  }),
  // initialize state for is Dirty for form
  [isDirty, setIsDirty] = useState(false),
  onFormSubmit = (dataItem) => {
    // set is dirty to true
    setIsDirty(true);
    // set the state for form data
    // fire all the validators
    firstNameValidator(dataItem.firstName);
    lastNameValidator(dataItem.lastName);
    emailValidator(dataItem.email);
    phoneNumberValidator(dataItem.phoneNumber);
    birthDateValidator(dataItem.birthDate);
    
    setFormData({
      firstName: {
        ...formData.firstName,
        dataItem: dataItem.firstName
      },
      lastName: {
        ...formData.lastName,
        dataItem: dataItem.lastName
      },
      email: {
        ...formData.email,
        dataItem: dataItem.email
      },
      phoneNumber: {
        ...formData.phoneNumber,
        dataItem: dataItem.phoneNumber
      },
      birthDate: {
        ...formData.birthDate,
        dataItem: dataItem.birthDate
      },
      courses: {
        ...formData.courses,
        dataItem: dataItem.courses
      }
    });
    console.log(dataItem);
  },
  // define validators for fields
  firstNameValidator = (value) => {
    if (value === '') {
      return 'First name is required';
    }
    return '';
  },
  lastNameValidator = (value) => {
    if (value === '') {
      return 'Last name is required';
    }
    return '';
  },
  emailValidator = (value) => {
    // define email regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (value === '') {
      return 'Email is required';
    } 
    else if (!emailRegex.test(value)) {
      return 'Email is invalid';
    }
    return '';
  },
  phoneNumberValidator = (value) => {
    // define phone number regex
    const phoneNumberRegex = /^\d{10}$/;
    if (value === '') {
      return 'Phone number is required';
    } else if (!phoneNumberRegex.test(value)) {
      console.log(value, "hello");
      // debugger;
      return 'Phone number is invalid';
    }
    return '';
  },
  birthDateValidator = (value) => {
    if (value === '') {
      return 'Birth date is required';
    } else if (value > new Date()) {
      return 'Birth date cannot be in the future';
    }
    return '';
  },
  coursesValidator = (value) => {
    if (value.length === 0) {
      return 'Courses are required';
    }
    return '';
  },
  // generate a function that takes js date object and prints out a string in the format of MM/DD/YYYY
  formatDate = (date) => {
    if (date) {
      const month = date.getMonth() + 1,
      day = date.getDate(),
      year = date.getFullYear();
    return `${month}/${day}/${year}`;
    } 
    return '';
  },
  // write on change events for each field
  onFirstNameChange = (e) => {
    const value = e.value;
    const error = firstNameValidator(value);
    setFormData((prevState) => ({
      ...prevState,
      firstName: {
        ...prevState.firstName,
        value: value,
        error: error,
        isValid: error === ''
      }
    }));
  },
  onLastNameChange = (e) => {
    const value = e.value;
    const error = lastNameValidator(value);
    setFormData((prevState) => ({
      ...prevState,
      lastName: {
        ...prevState.lastName,
        value: value,
        error: error,
        isValid: error === ''
      }
    }));
  },
  onEmailChange = (e) => {
    const value = e.value;
    const error = emailValidator(value);
    setFormData((prevState) => ({
      ...prevState,
      email: {
        ...prevState.email,
        value: value,
        error: error,
        isValid: error === ''
      }
    }));
  },
  onPhoneNumberChange = (e) => {
    const value = e.value;
    const error = phoneNumberValidator(value);
    setFormData((prevState) => ({
      ...prevState,
      phoneNumber: {
        ...prevState.phoneNumber,
        value: value,
        error: error,
        isValid: error === ''
      }
    }));
  },
  onBirthDateChange = (e) => {
    const value = e.value;
    const error = birthDateValidator(value);
    setFormData((prevState) => ({
      ...prevState,
      birthDate: {
        ...prevState.birthDate,
        value: value,
        error: error,
        isValid: error === ''
      }
    }));
  },
  onCoursesChange = (e) => {
    const value = e.value;
    const error = coursesValidator(value);
    setFormData((prevState) => ({
      ...prevState,
      courses: {
        ...prevState.courses,
        value: value,
        error: error,
        isValid: error === ''
      }
    }));
  },
  // function to reset form
  resetForm = () => {
    setFormData({
      firstName: {
        value: '',
        isValid: true,
        error: ''
      },
      lastName: {
        value: '',
        isValid: true,
        error: ''
      },
      email: {
        value: '',
        isValid: true,
        error: ''
      },
      phoneNumber: {
        value: '',
        isValid: true,
        error: ''
      },
      birthDate: {
        value: '',
        isValid: true,
        error: ''
      }
    });
  };

  useEffect(() => {
    if (observeCourseLinkDetails.data) {
      console.log(observeCourseLinkDetails.data);
    }
  }, [observeCourseLinkDetails.data]);

  return (
    <div className="bus-card-wrapper">
      <Card>
        <CardHeader>
          <CardTitle>
            <h3>Card Title</h3>
          </CardTitle>
        </CardHeader>
        <CardBody>
          {/* use a kendo form inside the card body 
            include first name, email, phone number, birthdate and submit and cancel buttons
            for text fields use BUS text box, birth date use BUS date picker and submit and cancel buttons use BUS buttons
          */}
          <Form
            onSubmit={onFormSubmit}
            render={(formRenderProps) => (
              <FormElement style={{ width: '100%' }}>
                  <fieldset className={'k-form-fieldset'}>
                  <div className="form-container">
                      <legend className={'k-form-legend'}>Personal Information</legend>
                      <div className="form-row">
                        <Label editorId={'firstName'}>First name</Label>
                        <Field
                          name={'firstName'}
                          id={'firstName'}
                          component={TextBox}
                          // validator={firstNameValidator}
                          placeholder={'Enter your first name'}
                          value={formData.firstName.value || "test"}
                          onChange={onFirstNameChange}
                        />
                       <Error>{formData.firstName.error}</Error>
                      </div>
                      <div className="form-row">
                        <Label editorId={'lastName'}>Last name</Label>
                        <Field
                          name={'lastName'}
                          id={'lastName'}
                          component={TextBox}
                          // validator={lastNameValidator}
                          placeholder={'Enter your last name'}
                          value={formData.lastName.value  || "test"}
                          onChange={onLastNameChange}
                        />
                        <Error>{formData.lastName.error}</Error>
                      </div>
                      <div className="form-row multi-field-row">
                          <div className="form-col-6">
                            <Label editorId={'email'}>Email</Label>
                            <Field
                              name={'email'}
                              component={TextBox}
                              // validator={emailValidator}
                              placeholder={'Enter your email'}
                              value={formData.email.value  || "test"}
                              onChange={onEmailChange}
                            />
                            <Error>{formData.email.error}</Error>
                          </div>
                          <div className="form-col-6">
                            <Label editorId={'phoneNumber'}>Phone number</Label>
                            <Field
                              name={'phoneNumber'}
                              component={TextBox}
                              // validator={phoneNumberValidator}
                              placeholder={'Enter your phone number'}
                              value={formData.phoneNumber.value  || "test"}
                              onChange={onPhoneNumberChange}
                            />
                            <Error>{formData.phoneNumber.error}</Error>
                        </div>
                      </div>
                      <div className="form-row">
                        <Label editorId={'birthDate'}>Birth date</Label>
                        <Field
                          name={'birthDate'}
                          id={'birthDate'}
                          component={DatePicker}
                          // validator={birthDateValidator}
                          placeholder={'Enter your birth date'}
                          value={formData.birthDate.value || new Date()}
                          onChange={onBirthDateChange}
                        />
                        <Error>{formData.birthDate.error}</Error>
                      </div>
                      {/* another form row with multi select */}
                      <div className="form-row">
                        <Label editorId={'courses'}>Courses</Label>
                        <Field
                          name={'courses'}
                          id={'courses'}
                          component={MultiSelect}
                          data={[
                            { text: 'Course 1', id: 1 },
                            { text: 'Course 2', id: 2 }
                          ]}
                          textField={'text'}
                          dataItemKey={'id'}
                          onChange={onCoursesChange}
                          placeholder={'Select courses'}
                        />
                        <Error>{formData.courses.error}</Error>
                      </div>
                    </div>
                  </fieldset>
                <div className="k-form-buttons">
                  <Button
                    className={"bus-btn-primary"}
                    onClick={onFormSubmit}
                  >
                    Submit
                  </Button>
                  <Button className={"bus-btn-primary"} onClick={resetForm}>Cancel</Button>
                </div>
              </FormElement>
            )}
          />       
        </CardBody>
        <CardActions>
            <div>
              {/* i want to display the form data onSubmit on this div */}
              <h3>Form Data</h3>
              <div>
                <p>First Name: {formData.firstName.dataItem}</p>
                <p>Last Name: {formData.lastName.dataItem}</p>
                <p>Email: {formData.email.dataItem}</p>
                <p>Phone Number: {formData.phoneNumber.dataItem}</p>
                <p>Birth Date: {formatDate(formData.birthDate.dataItem)}</p>
              </div>
            </div>
        </CardActions>
      </Card>
    </div>
  );
};

AddAssignee.propTypes = {};

AddAssignee.defaultProps = {};

export default AddAssignee;
