import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import SurveyField from './SurveyField';

const FIELDS = [
  { name: 'title', label: 'Survey Title' },
  { name: 'subject', label: 'Subject Line' },
  { name: 'body', label: 'Email Body' },
  { name: 'emails', label: 'Recipient List' }
];

class SurveyForm extends Component {
  renderFields () {
    return _.map(FIELDS, ({ label, name }) => (
      <Field
        key={name}
        type='text'
        name={name}
        label={label}
        component={SurveyField}
      />
    ));
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <Link to='/surveys' className='red btn-flat white-text'>Cancel</Link>
          <button className='teal btn-flat right white-text' type='submit'>Next
            <i className='material-icons right'>done</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
