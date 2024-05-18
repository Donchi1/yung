"use client"
import React, { useEffect, useState } from "react";
import { DataGrid,GridColDef } from "@mui/x-data-grid";
import * as Icons from "react-icons/bs";
import { deleteDoc, doc, DocumentData, updateDoc } from "firebase/firestore";
import { db } from "@/db/firebaseDb";
import Toast from "@/utils/Alert";
import useCollection from "@/app/components/hooks/UseCollection";
import AdminSidebar from "@/app/components/AdminSidebar";
import Accord from "@/app/components/Accord";
import AdminNavbar from "@/app/components/AdminNav";
import FooterAdmin from "@/app/components/FooterAdmin";

function Subcribers() {
  const [subcribers, subcriberLoading, error] = useCollection("subcribers");

  const handleDelete = async (id: string) => {
    //api call for delete
    try {
      await deleteDoc(doc(db, "subcribers", id));

      Toast.success.fire({
        icon: "success",
        text: "subcriber successfully deleted",
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
      field: "email",
      headerName: "Email",
      width: 200,
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      renderCell: (params: any) => {
        return <span>{new Date(params.row.date.toDate()).toDateString()}</span>;
      },
    },

    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params: any) => {
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
            <div >
              <Accord title="Subcribers" />

              <DataGrid
                columns={column}
                rows={subcribers}
                autoHeight
                loading={subcriberLoading}
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

export default Subcribers;
