"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Toast from '@/utils/Alert'
import { doc, DocumentData, getDoc, updateDoc } from 'firebase/firestore'
import { auth, db, storage } from "@/db/firebaseDb"
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'
import * as Yup from "yup"
import { useFormik } from 'formik'

import { PrimaryButton } from './custom/Buttons'


export default function ProfileCard({ user, action, id }: { id?: string | undefined | string[], user: DocumentData | null | undefined, action?: Boolean }) {

console.log(user)

  const [file, setFile] = useState<Blob | File | null>(null);
  const [fileLoading, setFileLoading] = useState(false);


  const updatePhoto = async () => {
    if (file === null) return Toast.error.fire({ text: "Photo cannot be empty" })
    setFileLoading(true)
    const storageRef = ref(storage, `users/${action ? id : auth.currentUser?.uid}`);
    try {

      await uploadBytes(storageRef, file as Blob | Uint8Array | ArrayBuffer);
      const url = await getDownloadURL(storageRef);

      await updateDoc(doc(db, "users", action ? id as string : auth.currentUser?.uid || ""), {
        photo: url,
      });
      Toast.success.fire({ text: "Photo successfully updated" });
      setFileLoading(false)
      setFile(null)
    } catch (err: any) {
      Toast.error.fire({ text: err });
      setFileLoading(false)
      setFile(null)
    }
  }
  const formikAction = useFormik({
    initialValues: {
      initialDeposit: "",
      mainBalance: "",
      interestBalance: "",
      disableWithdrawal: true,
      profit: "",
      accessCode: "",
      // verified: false,
      // verificationCode: ""
    },

    validationSchema: Yup.object({
      initialDeposit: Yup.string().required("Field required"),
      mainBalance: Yup.string().required("Field required"),
      interestBalance: Yup.string().required("Field required"),
      disableWithdrawal: Yup.bool().oneOf([true, false]).required("Field required"),
      accessCode: Yup.string(),
      profit: Yup.string(),
      // verified:Yup.bool().oneOf([true, false]).required("Field required"),
      // verificationCode: Yup.string()

    }),

    onSubmit: (values) => handleSubmitActionUpdate(values),
  });

  const handleSubmitActionUpdate = async (val: any) => {
    try {
      await updateDoc(doc(db, `users/${id}`), { ...val, disableWithdrawal: val.disableWithdrawal === "true" ? true : false })
      formikAction.setSubmitting(false)
      Toast.success.fire({ text: "Update Successful" })
    } catch (error: any) {
      formikAction.setSubmitting(false)
      Toast.error.fire({ text: error.message })
    }
  }

  useEffect(() => {
    const setInfo = () => {
      getDoc(doc(db, `users/${id as string}`))
        .then((doc) => {
          const userInfo = doc.data();
          formikAction.setValues({
            initialDeposit: userInfo?.initialDeposit || userInfo?.initialDeposite,
            accessCode: userInfo?.accessCode,
            disableWithdrawal: userInfo?.disableWithdrawal,
            profit: userInfo?.profit,
            interestBalance: userInfo?.interestBalance || userInfo?.bonus,
            mainBalance: userInfo?.mainBalance,
            // verified: userInfo?.verified,
            // verificationCode: userInfo?.verificationCode

          })

        })
        .catch((error: any) => {
          console.log(error);
        });
    };
    setInfo();
  }, [id]);

  return (
    <>

      
      <div className="bg-sec-bg p-4 rounded-lg">
        <div className="flex flex-wrap justify-center text-white">
          <label htmlFor='profile' className="hover:cursor-pointer ">
            <Image width={500} className="rounded-lg" height={400} src={file ? URL.createObjectURL(file as Blob) : user?.photo} alt="profile" />
            <input
              hidden={true}
              className="w-full rounded-lg font-medium bg-transparent border border-[#304ffe] text-white text-sm focus:outline-none focus:bg-opacity-10  mt-2"
              type="file"
              color="purple"
              name="img"
              id="profile"
              onChange={(e) => setFile(e.target.files && e.target.files[0])}
            />
          </label>
        </div>
        <div className="mt-4">
          <div className='flex justify-between  items-center'>

            <h5 className="text-gray-400 font-bold text-lg">
              {' '}
              {user?.firstname} {user?.lastname}
            </h5>

            <div className="capitalize text-white  ">
              {/* <Icon name="work" size="xl" /> */}
              {user?.occupation}
            </div>
          </div>
          <div className=" text-white mt-3 ">
            Joined At{" "}
            {new Date(user?.date?.toDate()).toDateString()}
          </div>
        </div>

        <div className="mb-8 mt-2 border-t text-center px-2 border-gray-700">

        </div>

        <div>
          <div className="w-full flex justify-center mt-3 gap-2">
            <PrimaryButton className='!w-full hover:!bg-gradient-to-tl !bg-gradient-to-tr !from-main-color !to-sec-bg' type='button' onClick={updatePhoto} title='Update Photo' showLoadingIcon={fileLoading} />
          </div>
        </div>
      </div>
    </>
  )
}
