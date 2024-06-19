import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
export const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-textPrimary my-2">
          Let`&apos;s Connect
        </h5>
        <p className="text-textColor mb-4 max-w-md">
          orem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus
        </p>
        <div className="socials flex flex-row gap-2">
          <Link to={"https://www.twitter.com"}>
            <img
              src="../images/twitter.png"
              alt="twitter"
              height={48}
              width={48}
            />
          </Link>
          <Link to={"https://www.instagram.com"}>
            <img src="../images/instagram.png" alt="instagram" />
          </Link>
          <Link to={"https://www.facebook.com"}>
            <img
              src="../images/facebook.png"
              alt="facebook"
              height={48}
              width={48}
            />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-textPrimary block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-inputBg border border-border placeholder-placeholderBg text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-textPrimary block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-inputBg border border-border placeholder-placeholderBg text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-textPrimary block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-inputBg border border-border placeholder-placeholderBg text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <Button title="Send Message" size="small" type="submit" testId="send-message"/>
        </form>
      </div>
    </section>
  );
};
