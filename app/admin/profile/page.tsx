"use client";
import { updatePassword, User } from "firebase/auth";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Accord from "@/app/components/Accord";
import AdminNav from "@/app/components/AdminNav";
import AdminSidebar from "@/app/components/AdminSidebar";
import { auth, db, storage } from "@/app/../db/firebaseDb";
import Toast from "@/utils/Alert";
import createNotification from "@/utils/createNotification";
import SettingsForm from "@/app/components/SettingsForm";
import ProfileCard from "@/app/components/ProfileCard";
import useGetDocument from "@/app/components/hooks/UseDocument";

function Profile() {
  const [currentUser] = useGetDocument("users", auth.currentUser?.uid || "yuu", {snap: true, user: true});

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phoneNumber: "",
    loading: false,
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    repeatPassword: "",
    newPassword: "",
    loading: false,
  });
  const [fileData, setFileData] = useState<{
    file: Blob | string;
    fileUpl?: Blob | string;
    loading: boolean;
  }>({
    file: "",
    fileUpl: "",
    loading: false,
  });



  useEffect(() => {
    setFormData({
      ...formData,
      email: currentUser?.email,
      firstname: currentUser?.firstname,
      lastname: currentUser?.lastname,
      phoneNumber: currentUser?.phoneNumber,
    });
    setFileData({ ...fileData, file: currentUser?.photo });
  }, [currentUser]);

  const handleFileChange = (file: any) => {
    const reader = URL.createObjectURL(file);

    setFileData({ ...fileData, fileUpl: file, file: reader });
  };

  const handleImgUpload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFileData({ ...fileData, loading: true });
    try {
      const storageRef = ref(storage, `users/${auth.currentUser?.uid}`);
      await uploadBytes(
        storageRef,
        fileData.fileUpl as Blob | Uint8Array | ArrayBuffer
      );
      const url = await getDownloadURL(storageRef);

      await updateDoc(doc(db, "users", auth.currentUser?.uid || ""), {
        photo: url,
      });
      setFileData({ ...fileData, loading: false });
      Toast.success.fire({ text: "Update successful" });
    } catch (err: any) {
      setFileData({ ...fileData, loading: false });
      Toast.error.fire({ text: err.message });
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormData({ ...formData, loading: true });
    const { firstname, lastname, email, phoneNumber } = formData;

    try {
      //create user on firestore

      await updateDoc(doc(db, "users", auth.currentUser?.uid as string), {
        firstname,
        lastname,
        email,
        phoneNumber,
      });
      await createNotification({
        text: "Profile successfully updated",
        title: "Profile Update",
      });
      setFormData({ ...formData, loading: false });
      Toast.success.fire({ text: "update success" });
    } catch (err: any) {
      setFormData({ ...formData, loading: false });
      Toast.error.fire({ text: err.message });
    }
  };
  const handleSubmitPassword = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.repeatPassword)
      return Toast.error.fire({ text: "password must match" });
    setPasswordData({ ...passwordData, loading: true });

    try {
      //create user on firestore
      await updatePassword(auth.currentUser as User, passwordData.newPassword);
      await createNotification({
        text: "Password successfully updated",
        title: "Password Update",
      });
      setPasswordData({ ...passwordData, loading: false });
      Toast.success.fire({ text: "password successfully updated" });
    } catch (err: any) {
      setPasswordData({ ...passwordData, loading: false });
      Toast.error.fire({ text: err.message });
    }
  };

  return (
    <>
      <AdminNav />

      <div className="min-h-screen overflow-x-hidden bg-main-bg">
        <div className="flex mb-10">
          <AdminSidebar />
          <div className={`flex-[4] min-h-screen`}>
            <div className="my-container">
              <Accord title="Profile" />
 
          <div className="grid grid-cols-1 xl:grid-cols-6 gap-5">
            <div className="xl:col-start-1 xl:col-end-5  mb-16 lg:mt-0 mt-8">
              <SettingsForm user={currentUser} />
            </div>
            <div className="xl:col-start-5 xl:col-end-7  mb-16 lg:mt-0 mt-8">
              <ProfileCard  user={currentUser} />
            </div>
        </div>
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Profile;
