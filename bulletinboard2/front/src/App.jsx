import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [bulletins, setBulletins] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchBulletins();
  }, []);

  const fetchBulletins = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/bulletins');
      setBulletins(response.data);
    } catch (error) {
      console.error('Error fetching bulletins:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/bulletins', {
        title,
        content
      });
      setBulletins([response.data, ...bulletins]);
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating bulletin:', error);
    }
  };

  return (
    <div>
      <h1>Bulletin Board</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
        <button type="submit">Add Bulletin</button>
      </form>
      <div>
        {bulletins.map(bulletin => (
          <div key={bulletin._id}>
            <h2>{bulletin.title}</h2>
            <p>{bulletin.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
