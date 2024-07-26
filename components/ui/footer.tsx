import Link from "next/link";
import Logo from "./logo";
import Avatar01 from "@/public/images/QR2.png";
import Image from "next/image";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top area: Blocks */}
        <div
          className={`grid gap-10 py-8 sm:grid-cols-12 md:py-12 ${border ? "border-t [border-image:linear-gradient(to_right,transparent,theme(colors.slate.200),transparent)1]" : ""}`}
        >
          {/* 1st block */}
          <div className="space-y-2 sm:col-span-12 lg:col-span-4">
            <div dir="rtl">
            <Image
                  className="box-content"
                  src={Avatar01}
                  width={75}
                  height={75}
                  alt="Avatar 01"
                />
            </div>
            <div dir="rtl" className="text-sm text-gray-600">
              QRide.net - All rights reserved  &copy;
            </div>
          </div>

          {/* <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Pricing & Plans
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Changelog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Our method
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Diversity & Inclusion
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Financial statements
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h3 className="text-sm font-medium">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Terms of service
                </Link>
              </li>
              <li>
                <Link
                  className="text-gray-600 transition hover:text-gray-900"
                  href="#0"
                >
                  Report a vulnerability
                </Link>
              </li>
            </ul>
          </div> */

          // <div className="space-y-2 sm:col-span-6 md:col-span-3 lg:col-span-2">
          //   {/* <h3 className="text-sm font-medium">Social</h3> */}
          //   <ul dir="rtl" className="flex gap-1">
          //     <li>
          //       <Link
          //         className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
          //         href="#0"
          //         aria-label="Twitter"
          //       >
          //         <svg
          //           className="h-8 w-8 fill-current"
          //           viewBox="0 0 32 32"
          //           xmlns="http://www.w3.org/2000/svg"
          //         >
          //           <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z"></path>
          //         </svg>
          //       </Link>
          //     </li>
          //     <li>
          //       <Link
          //         className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
          //         href="#0"
          //         aria-label="Medium"
          //       >
          //         <svg
          //           className="h-8 w-8 fill-current"
          //           viewBox="0 0 32 32"
          //           xmlns="http://www.w3.org/2000/svg"
          //         >
          //           <path d="M23 8H9a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1Zm-1.708 3.791-.858.823a.251.251 0 0 0-.1.241V18.9a.251.251 0 0 0 .1.241l.838.823v.181h-4.215v-.181l.868-.843c.085-.085.085-.11.085-.241v-4.887l-2.41 6.131h-.329l-2.81-6.13V18.1a.567.567 0 0 0 .156.472l1.129 1.37v.181h-3.2v-.181l1.129-1.37a.547.547 0 0 0 .146-.472v-4.749a.416.416 0 0 0-.138-.351l-1-1.209v-.181H13.8l2.4 5.283 2.122-5.283h2.971l-.001.181Z"></path>
          //         </svg>
          //       </Link>
          //     </li>
          //     <li>
          //       <Link
          //         className="flex items-center justify-center text-blue-500 transition hover:text-blue-600"
          //         href="#0"
          //         aria-label="Github"
          //       >
          //           {/* <svg
          //             className="h-8 w-8 fill-current"
          //             viewBox="0 0 32 32"
          //             xmlns="http://www.w3.org/2000/svg"
          //           >
          //             <path d="M16 2.88c-3.88 0-4.36.014-5.87.084-1.5.069-2.526.309-3.41.656a6.81 6.81 0 00-2.46 1.63 6.81 6.81 0 00-1.63 2.46c-.347.884-.587 1.91-.656 3.41-.07 1.51-.084 1.99-.084 5.87s.014 4.36.084 5.87c.069 1.5.309 2.526.656 3.41a6.81 6.81 0 001.63 2.46 6.81 6.81 0 002.46 1.63c.884.347 1.91.587 3.41.656 1.51.07 1.99.084 5.87.084s4.36-.014 5.87-.084c1.5-.069 2.526-.309 3.41-.656a6.81 6.81 0 002.46-1.63 6.81 6.81 0 001.63-2.46c.347-.884.587-1.91.656-3.41.07-1.51.084-1.99.084-5.87s-.014-4.36-.084-5.87c-.069-1.5-.309-2.526-.656-3.41a6.81 6.81 0 00-1.63-2.46 6.81 6.81 0 00-2.46-1.63c-.884-.347-1.91-.587-3.41-.656-1.51-.07-1.99-.084-5.87-.084zM16 0c3.94 0 4.448.016 6.02.087 1.56.07 2.95.315 4.242.948a9.34 9.34 0 013.405 2.175 9.34 9.34 0 012.175 3.405c.633 1.292.878 2.682.948 4.242.071 1.573.087 2.08.087 6.02s-.016 4.448-.087 6.02c-.07 1.56-.315 2.95-.948 4.242a9.34 9.34 0 01-2.175 3.405 9.34 9.34 0 01-3.405 2.175c-1.292.633-2.682.878-4.242.948-1.573.071-2.08.087-6.02.087s-4.448-.016-6.02-.087c-1.56-.07-2.95-.315-4.242-.948a9.34 9.34 0 01-3.405-2.175 9.34 9.34 0 01-2.175-3.405c-.633-1.292-.878-2.682-.948-4.242-.071-1.573-.087-2.08-.087-6.02s.016-4.448.087-6.02c.07-1.56.315-2.95.948-4.242a9.34 9.34 0 012.175-3.405 9.34 9.34 0 013.405-2.175c1.292-.633 2.682-.878 4.242-.948C11.552.016 12.06 0 16 0zm0 7.775a8.225 8.225 0 100 16.45 8.225 8.225 0 000-16.45zm0 2.288a5.937 5.937 0 110 11.875 5.937 5.937 0 010-11.875zM26.975 7.42a2.11 2.11 0 11-4.22 0 2.11 2.11 0 014.22 0z" />
          //           </svg> */}

          //       </Link>
          //     </li>
          //   </ul>
          // </div> 
          
          
          }



        </div>
      </div>

      {/* Big text */}
      {/* <div className="relative -mt-16 h-60 w-full" aria-hidden="true">
        <div className="pointer-events-none absolute left-1/2 -z-10 -translate-x-1/2 text-center text-[348px] font-bold leading-none before:bg-gradient-to-b before:from-gray-200 before:to-gray-100/30 before:to-80% before:bg-clip-text before:text-transparent before:content-['Simple'] after:absolute after:inset-0 after:bg-gray-300/70 after:bg-clip-text after:text-transparent after:mix-blend-darken after:content-['Simple'] after:[text-shadow:0_1px_0_white]"></div>
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2/3"
          aria-hidden="true"
        >
          <div className="h-56 w-56 rounded-full border-[20px] border-blue-700 blur-[80px]"></div>
        </div>
      </div> */}
    </footer>
  );
}
