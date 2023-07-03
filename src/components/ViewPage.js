import React, { useEffect, useState } from "react";
import axios from "axios";

const ViewPage = () => {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/contact")
      .then((response) => {
        setContactData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>Contact Data</h1>
      <ul>
        {contactData.map((data, index) => (
          <li key={index}>
            <strong>Name:</strong> {data.name}
            <br />
            <strong>Mobile:</strong> {data.mobile}
            <br />
            <strong>Email:</strong> {data.email}
            <br />
            <strong>Message:</strong> {data.message}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewPage;
