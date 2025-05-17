import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Dispatch, SetStateAction } from 'react';

export interface CardData {
  title: string;
  image: string;
  price: number;
  location: string;
  floorArea: string;
  information: string;
}

interface CMSFormProps {
  cards: CardData[];
  setCards: Dispatch<SetStateAction<CardData[]>>;
}

function CMSForm({ cards, setCards }: CMSFormProps) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [location, setLocation] = useState('');
  const [floorArea, setFloorArea] = useState('');
  const [information, setInformation] = useState('');

  useEffect(() => {
    const storedCards = localStorage.getItem('cards');
    if (storedCards) {
      setCards(JSON.parse(storedCards));
    }
  }, [setCards]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = {
      title,
      image,
      price: Number(price),
      location,
      floorArea,
      information,
    };
    const newCards = [...cards, formData];
    setCards(newCards);
    localStorage.setItem('cards', JSON.stringify(newCards));
    setTitle('');
    setImage('');
    setPrice('');
    setLocation('');
    setFloorArea('');
    setInformation('');
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="container mx-auto bg-background shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-primary text-2xl font-bold mb-6">Add New Unit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="image"
            >
              Image URL
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="image"
              name="image"
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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
              htmlFor="floorArea"
            >
              Floor Area
            </label>
            <input
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="floorArea"
              name="floorArea"
              type="text"
              placeholder="Floor Area"
              value={floorArea}
              onChange={(e) => setFloorArea(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-primary text-sm font-bold mb-2"
              htmlFor="information"
            >
              Information
            </label>
            <textarea
              className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
              id="information"
              name="information"
              placeholder="Information"
              value={information}
              onChange={(e) => setInformation(e.target.value)}
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
}

function index() {
  const [cards, setCards] = useState<CardData[]>([]);
  const router = useRouter();

 useEffect(() => {
    // Check local storage for login status on component mount
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    // Temporarily disable redirect to debug logout
    // if (!storedLoginStatus && router.pathname !== '/login') {
    //   router.push('/login');
    // }
  }, [router.pathname]);

  return (
    <div>
      <CMSForm cards={cards} setCards={setCards} />
      <textarea
        className="shadow appearance-none border border-primary rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary bg-transparent"
        value={JSON.stringify(cards)}
        readOnly
      />
    </div>
  );
}

export default index;
