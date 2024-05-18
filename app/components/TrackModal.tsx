import { DocumentData } from "firebase/firestore";
import Image from "next/image";
import React from "react";
import { FaCheck } from "react-icons/fa";
import Modal from "./custom/Modal";
import Text from "./custom/Text";

type modalTypes = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  packageInfo: DocumentData;
};

const trackImg = [
  {
    status: "registered",
    label: "Registered",
    imgSrc: "/imgs/delivery-man.png",
  },
  { status: "departed", label: "Departed", imgSrc: "/imgs/airplane.png" },
  {
    status: "dispatched",
    label: "Dispatched",
    imgSrc: "/imgs/fast-delivery.png",
  },
  { status: "delivered", label: "Delivered", imgSrc: "/imgs/deliver.png" },
];
function TrackModal({ openModal, setOpenModal, packageInfo }: modalTypes) {
  return (
    <Modal
      title="Package Informations"
      classes={{
        modalWrapperClassName: "!w-[95%]",
        headerClassName: { containerClassName: "!py-3 !px-4" },
        modalContentClassName: "mx-0 !p-0 lg:!mx-4",
      }}
      open={openModal}
      onClose={() => setOpenModal(false)}
    >
      <div className="mt-4">
        <hr className="hr" />
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-1">
          <div className="basis-[70%] space-y-6 p-4">
            <div className="sender mt-4">
              <Text className="!text-primary-color !text-[18px]">Sender</Text>
              <div className="grid lg:grid-cols-4 grid-rows-subgrid space-y-2 lg:space-y-0 grid-cols-1 [&_span]:text-light-color [&_p]:text-light-color/70 mt-1 ">
                <div className="flex lg:block justify-between ">
                  <span>Firstname</span>
                  <p>{packageInfo?.senderFirstname}</p>
                </div>

                <div className="flex lg:block justify-between ">
                  <span>Lastname</span>
                  <p>{packageInfo?.senderLastname}</p>
                </div>

                <div className="flex lg:block justify-between ">
                  <span>Email</span>
                  <p>{packageInfo?.senderEmail}</p>
                </div>

                <div className="flex lg:block justify-between ">
                  <span>Adddress</span>
                  <p>{packageInfo?.senderAddress}</p>
                </div>
              </div>
            </div>
            <div className="sender">
              <Text className="!text-primary-color !text-[18px]">Receiver</Text>
              <div className="grid lg:grid-cols-4 grid-rows-subgrid space-y-2 lg:space-y-0 grid-cols-1 [&_span]:text-light-color [&_p]:text-light-color/70 mt-1 ">
                <div className="flex lg:block justify-between ">
                  <span>Firstname</span>
                  <p>{packageInfo?.receiverFirstname}</p>
                </div>

                <div className="flex lg:block justify-between ">
                  <span>Lastname</span>
                  <p>{packageInfo?.receiverLastname}</p>
                </div>
                <div className="flex lg:block justify-between ">
                  <span>Email</span>
                  <p>{packageInfo?.receiverEmail}</p>
                </div>
                <div className="row d-lg-block justify-content-between  ">
                  <span className="col-4 ">Adddress</span>
                  <p>{packageInfo?.receiverAddress}</p>
                </div>
              </div>
            </div>
            <div className="sender ">
              <Text className="!text-primary-color !text-[18px]">
                Package Data
              </Text>
              <div className="grid lg:grid-cols-4 grid-rows-subgrid space-y-2 lg:space-y-0 grid-cols-1 [&_span]:text-light-color [&_p]:text-light-color/70 mt-1">
                <div className="flex lg:block justify-between ">
                  <span>Package Type</span>
                  <p>{packageInfo?.packageType}</p>
                </div>
                <div className="flex lg:block justify-between ">
                  <span>Id</span>
                  <p>{packageInfo?.trackingId}</p>
                </div>
                <div className="flex lg:block justify-between ">
                  <span>Weight</span>
                  <p>{packageInfo.packageWeight}</p>
                </div>
                <div className="flex lg:block justify-between ">
                  <span>Charge</span>
                  <p>{packageInfo.charges}</p>
                </div>
              </div>
            </div>
            <div className="sender ">
              <Text className="text-primary-color text-[18px]">Tracking</Text>
              <div className="grid lg:grid-cols-4 grid-rows-subgrid space-y-2 lg:space-y-0 grid-cols-1 [&_span]:text-light-color [&_p]:text-light-color/70 mt-1">
                <div className="flex lg:block justify-between ">
                  <span>Current Location</span>
                  <p>{packageInfo.currentLocation}</p>
                </div>
                <div className="flex lg:block justify-between ">
                  <span>Final Destination</span>
                  <p>{packageInfo?.finalDestination}</p>
                </div>
                <div className="flex lg:block justify-between ">
                  <span>Registered Date</span>
                  <p>{packageInfo?.registeredDate}</p>
                </div>
                <div className="flex lg:block justify-between ">
                  <span>Expected Delivery Date</span>
                  <p>{packageInfo.expectedDeliveryDate}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" basis-[100%] lg:basis-[30%] pb-2   bg-primary-color pt-4 flex justify-center items-center">
            <div className="location-content  flex justify-between flex-col">
              {trackImg.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    packageInfo?.status === item.status &&
                    "ring-1 bg-light-color/10 ring-green-600/30"
                  }  flex justify-center items-center flex-col   rounded-full size-[145px]`}
                >
                  <span className="text-light-color font-bold tracking-wider inline-block mb-2">
                    {item.label}
                  </span>
                  <Image
                    width={80}
                    height={80}
                    src={item.imgSrc}
                    alt={item.label.toLowerCase()}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default TrackModal;
