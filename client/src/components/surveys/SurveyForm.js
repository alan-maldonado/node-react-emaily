import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';

class SurveyForm extends Component {
  renderFields () {
    return (
      <div>
        <Field
          name='title'
          type='text'
          component={SurveyField}
        />
      </div>
    );
  }

  render () {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>
          {this.renderFields()}
          <button className='btn' type='submit'>Submit
            <i className='material-icons right'>send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);
