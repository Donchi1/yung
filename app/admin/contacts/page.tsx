"use client";
import React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import * as Icons from "react-icons/bs";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/db/firebaseDb";
import Toast from "@/utils/Alert";
import useCollection from "@/app/components/hooks/UseCollection";
import AdminSidebar from "@/app/components/AdminSidebar";
import Accord from "@/app/components/Accord";
import AdminNavbar from "@/app/components/AdminNav";
import FooterAdmin from "@/app/components/FooterAdmin";

function Contacts() {
  const [contacts, contactLoading, error] = useCollection("contacts");

  const handleDelete = async (id: string) => {
    //api call for delete
    try {
      await deleteDoc(doc(db, "contacts", id));

      Toast.success.fire({
        icon: "success",
        text: "contact successfully deleted",
      });
    } catch (err: any) {
      Toast.error.fire({ text: err.message });
    }
  };

  const column:GridColDef[] = [
    { field: "uid", headerName: "Id", width: 90 },
    {
      field: "username",
      headerName: "Name",
      width: 200,
    },
    {
      field: "subject",
      headerName: "Subject",
      width: 200,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      renderCell: (params) => (
        <span>{new Date(params.row.date.toDate()).toDateString()}</span>
      ),
    },
    {
      field: "message",
      headerName: "Message",
      width: 250,
      renderCell: (params) => (
        <span title={params.row.message}>{params.row.message.slice(0, 15)}...</span>
      ),
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Icons.BsTrash
              onClick={() => handleDelete(params.row.id)}
              size={24}
              style={{ cursor: "pointer" }}
              className="cursor-pointer text-danger ml-4"
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <AdminNavbar />

      <div className="min-h-screen overflow-x-hidden bg-main-bg">
        <div className="flex mb-10">
          <AdminSidebar />
          <div className={` min-h-screen w-[95%] lg:max-w-[78%] mx-auto lg:pr-6 pr-2`}>
            <div
              
            >
              <Accord title="Contacts" />

              <DataGrid
                columns={column}
                rows={contacts}
                autoHeight
                loading={contactLoading}
                getRowId={(row) => row.id}
                classes={{ columnHeaderTitle: "!text-primary-color" }}
                className="!bg-sec-bg [&_thead]:!bg-red-500  !text-light-color"
              ></DataGrid>
            </div>
          </div>
        </div>
      </div>
      <FooterAdmin />
    </>
  );
}

export default Contacts;


