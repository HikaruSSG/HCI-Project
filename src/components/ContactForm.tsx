import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [unit, setUnit] = useState('');
  const [comment, setComment] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.query.unit) {
      setUnit(router.query.unit as string);
    }
  }, [router.query.unit]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "7642d770-d4d3-4eeb-b9b4-89c08b61b49f");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const result = await response.json();
    if (response.status === 200 && result.success) {
      window.location.href = '/thank-you';
    }
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="container mx-auto bg-background shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className=" text-primary text-2xl font-bold mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary text-sm font-bold mb-2" htmlFor="email">
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
            <label className="block text-primary text-sm font-bold mb-2" htmlFor="unit">
              Unit
            </label>
            <select
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
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
          <div className="mb-6">
            <label className="block text-primary text-sm font-bold mb-2" htmlFor="comment">
              Comment
            </label>
            <textarea
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="comment"
              name="comment"
              placeholder="Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
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
