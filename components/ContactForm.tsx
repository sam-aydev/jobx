"use client";

import { useState } from "react";

export default function ContactForm() {
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<null | string>(null);

  const { SMTP_EMAIL } = process.env;

  async function handleSubmit(e: any) {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const message = e.target[2].value;
    if (!name || !email || !message) {
      setIsError(true);
      return;
    }
    console.log(name, email, message);
    try {
      setIsLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          to: email,
          subject: "Email from JobEx",
          body: message,
          from: SMTP_EMAIL,
          from1: email,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setIsSuccess("true");
        return;
      } else {
        setIsSuccess("false");
        return;
      }
    } catch (error) {
      console.log(error);
      setIsSuccess("false");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-white p-4 rounded w-4/5 md:w-2/3 lg:w-1/2 xl:w-1/3">
            <h2 className="text-center text-2xl  font-semibold">
              Fill This Form To Get In Touch With Us!
            </h2>
            {isError && (
              <p className="mt-5 px-2 py-2 rounded text-white text-center bg-red-700">
                Please fill everything with correct details
              </p>
            )}

            {isSuccess === "true" && (
              <p className="mt-5 px-2 py-2 rounded text-white text-center bg-green-700">
                Message sent successfully, check your email for confirmation
              </p>
            )}

            {isSuccess === "false" && (
              <p className="mt-5 px-2 py-2 rounded text-white text-center bg-red-700">
                There was an error sending the message, you can try again!
              </p>
            )}

            <div className="pt-4">
              <label className="block" htmlFor="name">
                Name:
              </label>
              <input
                disabled={isLoading}
                onKeyDown={() => setIsError(false)}
                className="px-2 py-2 rounded outline-none w-full border-2 border-orange-200"
                name="name"
                id="name"
                type="Name"
                placeholder="Fill in your name..."
              />
            </div>

            <div className="pt-3">
              <label className="block" htmlFor="email">
                Email:
              </label>
              <input
                disabled={isLoading}
                onKeyDown={() => setIsError(false)}
                className="px-2 py-2 rounded outline-none w-full border-2 border-orange-200"
                name="email"
                id="email"
                type="email"
                placeholder="Fill in your work email address..."
              />
            </div>

            <div className="pt-3">
              <label className="block" htmlFor="message">
                Message:
              </label>
              <textarea
                disabled={isLoading}
                onKeyDown={() => setIsError(false)}
                className="resize-none  px-2 py-2 rounded outline-none w-full border-2 border-orange-200"
                name="message"
                id="message"
                placeholder="Your message..."
              ></textarea>
            </div>

            <div className="pt-4">
              <button
                disabled={isLoading}
                className="bg-orange-950 w-full text-center py-2 rounded text-white "
              >
                Submit Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
