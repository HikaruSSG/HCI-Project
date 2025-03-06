
import { useState, useEffect } from 'react';

const Footer = () => {
  const [dateTimeString, setDateTimeString] = useState('');
  const year = new Date().getFullYear();

  useEffect(() => {
    const now = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' } as Intl.DateTimeFormatOptions;
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true } as Intl.DateTimeFormatOptions;
    const formattedDate = now.toLocaleDateString(undefined, dateOptions);
    const formattedTime = now.toLocaleTimeString(undefined, timeOptions);
    setDateTimeString(formattedDate + ' ' + formattedTime);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-6 w-full">
      <div className="container mx-auto text-center">
        <p>&copy; {year} BusinessApp. All rights reserved.</p>
        <p>Current date and time: {dateTimeString}</p>
        <p>
          <a href="/privacy" className="text-gray-300 hover:text-white">
            Privacy Policy
          </a>{' '}
          |{' '}
          <a href="/terms" className="text-gray-300 hover:text-white">
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
