import React from "react";
import Text from "./custom/Text";
import Image from "next/image";
import { LinkButton } from "./custom/Buttons";

function Cta() {
  return (
    <section className="w-full  pb-20">
      <div className="my-container py-8 lg:py-0 h-auto lg:h-[75vh]  bg-primary-color px-6 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-6">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="space-y-8"
          >
            <Text className="title !text-white">Get Started</Text>
            <Text className="head">Global shipping and delivery made easy</Text>
            <Text>
              Global shipping and delivery of good and services to your door
              step in due time
            </Text>
            <div className="flex gap-4 items-center">
              <LinkButton
                to="/services"
                className="!bg-light-color hover:!bg-main-bg !text-primary-color"
                title="Our Services"
              />
              <LinkButton
                to="/contact"
                className="!bg-main-bg hover:!bg-light-color"
                title="Contact Us"
              />
            </div>
          </div>
          <div data-aos="fade-left" data-aos-duration="3000">
            <Image
              className="w-[700px]"
              alt="container"
              src={"/imgs/shipping-container.png"}
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
