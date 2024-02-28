
import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, [search, sortBy, currentPage]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/customers?search=${search}&sortBy=${sortBy}&page=${currentPage}`);
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleNextPage = async () => {
    await setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = async () => {
    await setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * 20;
  const endIndex = startIndex + 20;

  const hasNextPage = endIndex < customers.length;
  const hasPrevPage = startIndex > 0;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Customer List</h1>
      <div className="mb-4 flex flex-col sm:flex-row items-center">
        <input
          type="text"
          placeholder="Search by name or location"
          value={search}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded-md mb-2 w-full sm:mb-0 sm:mr-2  "
        />
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-md w-full sm:w-auto"
        >
          <option value="">Sort by</option>
          <option value="date">Date</option>
          <option value="time">Time</option>
        </select>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-collapse border-gray-600">
          <thead className="bg-gray-300">
            <tr>
              <th className="py-2 px-4 border">S.No</th>
              <th className="py-2 px-4 border">Customer Name</th>
              <th className="py-2 px-4 border">Age</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Location</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Time</th>
            </tr>
          </thead>
          <tbody>
            {customers.slice(startIndex, endIndex).map((customer) => (
              <tr key={customer.sno}>
                <td className="py-2 px-4 border">{customer.sno}</td>
                <td className="py-2 px-4 border">{customer.customer_name}</td>
                <td className="py-2 px-4 border">{customer.age}</td>
                <td className="py-2 px-4 border">{customer.phone}</td>
                <td className="py-2 px-4 border">{customer.location}</td>
                <td className="py-2 px-4 border">{new Date(customer.created_at).toLocaleDateString('en-GB')}</td>
                <td className="py-2 px-4 border">{new Date(customer.created_at).toLocaleTimeString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between mt-4">
        {hasPrevPage && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handlePrevPage}>
            Back
          </button>
        )}
        {hasNextPage && (
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNextPage}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
