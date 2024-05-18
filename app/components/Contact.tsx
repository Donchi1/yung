"use client";
import React from "react";
import Text from "./custom/Text";
import { HiOutlineMapPin, HiOutlinePhone } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import Input from "./custom/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Toast from "@/utils/Alert";
import { PrimaryButton } from "./custom/Buttons";
import TextArea from "./custom/TextArea";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/db/firebaseDb";

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      subject: "",
      message: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name Field Required"),
      phone: Yup.string().required("Phone Field Required"),
      subject: Yup.string().optional(),
      message: Yup.string().required("Message Field Is Required"),
      email: Yup.string()
        .email()
        .trim()
        .lowercase()
        .required("Email Field is required"),
    }),
    onSubmit: (values) => handleFormSubmit(values),
  });

  const handleFormSubmit = async (val: { [key: string]: any }) => {
    try {
      //create user on firestore
      await addDoc(collection(db, "contacts"), {
        ...val,
        uid: auth.currentUser ? auth.currentUser?.uid : Date.now(),
        status: "success",
        filterDate: new Date().toLocaleDateString(),
        date: serverTimestamp(),
      });
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.success.fire({
        text: "Thanks for contacting us. We will get back to you soon.",
      });
    } catch (err) {
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.success.fire({ text: "An error occured" });
    }
  };

  const {
    values,
    errors,
    handleSubmit,
    getFieldProps,
    setFieldValue,
    isSubmitting,
    touched,
  } = formik;

  return (
    <section className="w-full min-h-screen bg-[#0f171f] pt-10">
      <div className="my-container">
        <div className="flex items-center gap-14 flex-col lg:flex-row ">
          <div className="flex-1 space-y-10 ">
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="space-y-4"
            >
              <Text className="title">Contact Us</Text>
              <Text className="head">Get In touch With Us</Text>
              <Text className="!text-light-color/70">
                Contact us for more information about our products and
                services.Reach out to us if you have any question.
              </Text>
            </div>
            <hr color="gray" />
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="space-y-6"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary-color">
                  <HiOutlinePhone size={25} className="text-light-color" />
                </span>
                <div className="space-y-4">
                  <Text>Our Phone</Text>
                  <a
                    className="text-light-color/70 hover:text-primary-color transition-all duration-500 ease-linear"
                    href="tel:+447778942066"
                  >
                    +447778942066
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary-color">
                  <HiOutlineMail size={25} className="text-light-color" />
                </span>
                <div className="space-y-4">
                  <Text>Our Email</Text>
                  <a
                    className="text-light-color/70 hover:text-primary-color transition-all duration-500 ease-linear"
                    href="mailTo:support@yungglobal.pro"
                  >
                    support@yungglobal.pro
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="inline-flex justify-center items-center w-12 h-12 rounded-full bg-primary-color">
                  <HiOutlineMapPin size={25} className="text-light-color" />
                </span>
                <div className="space-y-4">
                  <Text>Our Address</Text>
                  <span className="text-light-color/70 hover:text-primary-color transition-all duration-500 ease-linear">
                    1770 NW 96th Ave, Doral, FL 33172, United States
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 contact-bg  h-screen ">
            <form
              data-aos="fade-left"
              data-aos-duration="3000"
              className="px-4 lg:px-14 grid grid-cols-2 grid-rows-subgrid gap-8 content-center h-screen"
              onSubmit={handleSubmit}
            >
              <Input
                className=""
                placeholder="Name"
                error={touched.name && errors.name}
                {...getFieldProps("name")}
                value={values.name}
              />
              <Input
                className=""
                placeholder="Your Email"
                error={touched.email && errors.email}
                {...getFieldProps("email")}
                value={values.email}
              />
              <Input
                className=""
                placeholder="Phone Number"
                error={touched.phone && errors.phone}
                {...getFieldProps("phone")}
                value={values.phone}
              />
              <Input
                className=""
                placeholder="Subject"
                error={touched.subject && errors.subject}
                {...getFieldProps("subject")}
                value={values.subject}
              />
              <div className="col-start-1 col-end-3 ">
                <TextArea
                  rows={4}
                  cols={3}
                  placeholder="Write a message"
                  error={touched.message && errors.message}
                  {...getFieldProps("message")}
                  value={values.message}
                />
              </div>
              <div className="col-start-1 col-end-3 ">
                <PrimaryButton
                  disabled={isSubmitting}
                  className="!w-full"
                  title="Contact Us"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
