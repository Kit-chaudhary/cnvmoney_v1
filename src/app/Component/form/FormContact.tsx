"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { handleNoFill } from "@/app/Component/NoFill/Signup";

export default function FormContact() {
  const [fullName, setFullName] = React.useState("");
  const [fullNameError, setFullNameError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [phoneError, setPhoneError] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    phone: "",
    username: "",
    message: "",
  });
  const [buttonDisabledOne, setButtonDisabledOne] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSubmit = async () => {
    if (email.length > 0) {
      // Email validation regex
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/; // email validation

      if (!emailRegex.test(email)) {
        setEmailError("Please enter a valid email address.");
        setButtonDisabledOne(false);
      } else {
        setEmailError("");
      }
    }
    try {
      setLoading(true);
      const response = await axios.post("/api/contactus", user);
    } catch (error: any) {
      console.log("An error occurred during signup:", error);
      alert("An error occurred during signup");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (fullName === "") {
      setButtonDisabledOne(false);
    } else if (fullName !== "") {
      setFullNameError("");
    }
    if (phone === "") {
      setButtonDisabledOne(false);
    } else if (phone !== "") {
      setPhoneError("");
    }
    if (email === "") {
      setButtonDisabledOne(false);
    } else if (email !== "") {
      setEmailError("");
      setButtonDisabledOne(true);
    }

    if (message !== "" && email !== "" && phone !== "" && fullName !== "") {
      setButtonDisabledOne(true);
    }
  }, [fullName, phone, email, message]);

  const handleFullName = (e: any) => {
    setFullName(e.target.value);
  };

  const handlePhone = (e: any) => {
    setPhone(e.target.value);
  };

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  const onSubmiting = async () => {
    alert("You are already submited wait it's Processing");
  };
  return (
    <>
      <div className="glass-effect-card">
        <div className="form-header">
          <p className="contact_header">
            {loading ? "Processing" : "Get in Touch"}
          </p>
        </div>
        {/* <label className="label">
          <span className="label-text">Full Name</span>
        </label> */}
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Full Name"
          className="input input-bordered"
          value={fullName}
          onChange={(e) => {
            handleFullName(e);
            setUser({ ...user, username: e.target.value });
          }}
          required
        />
        {fullNameError && <div className="error-message">{fullNameError}</div>}
        {/* <label className="label">
          <span className="label-text">Phone</span>
        </label> */}
        <div className="phone-input-container">
          <input
            type="tel"
            name="number"
            id="number"
            placeholder="Phone"
            className="input input-bordered"
            value={phone}
            onChange={(e) => {
              handlePhone(e);
              setUser({ ...user, phone: e.target.value });
            }}
            required
          />
        </div>
        {phoneError && <div className="error-message">{phoneError}</div>}
        {/* <label className="label">
          <span className="label-text">Email</span>
        </label> */}
        <input
          type="email"
          name="Email"
          id="Email"
          placeholder="Email"
          className="input input-bordered"
          value={email}
          onChange={(e) => {
            handleEmail(e);
            setUser({ ...user, email: e.target.value });
          }}
          required
        />
        {emailError && <div className="error-message">{emailError}</div>}
        {/* <label className="" htmlFor="message">
          <span className="label-text">Message</span>
        </label> */}
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="input input-bordered mt-2"
          value={message}
          onChange={(e) => {
            handleMessage(e);
            setUser({ ...user, message: e.target.value });
          }}
          required
        />
        <br />

        <div className="button-group">
          <button
            className="contact-btn"
            onClick={
              buttonDisabledOne
                ? loading
                  ? onSubmiting
                  : onSubmit
                : handleNoFill
            }
            type="submit"
          >
            {buttonDisabledOne
              ? loading
                ? "Submitting..."
                : "Submit"
              : "Waiting..."}
          </button>
        </div>
      </div>
    </>
  );
}
