import React from 'react';
import Telegram from '../icon/Telegram';
import { TextField, Button } from 'react-md';
import MailchimpSubscribe from "react-mailchimp-subscribe"

export default class Newsletter extends React.Component{
	render(){
		const data = this.props.data;
		const url = "https://enosi.us18.list-manage.com/subscribe/post?u=4ddca2af2ee37619ce7da4e11&amp;id=5ed7a243ca";
		return(
			<section id="contact" className="section newsletter md-text-center">
				<div className="container">
					<h3>{data.h3}</h3>
					<p>{data.p}</p>
					<MailchimpSubscribe
	          url={url}
	          render={({ subscribe, status, message }) => (
	            <CustomForm
	              status={status}
	              message={message}
	              onValidated={formData => subscribe(formData)}
	            />
	          )}
	        />
					<div className="newsletterFooter">
						<Button href="https://enosi.typeform.com/to/IvTEEJ" target="_blank" raised primary>JOIN WHITELIST</Button>
						<Button href={data.telegramUrl} raised primary className="btn-default" ><Telegram /> JOIN US ON TELEGRAM</Button>
					</div>
				</div>
			</section>
		);
	}
}

const CustomForm = ({ status, message, onValidated }) => {
  let email, error;
  const submit = (e) =>{
		e.preventDefault();
		console.log(email);
		if(!email.value){
				// email.focus();
				email._isErrored();
         email.state.error = true;

      }

      if(typeof email.value !== "undefined"){
          let lastAtPos = email.value.lastIndexOf('@');
          let lastDotPos = email.value.lastIndexOf('.');

          if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.value.indexOf('@@') == -1 && lastDotPos > 2 && (email.value.length - lastDotPos) > 2)) {
						email.focus();
						email.state.error = true;

          }
     }
		email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    });
	}

  return (
    <div className="mailchimpForm">
      {status === "sending" && <div className="statusmessage" style={{ color: "#3CB0FC" }}>sending...</div>}
      {status === "error" && (
        <div className="statusmessage"
          style={{ color: "red" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div className="statusmessage"
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
			{error}
			<div className="newsletterForm">
				<form id="mailchimpNewsletterForm" onSubmit={submit}>
					<TextField id="email"
						placeholder="Enter your email address"
						className="md-cell md-cell--bottom"
						ref={node => (email = node)}
						required
						errorText='this is required'
						/>
					<Button type="submit" raised primary>Sign Up</Button>
				</form>
			</div>
    </div>
  );
};
