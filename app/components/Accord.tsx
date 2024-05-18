import {
  addDoc,
  collection,
getDocs,
query,
serverTimestamp,
where,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import { db } from "@/db/firebaseDb";
import Toast from "@/utils/Alert";
import createNotification from "@/utils/createNotification";
import Modal from "./custom/Modal";
import {PrimaryButton} from "./custom/Buttons";
import { useFormik } from "formik";
import * as Yup from "yup"
import Input from "./custom/Input";
import Text from "./custom/Text";
import Select from "./custom/Select";

interface AccordProps {
btn?: boolean;
title: string;
}

interface FormData {
trackingId: string;
packageType: string;
shippingType: string;
charges: string;
expectedDeliveryDate: string;
registeredDate: string;
status: string;
packageWeight: string;
packageQuantity: string;
senderAddress: string;
receiverPhone: string;
senderFirstname: string;
senderLastname: string;
receiverFirstname: string;
receiverLastname: string;
receiverAddress: string;
receiverEmail: string;
senderEmail: string;
finalDestination: string;
currentLocation: string;
}

const Accord: React.FC<AccordProps> = ({ btn, title }) => {
const [openModal, setOpenModal] = useState(false);
const formik = useFormik({
  initialValues:{
  trackingId: "",
  packageType: "",
  shippingType: "",
  charges: "",
  expectedDeliveryDate: "",
  registeredDate: "",
  status: "",
  packageWeight: "",
  packageQuantity: "",
  senderAddress: "",
  receiverPhone: "",
  senderFirstname: "",
  senderLastname: "",
  receiverFirstname: "",
  receiverLastname: "",
  receiverAddress: "",
  receiverEmail: "",
  senderEmail: "",
  finalDestination: "",
  currentLocation: "",
},
validationSchema:Yup.object({
  trackingId: Yup.string().required(),
  packageType: Yup.string().required(),
  shippingType: Yup.string().oneOf(["international", "local"]).required(),
  charges: Yup.string().required(),
  expectedDeliveryDate: Yup.string().required(),
  registeredDate: Yup.string().required(),
  status: Yup.string().oneOf(["registered","dispatched","departed", "delivered"], "").required(),
  packageWeight: Yup.string().required(),
  packageQuantity: Yup.string().required(),
  senderAddress: Yup.string().required(),
  receiverPhone: Yup.string().required(),
  senderFirstname: Yup.string().required(),
  senderLastname: Yup.string().required(),
  receiverFirstname: Yup.string().required(),
  receiverLastname: Yup.string().required(),
  receiverAddress: Yup.string().required(),
  receiverEmail: Yup.string().required(),
  senderEmail: Yup.string().required(),
  finalDestination: Yup.string().required(),
  currentLocation: Yup.string().required(),
}),
onSubmit: async (values) => {
  try {
    const pkg = await getDocs(
      query(
        collection(db, "packages"),
        where("trackingId", "==", values.trackingId)
      )
    );
    if (pkg.size > 0) {
      formik.setSubmitting(false);
      return Toast.error.fire({
        text: "Package with this Tracking Id already exists",
        position: "center-right",
        customClass: { htmlContainer: "mySwalContainer" },
      });
    }
    await addDoc(collection(db, "packages"), {
      ...values,
      date: serverTimestamp(),
    });
    await createNotification({
      text: "You just added a new package",
      status: "success",
      title: "New Package",
    });
    formik.setSubmitting(false);
    Toast.success.fire({
      text: "Package successfully added",
      position: "center-right",
    });
  } catch (error: any) {
    formik.setSubmitting(false);
    Toast.error.fire({ text: error.message });
  }
},
});




const {values, errors, handleSubmit, getFieldProps, isSubmitting,setFieldValue, touched} = formik
return (
  <>
    <div className="mb-10 mt-14 flex justify-between items-center">
      <Text className="text-light-color font-bold text-[20px]">{title}</Text>
      {btn && (
        <PrimaryButton
          onClick={() => setOpenModal(true)}
          title="Create"
       />

      )}
    </div>
    <Modal onClose={() => setOpenModal(false)} open={openModal} title="Create Package" classes={{
        headerClassName:{containerClassName:"!pb-2"},
        modalWrapperClassName:"lg:!w-[90%] !w-[97%] "
        }}>

            <div>
              <hr className="hr" />
              <form className=" grid lg:grid-cols-2 gap-4 grid-rows-subgrid grid-cols-1 mt-2  rounded-lg" onSubmit={handleSubmit}>
          {Object.keys(values).map((key) => (
            <div key={key}>
              <label className="text-primary-color/60" htmlFor={key}>{key}</label>
              {key === 'shippingType' || key === 'status' ? (
                <Select onChange={(e) => setFieldValue(key, e.target.value)} error={touched[key] && errors[key]}>
                  {key === 'shippingType' ? (
                    <>
                    <option value="">Select ShippingType</option>
                      <option value="international">International</option>
                      <option value="local">Local</option>
                    </>
                  ) : (
                    <>
                    <option value="">Select Status</option>
                      <option value="registered">Registered</option>
                      <option value="dispatched">Dispatched</option>
                      <option value="departed">Departed</option>
                      <option value="delivered">Delivered</option>
                    </>
                  )}
                </Select>
              ) : (
                <Input {...getFieldProps(key)} type="text" error={touched[key as keyof typeof values] && errors[key as keyof typeof values]} />
              )}
            </div>
          ))}
                <div className="row-span-3 mt-4">
                  <PrimaryButton
                    className="!w-full"
                    type="submit"
                    disabled={isSubmitting}
                    title="Submit"
                    showLoadingIcon={isSubmitting}
                  />
                </div>
              </form>
            </div>

    </Modal>
  </>
);
};

export default Accord;
