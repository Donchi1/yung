"use client";
import React, { useState } from "react";
import Input from "./custom/Input";
import { PrimaryButton } from "./custom/Buttons";
import Text from "./custom/Text";
import { useFormik } from "formik";
import * as Yup from "yup";
import TrackModal from "./TrackModal";
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/db/firebaseDb";
import Toast from "@/utils/Alert";
import { ImSpinner3 } from "react-icons/im";

function Tracking() {
  const [openTrack, setOpenTrack] = useState(false);
  const [packageInfo, setPackageInfo] = useState<DocumentData>({});

  const formik = useFormik({
    initialValues: {
      trackingCode: "",
    },
    validationSchema: Yup.object({
      trackingCode: Yup.string().required(),
    }),
    onSubmit: (values) => handleTracking(values),
  });

  const handleTracking = async (values: { [key: string]: any }) => {
    try {
      const docData = await getDocs(
        query(
          collection(db, "packages"),
          where("trackingId", "==", values.trackingCode)
        )
      );
      if (docData.empty) {
        formik.setSubmitting(false);
        return Toast.error.fire({ text: "No shipment found" });
      }
      setOpenTrack(true);
      setPackageInfo(docData.docs[0].data());
      formik.resetForm();
      formik.setSubmitting(false);
    } catch (err) {
      formik.setSubmitting(false);
      formik.resetForm();
      Toast.error.fire({ text: "Something went wrong" });
    }
  };

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
    <>
      <section className="w-full  pt-20 mb-20">
        <div className="my-container bg-[#0f171f]">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div
              data-aos="fade-right"
              data-aos-duration="3000"
              className="bg-cover bg-center bg-no-repeat h-[70vh] w-full lg:w-[50%]"
              style={{
                backgroundImage: "url(/imgs/ship_container_in_sea.jpg)",
              }}
            ></div>
            <div
              data-aos="fade-left"
              data-aos-duration="3000"
              className="space-y-8 px-6 pb-4"
            >
              <Text className="title">Tracking</Text>
              <Text className="head">Get Product Information</Text>
              <form
                className="grid grid-cols-1  gap-8 "
                onSubmit={handleSubmit}
              >
                <Input
                  className=""
                  placeholder="Enter Tracking ID"
                  error={touched.trackingCode && errors.trackingCode}
                  {...getFieldProps("trackingCode")}
                  value={values.trackingCode}
                />
                <PrimaryButton
                  showLoadingIcon={isSubmitting}
                  type="submit"
                  disabled={isSubmitting}
                  className="!w-full "
                  title="Track Now"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <TrackModal
        packageInfo={packageInfo}
        openModal={openTrack}
        setOpenModal={setOpenTrack}
      />
    </>
  );
}

export default Tracking;
