import React from 'react';
import ReactDOM from 'react-dom';



const Report = (props) => {
  return (
    <div>
      <div>Book Choice: <img src={props.bookChoice}/>
      </div>
      <div>Try It Out Answers:
        {props.tryItOutAnswers.map((answer) => (
          <div>{answer}</div>
        ))}
      </div> Activity Answers:
      {props.activityAnswers.heading1[0]}: {props.activityAnswers.heading1[1]}
      {props.activityAnswers.subheading1a[0]}: {props.activityAnswers.subheading1a[1]}
      {props.activityAnswers.subheading1b[0]}: {props.activityAnswers.subheading1b[1]}
      {props.activityAnswers.heading2[0]}: {props.activityAnswers.heading2[1]}
      {props.activityAnswers.subheading2a[0]}: {props.activityAnswers.subheading2a[1]}
      {props.activityAnswers.subheading2b[0]}: {props.activityAnswers.subheading2b[1]}
      {props.activityAnswers.heading3[0]}: {props.activityAnswers.heading3[1]}
      {props.activityAnswers.subheading3a[0]}: {props.activityAnswers.subheading3a[1]}
      {props.activityAnswers.subheading3b[0]}: {props.activityAnswers.subheading3b[1]}
      {props.activityAnswers.heading4[0]}: {props.activityAnswers.heading4[1]}
      {props.activityAnswers.subheading4a[0]}: {props.activityAnswers.subheading4a[1]}
      {props.activityAnswers.subheading4b[0]}: {props.activityAnswers.subheading4b[1]}
      <div>
      </div>
    </div>
  );
}

export default Report;
