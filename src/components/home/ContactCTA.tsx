"use client";

import { useEffect, useRef, useState } from "react";
import { Check, MapPin, Phone } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/home";

export function ContactCTA() {
  const arrowRef = useRef<HTMLImageElement>(null);
  const [sent, setSent] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    if (!arrowRef.current) return;

    const tween = gsap.to(arrowRef.current, {
      x: 35,
      duration: 1.4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tween.kill();
    };
  }, []);

  const set =
    (key: keyof typeof form) =>
      (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value }));

  const ready =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.message.trim();

  const field =
    "h-[52px] w-full rounded-[5px] border border-transparent bg-[#f4f4f4] px-4 text-[14px] outline-none transition focus:border-[#ffab17] focus:bg-white placeholder:text-[#555]";

  return (
    <>
      <section
        className="relative bg-[#11132f] lg:h-[625px]"
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/digiplus-html/images/background/contact-h3-1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >


        <div className="container-max relative z-10">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">

            {/* LEFT */}
            <Reveal className="relative py-14 lg:pt-[105px]">
              <div className="flex items-center gap-4">
                <span className="text-[13px] font-extrabold uppercase text-white">
                  Why Choose Us
                </span>
                <span className="h-[3px] w-14 bg-[#ffab17]" />
              </div>

              <h2 className="mt-4 text-[38px] font-extrabold leading-[1.25] text-white lg:text-[46px]">
                Recognized As One
                <br />
                Of The Leading
                <br />
                Company!
              </h2>

              <img
                ref={arrowRef}
                src="https://html.kodesolution.com/2025/digiplus-html/images/icons/contact-h3-1.png"
                alt=""
                className="absolute right-0 top-[185px] hidden w-[150px] lg:block"
              />

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <div>
                  <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#ffab17] text-black">
                    <Phone size={29} />
                  </span>

                  <div className="mt-4 space-y-1 text-[14px] text-white/60">
                    <p>{company.email}</p>
                    <p>{company.phone}</p>
                  </div>
                </div>

                <div>
                  <span className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-[#ffab17] text-black">
                    <MapPin size={30} />
                  </span>

                  <p className="mt-4 max-w-[220px] text-[14px] leading-7 text-white/60">
                    {company.addressIn}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* FORM */}
            <div className="relative z-20 lg:translate-y-[80px]">
              <Reveal
                delay={0.08}
                y={25}
                className="pb-10 lg:pt-[0]"
              >
                <div className="mx-auto w-full max-w-[555px] rounded-[28px] bg-white px-7 py-8 shadow-[0_25px_60px_rgba(0,0,0,.18)] lg:px-14 lg:py-14">
                  {sent ? (
                    <div className="flex min-h-[390px] flex-col items-center justify-center text-center">
                      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ffab17]">
                        <Check size={25} />
                      </span>

                      <h3 className="mt-5 text-3xl font-bold">Message Sent</h3>

                      <button
                        onClick={() => setSent(false)}
                        className="mt-6 bg-[#ffab17] px-6 py-3 text-sm font-bold"
                      >
                        Send Again
                      </button>
                    </div>
                  ) : (
                    <>
                      <p className="text-[14px] font-bold text-[#292930]">
                        Contact Us
                      </p>

                      <h3 className="mt-1 text-[38px] font-extrabold leading-tight text-[#202026]">
                        Get in Touch
                      </h3>

                      <div className="mt-5 grid gap-3 sm:grid-cols-2">
                        <input
                          className={field}
                          placeholder="Your Name"
                          value={form.name}
                          onChange={set("name")}
                        />

                        <input
                          className={field}
                          type="email"
                          placeholder="Email Address"
                          value={form.email}
                          onChange={set("email")}
                        />

                        <input
                          className={field}
                          placeholder="Enter Subject"
                          value={form.subject}
                          onChange={set("subject")}
                        />

                        <input
                          className={field}
                          placeholder="Enter Phone"
                          value={form.phone}
                          onChange={set("phone")}
                        />
                      </div>

                      <textarea
                        placeholder="Write a Message"
                        value={form.message}
                        onChange={set("message")}
                        className="mt-3 h-[175px] w-full resize-none rounded-[5px] border border-transparent bg-[#f4f4f4] px-4 py-4 text-[14px] outline-none transition focus:border-[#ffab17] focus:bg-white placeholder:text-[#555]"
                      />

                      <button
                        // disabled={!ready}
                        onClick={() => ready && setSent(true)}
                        className="mt-4 bg-[#ffab17] px-7 py-[14px] text-[12px] font-extrabold uppercase text-black transition hover:bg-[#11132f] hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        Send A Message
                      </button>
                    </>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section >


    </>
  );
}