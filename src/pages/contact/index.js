import * as React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Layout>
        <div className="container contact-container">
          <div className="content">
            <div style={{ minWidth: "70%" }}>
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light underline mb-6">
                Contact us
              </h2>
              <p>
                Call us at{" "}
                <a className="is-primary" href="tel:+61 405 123 34567">
                  +61 405 123 34567
                </a>{" "}
                or fill the form below:
              </p>
              <form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                className="mt-4 submission-form"
              >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                  <label>
                    Don’t fill this out:{" "}
                    <input name="bot-field" onChange={this.handleChange} />
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"name"}>
                    Your name
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"text"}
                      name={"name"}
                      placeholder="Your name"
                      onChange={this.handleChange}
                      id={"name"}
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"email"}>
                    Email
                  </label>
                  <div className="control">
                    <input
                      className="input"
                      type={"email"}
                      name={"email"}
                      placeholder="Your email"
                      id={"email"}
                      required={true}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label" htmlFor={"message"}>
                    Message
                  </label>
                  <div className="control">
                    <textarea
                      className="textarea"
                      name={"message"}
                      onChange={this.handleChange}
                      id={"message"}
                      placeholder="Your message"
                      required={true}
                    />
                  </div>
                </div>
                <div className="field">
                  <button className="button is-primary" type="submit">
                    Send message
                  </button>
                  <p className="mt-4 mb-4">
                    <small>We will get back to you as soon as possible.</small>
                    <small className="block">
                      Please see where we are located as well in the map below.
                    </small>
                  </p>
                  <p className="mt-4 mb-4">
                    155 Great N Rd, Five Dock NSW 2046
                  </p>
                </div>
              </form>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.9297968061514!2d151.12838061564497!3d-33.865700080657064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a52661026bb1%3A0xc93b4f7bfb3254ef!Joey's&#39;s%20Bootcamp%20and%20Boxing!5e0!3m2!1sen!2sau!4v1669458023211!5m2!1sen!2sau"
                width="100%"
                style={{
                  maxWidth: "100%",
                  border: "0",
                }}
                height="450"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
