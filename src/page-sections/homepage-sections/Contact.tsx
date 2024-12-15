import { FC } from "react";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import SectionDirectDiv from "../../components/UI/SectionDirectDiv";
import TextInput from "../../components/CustomInputs/TextInput";
import SelectInput from "../../components/CustomInputs/SelectInput";
import classes from "./Contact.module.css";

const Contact: FC = () => {
  return (
    <section className={classes["contact-section"]} id="contact">
      <SectionDirectDiv>
        <div className={classes["contact-top"]}>
          <h1>Contact Me</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            messageCategory: "",
            phoneNumber: "",
            message: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .matches(
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                'Enter a valid email address'
              )
              .required("Required"),
            phoneNumber: Yup.string()
              .matches(
                /^\+(\d.*){10,}$/,
                'Phone number must start with a "+" and contain at least 10 digits'
              )
              .required("Required"),
            messageCategory: Yup.string()
              .oneOf(
                ["hire", "collaboration", "complaint", "other"],
                "Invalid Job Type"
              )
              .required("Required"),
            message: Yup.string()
              .min(10, "Message must be at least 10 characters long.")
              .max(500, "Message cannot exceed 500 characters.")
              .required("Required"),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <TextInput
              label="First Name"
              name="firstName"
              type="text"
              placeholder="First Name"
            />

            <TextInput
              label="Last Name"
              name="lastName"
              type="text"
              placeholder="Last Name"
            />

            <TextInput
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
            />

            <TextInput
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="Enter your phone number"
            />

            <SelectInput label="Message Category" name="messageCategory">
              <option value="">Select a category</option>
              <option value="hire">Hire</option>
              <option value="collaboration">Collaboration</option>
              <option value="complaint">Complaint</option>
              <option value="other">Other</option>
            </SelectInput>

            <TextInput
              label="Message"
              name="message"
              type="text"
              as="textarea"
              placeholder="Enter your message"
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </SectionDirectDiv>
    </section>
  );
};

export default Contact;
