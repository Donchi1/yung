"use client";
import React from "react";
import Text from "./custom/Text";
import Input from "./custom/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import Select from "./custom/Select";
import { PrimaryButton } from "./custom/Buttons";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/db/firebaseDb";
import Toast from "@/utils/Alert";

function Quotation() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      freightType: "",
      departureCity: "",
      deliverCity: "",
      phone: "",
      weight: "",
      volume: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      departureCity: Yup.string().required(),
      deliverCity: Yup.string().required(),
      phone: Yup.string().required(),
      weight: Yup.string().required(),
      volume: Yup.string().required(),
      freightType: Yup.string()
        .oneOf(
          ["air-freight", "ocean-freight", "train-freight", "land-freight"],
          ""
        )
        .required(),
    }),
    onSubmit: async (values) => {
      const quotaRef = collection(db, "quotations");
      try {
        await addDoc(quotaRef, {
          ...values,
          date: serverTimestamp(),
        });
        formik.setSubmitting(false);
        formik.resetForm();
        Toast.success.fire({
          text: "Your request has been send successfully. We wil get back to you as soon as possible.",
        });
      } catch (error: any) {
        formik.setSubmitting(false);
        formik.resetForm();
        Toast.error.fire({ text: "Something went wrong" });
      }
    },
  });

  const {
    errors,
    values,
    handleSubmit,
    isSubmitting,
    touched,
    getFieldProps,
    setFieldValue,
  } = formik;

  return (
    <section className="w-full  pt-20 mb-20">
      <div className="my-container bg-[#0f171f]">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="bg-cover bg-center bg-no-repeat h-screen w-full lg:w-[50%]"
            style={{
              backgroundImage: "url(/imgs/engineer-workers-man-and-woman.jpg)",
            }}
          ></div>
          <div
            data-aos="fade-left"
            data-aos-duration="3000"
            className="space-y-8 px-6 pb-4"
          >
            <Text className="title">Quotation</Text>
            <Text className="head">Move your product</Text>
            <form
              className="grid grid-cols-2 grid-rows-subgrid gap-8 "
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
              <Select
                className=" first-of-type:!text-light-color/60"
                error={touched.freightType && errors.freightType}
                {...getFieldProps("freightType")}
                value={values.freightType}
              >
                <option value="">Freight Type</option>
                <option value="air-freight">Air Freight</option>
                <option value="ocean-freight">Ocean Freight</option>
                <option value="train-freight">Train Freight</option>
                <option value="land-freight">Land Freight</option>
              </Select>
              <Input
                className=""
                placeholder="Departure City"
                error={touched.departureCity && errors.departureCity}
                {...getFieldProps("departureCity")}
                value={values.departureCity}
              />
              <Input
                className=""
                placeholder="DeliverCity"
                error={touched.deliverCity && errors.deliverCity}
                {...getFieldProps("deliverCity")}
                value={values.deliverCity}
              />
              <Input
                className=""
                placeholder="Weight"
                error={touched.weight && errors.weight}
                {...getFieldProps("weight")}
                value={values.weight}
              />
              <Input
                className=""
                placeholder="Volume"
                error={touched.volume && errors.volume}
                {...getFieldProps("volume")}
                value={values.volume}
              />

              <PrimaryButton
                showLoadingIcon={isSubmitting}
                disabled={isSubmitting}
                className="!w-full !col-span-2"
                title="Get A Quote"
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Quotation;
