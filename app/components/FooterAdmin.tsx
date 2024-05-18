import Link from "next/link";

export default function FooterAdmin() {
  return (
    <section className="py-6 px-16 flex   border-t border-gray-600  bg-sec-bg">
      <div className="xl:w-[82%] ml-auto w-full">

        <div className="font-light flex flex-col ml-auto lg:flex-row justify-between items-center ">

          <p className="text-white mb-6 lg:mb-0 self-center">
            Copyright &copy; {new Date().getFullYear()}{' '}
            <Link
              href="/"
              className="text-main-color "
            >
              Yung Global
            </Link>
          </p>

          <ul className="list-unstyled flex">
            <li className="mr-6">
              <Link
                className="text-white hover:text-main-color transition-all ease-linear duration-500 font-medium block text-sm"
                href="/about"
              >
                About Us
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-white hover:text-main-color transition-all ease-linear duration-500 font-medium block text-sm"
                href="/services"
              >
               Services
              </Link>
            </li>
            <li className="mr-6">
              <Link
                className="text-white hover:text-main-color transition-all ease-linear duration-500 font-medium block text-sm"
                href="/tracking"
              >
               Tracking
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:text-main-color transition-all ease-linear duration-500 font-medium block text-sm"
                href="/contact"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
