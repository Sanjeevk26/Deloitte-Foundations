import React, { useState, useEffect } from 'react';  // Import useState and useEffect for state management and lifecycle methods
import './App.css'; // Optional: if you have any custom styles

function App() {
  const [user, setUser] = useState(null);    // State to store user data
  const [loading, setLoading] = useState(true);   // Loading state
  const [error, setError] = useState(null);   // Error state

  // Function to fetch random user data from the API
  const fetchRandomUser = async () => {
    try {
      setLoading(true);  // Set loading state to true before fetching
      const response = await fetch('https://randomuser.me/api/');  // Fetching random user
      if (!response.ok) {
        throw new Error('Failed to fetch user');  // Error handling for non-2xx responses
      }
      const data = await response.json();   // Parse the response JSON
      setUser(data.results[0]);  // Store the first user from the results array
      setLoading(false);  // Set loading state to false
    } catch (error) {
      setError(error.message);   // If error occurs, set the error message
      setLoading(false);   // Set loading state to false
    }
  };

  // UseEffect to fetch data once when the component mounts
  useEffect(() => {
    fetchRandomUser();
  }, []);   // Empty dependency array ensures it runs only once when the component is mounted

  if (loading) {
    return <div>Loading...</div>;  // Show loading message while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>;  // Show error message if something went wrong
  }

  return (
    <div className="App">
      <h1>Random User</h1>
      {user && (   // If user data exists, render it
        <div>
          <img src={user.picture.large} alt="User" />
          <h2>{`${user.name.first} ${user.name.last}`}</h2>
          <p>Email: {user.email}</p>
          <p>Location: {`${user.location.city}, ${user.location.country}`}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
      <button onClick={fetchRandomUser}>Fetch New User</button>  {/* Button to fetch new user */}
    </div>
  );
}

export default App;
