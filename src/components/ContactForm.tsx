import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Contact = () => {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [messenger, setMessenger] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [unit, setUnit] = useState("");
  const [businessType, setBusinessType] = useState("");
  const router = useRouter();

  useEffect(() => {
    const now = new Date();
    const formattedDate = now.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    });
    setDate(formattedDate);

    if (router.query.unit) {
      setUnit(router.query.unit as string);
    }
  }, [router.query.unit]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "7642d770-d4d3-4eeb-b9b4-89c08b61b49f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (response.status === 200 && result.success) {
      window.location.href = "/thank-you";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="container mx-auto bg-background shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-primary text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:flex md:gap-4">
            <div className="mb-4 md:w-1/4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="mb-4 md:w-1/4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="middleName"
              >
                Middle Name
              </label>
              <input
                className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
                id="middleName"
                name="middleName"
                type="text"
                placeholder="M"
                maxLength={1}
              />
            </div>
            <div className="mb-4 md:w-1/4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div className="mb-4 md:w-1/4">
              <label
                className="block text-primary text-sm font-bold mb-2"
                htmlFor="age"
              >
                Age
              </label>
              <input
                className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
                id="age"
                name="age"
                type="number"
                placeholder="Age"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="hidden" htmlFor="date">
              Date
            </label>
            <input
              className="hidden"
              id="date"
              name="date"
              type="text"
              placeholder="Date"
              value={date}
              readOnly
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="location"
            >
              Location
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="location"
              name="location"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="messenger"
            >
              Messenger
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="messenger"
              name="messenger"
              type="text"
              placeholder="Messenger"
              value={messenger}
              onChange={(e) => setMessenger(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="contactNumber"
            >
              Contact Number
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="contactNumber"
              name="contactNumber"
              type="tel"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="unit"
            >
              Unit
            </label>
<select
  className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-[var(--background)]"
  id="unit"
  name="unit"
  value={unit}
  onChange={(e) => setUnit(e.target.value)}
>
              <option>Dog Room</option>
              <option>Condo</option>
              <option>Garden</option>
            </select>
          </div>

          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="businessType"
            >
              Business Type
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="businessType"
              name="businessType"
              type="text"
              placeholder="Business Type"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="comment"
            >
              Comment
            </label>
            <textarea
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="comment"
              name="comment"
              placeholder="Comment"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary text-background hover:bg-primary-dark transition-colors font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
