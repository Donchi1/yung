"use client";
import React, { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as Icons from "react-icons/bs";
import {
  deleteDoc,
  doc,
  DocumentData,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/db/firebaseDb";
import Toast from "@/utils/Alert";
import useCollection from "@/app/components/hooks/UseCollection";
import AdminSidebar from "@/app/components/AdminSidebar";
import Accord from "@/app/components/Accord";
import AdminNavbar from "@/app/components/AdminNav";
import * as Yup from "yup";
import { useFormik } from "formik";
import { PrimaryButton } from "@/app/components/custom/Buttons";
import Input from "@/app/components/custom/Input";
import Modal from "@/app/components/custom/Modal";
import { BiTrash } from "react-icons/bi";
import FooterAdmin from "@/app/components/FooterAdmin";
import Select from "@/app/components/custom/Select";

function Packages() {
  const [packages, packageLoading, error] = useCollection("packages");

  const [id, setId] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const formik = useFormik({
    initialValues: {
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
    validationSchema: Yup.object({
      trackingId: Yup.string().required(),
      packageType: Yup.string().required(),
      shippingType: Yup.string().required(),
      charges: Yup.string().required(),
      expectedDeliveryDate: Yup.string().required(),
      registeredDate: Yup.string().required(),
      status: Yup.string().required(),
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
    onSubmit: (values) => handleFormSubmit(values),
  });

  const handleEdit = (id: string) => {
    const data = packages.find((each) => each.id === id);
    formik.setValues(data as any);
    setId(id);
    setOpenModal(true);
  };

  const handleFormSubmit = async (data: any) => {
    try {
      await updateDoc(doc(db, `packages/${id}`), {
        ...data,
        date: serverTimestamp(),
      });
      formik.resetForm();
      Toast.success.fire({ text: "package successfully updated" });
    } catch (error: any) {
      formik.resetForm();
      Toast.error.fire({ text: error.message });
    }
  };

  const handleDelete = async (id: string) => {
    //api call for delete
    try {
      await deleteDoc(doc(db, "packages", id));

      Toast.success.fire({
        icon: "success",
        text: "package successfully deleted",
      });
    } catch (err: any) {
      Toast.error.fire({ text: err.message });
    }
  };
  const column: GridColDef[] = [
    { field: "trackingId", headerName: "Id", width: 90 },
    {
      field: "receiverFirstname",
      headerName: "reciever",
      width: 120,
    },
    {
      field: "receiverLastname",
      headerName: "reciever",
      width: 120,
    },
    {
      field: "receiverEmail",
      headerName: "ReceiverEmail",
      width: 200,
    },
    {
      field: "receiverPhone",
      headerName: "Phone",
      width: 150,
    },
    {
      field: "status",
      headerName: "status",
      width: 100,
    },
    {
      field: "charges",
      headerName: "Price",
      width: 100,
    },
    {
      field: "registeredDate",
      headerName: "Date",
      width: 200,
    },
    {
      field: "currentLocation",
      headerName: "CurrentLocation",
      width: 200,
    },
    {
      field: "expectedDeliveryDate",
      headerName: "DeliveryDate",
      width: 200,
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button
              onClick={() => handleEdit(params.row.id)}
              className=" text-light-color px-4 py-2  "
            >
              Edit
            </button>
            <button
              onClick={() => handleDelete(params.row.id)}
              className="cursor-pointer text-primary-color "
            >
              <BiTrash />
            </button>
          </>
        );
      },
    },
  ];
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
    <>
      <AdminNavbar />

      <div className="min-h-screen overflow-x-hidden bg-main-bg">
        <div className="flex mb-10">
          <AdminSidebar />
          <div className={` min-h-screen w-[95%] lg:max-w-[78%] mx-auto lg:pr-6 pr-2`}>
            <div className="">
              <Accord title="Packages" btn />

              <DataGrid
                columns={column}
                rows={packages}
                autoHeight
                loading={packageLoading}
                getRowId={(row) => row.id}
                classes={{ columnHeaderTitle: "!text-primary-color" }}
                className="!bg-sec-bg [&_thead]:!bg-red-500  !text-light-color"
              ></DataGrid>
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />

      <Modal
        onClose={() => setOpenModal(false)}
        title="Edit Package"
        classes={{
          headerClassName: { containerClassName: "!pb-2" },
          modalWrapperClassName: "lg:!w-[90%] !w-[97%]",
        }}
        open={openModal}
        className={`modal-box ${openModal && "active-show"}`}
      >
        <div>
          <hr className="hr" />
          <form
            className=" grid lg:grid-cols-2 gap-4 grid-rows-subgrid grid-cols-1  rounded-lg"
            onSubmit={handleSubmit}
          >
            {Object.keys(values).map((key) => (
              <div key={key}>
                <label className="text-primary-color/60" htmlFor={key}>
                  {key}
                </label>
                {key === "shippingType" || key === "status" ? (
                  <Select
                    onChange={(e) => setFieldValue(key, e.target.value)}
                    error={touched[key] && errors[key]}
                  >
                    {key === "shippingType" ? (
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
                  <Input
                    {...getFieldProps(key)}
                    type="text"
                    error={
                      touched[key as keyof typeof values] &&
                      errors[key as keyof typeof values]
                    }
                  />
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
}

export default Packages;
