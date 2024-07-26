'use client';

import React from 'react';
import Image from 'next/image';
import Stripes from '@/public/images/stripes-dark.svg';
import Swal from 'sweetalert2';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    Swal.fire({
      title: 'شكرا لك',
      text: 'سيتم التواصل معك قريبا',
      icon: 'success',
      confirmButtonText: 'موافق',
      confirmButtonColor: "#020944"
    });
  };

  return (
    <section id='contact'>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          style={{ backgroundColor: "#020944" }}
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src={Stripes}
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            <h2
              dir="rtl"
              style={{ fontFamily: 'CustomFont' }}
              className="mb-6 border-y text-3xl font-bold text-gray-200 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.700/.7),transparent)1] md:mb-12 md:text-4xl"
            >
              انضم الى QRide اليوم ..
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <input
                    dir="rtl"
                    id="name"
                    className="form-input w-full py-2"
                    type="text"
                    placeholder="الإسم*"
                    required
                  />
                </div>
                <div>
                  <input
                    dir="rtl"
                    id="phone"
                    className="form-input w-full py-2"
                    type="text"
                    placeholder="رقم الجوال*"
                    required
                  />
                </div>
                <div>
                  <input
                    dir="rtl"
                    id="email"
                    className="form-input w-full py-2"
                    type="email"
                    placeholder="البريد الإلكتروني*"
                    required
                  />
                </div>
                <div>
                  <input
                    dir="rtl"
                    id="resName"
                    className="form-input w-full py-2"
                    type="text"
                    placeholder="اسم متجرك*"
                    required
                  />
                </div>
              </div>
              <br />
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <button
                  type="submit"
                  style={{ backgroundColor: "#6E6EFF" }}
                  className="btn group mb-4 w-full bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                >
                  <span
                    className="relative inline-flex items-center"
                    style={{ fontFamily: 'CustomFont', color: "#F2F2F9" }}
                  >
                    تجربة مجانية لمدة شهر{" "}
                    <span
                      style={{ fontFamily: 'CustomFont', color: "#F2F2F9" }}
                      className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5"
                    >
                      -&gt;
                    </span>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
