"use client";
import React from "react";
import ScreenContainer from "./ScreenContainer";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Fade } from "react-awesome-reveal";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactForm = (props) => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed")
      .required("First name is required"),

    lastName: Yup.string()
      .matches(/^[A-Za-z\s]+$/, "Only alphabets and spaces are allowed")
      .required("Last name is required"),
    phoneNumber: Yup.string()
      .matches(/^[+]?[\d\s\-().]{6,15}$/, "Invalid phone number")
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    yourMessage: Yup.string()
      .max(200, "Message must not exceed 200 characters")
      .required("Message is required"),
    agree: Yup.boolean().oneOf([true], "You must agree to continue"),
  });
  const { data } = props;
  const { title, subTItleTop, btnLabel, para, isShowBg } = data;

  return (
    <div
      className={`py-[40px] sm:py-[60px] lg:py-[80px] ${
        isShowBg ? "bg-[#FDF6F6] dark:bg-slate-400" : ""
      }`}
    >
      <Fade direction="up" cascade={true} triggerOnce={true} delay={100}>
        <ScreenContainer>
          <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-[16px] sm:gap-[30px] lg:flex-row lg:gap-[60px]">
            <div className="flex flex-col gap-[8px]">
              <h2 className="mainHeading dark:text-white">{title}</h2>
              <h4 className="sub-heading dark:text-white">{subTItleTop}</h4>
              <Button
                pill
                className="!w-[250px] bg-[#FB6542] dark:bg-[#FB6542]"
              >
                <a href="tel:0312-9047134">{btnLabel}</a>
              </Button>
            </div>
            <div className="">
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  phoneNumber: "",
                  yourMessage: "",
                  email: "",
                  agree: false,
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { resetForm, setSubmitting }) => {
                  try {
                    const response = await fetch("/api/send-email", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(values),
                    });
                    const responseSendThanks = await fetch("/api/send-email-thanks", {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(values),
                    });

                    const data = await response.json();
                    const dataSendThanks = await responseSendThanks.json();

                    if (response.ok && responseSendThanks.ok) {
                      toast.success("Email sent successfully!");
                      resetForm();
                    } else {
                      toast.error(`Failed to send email: ${data.error}`);

                    }
                  } catch (error) {
                    toast.error(
                      "Something went wrong! Please try again later."
                    );
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ handleChange, handleBlur, values, isSubmitting }) => (
                  <Form className="flex max-w-md flex-col gap-4">
                    <p className="sub-heading dark:text-white">{para}</p>

                    {/* First Name */}
                    <div>
                      <Label htmlFor="firstName" value="First Name" />
                      <TextInput
                        id="firstName"
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <ErrorMessage
                        name="firstName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <Label htmlFor="lastName" value="Last Name" />
                      <TextInput
                        id="lastName"
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      <ErrorMessage
                        name="lastName"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Label htmlFor="phoneNumber" value="Phone Number" />
                      <TextInput
                        id="phoneNumber"
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" value="Your email" />
                      <TextInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="name@flowbite.com"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="yourMessage" value="Your message" />
                      <Textarea
                        id="yourMessage"
                        name="yourMessage"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.yourMessage}
                        placeholder="Leave a message..."
                        rows={4}
                      />
                      <ErrorMessage
                        name="yourMessage"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                    {/* Checkbox */}
                    <div className="flex flex-col">
                      <div className="flex items-center gap-2">
                        <Field
                          type="checkbox"
                          id="agree"
                          name="agree"
                          as={Checkbox}
                        />
                        <Label htmlFor="agree">
                          I agree to the privacy policy, terms of service, and
                          to receive communications.
                        </Label>
                      </div>

                      <ErrorMessage
                        name="agree"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="bg-[#FB6542] dark:bg-[#FB6542]"
                      disabled={isSubmitting} 
                    >
                       {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </ScreenContainer>
      </Fade>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
