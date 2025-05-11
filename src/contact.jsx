import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    address: '',
    age: '',
    code: ''
  });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const scriptURL = 'https://script.google.com/macros/s/AKfycbyuS6MprBBXSzV0bqwWKXj1AC3T-68dYBEUZvYvQtg37aiTnMuJYUDLZw8cvQeVLYOI/exec';

  const generateRandomCode = (length = 6) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    const updatedData = { ...formData, code: generateRandomCode() };

    const formPayload = new FormData();
    Object.entries(updatedData).forEach(([key, value]) => {
      formPayload.append(key, value);
    });

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: formPayload
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', number: '', address: '', age: '', code: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        throw new Error('Submission failed');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    } finally {
      setTimeout(() => {
        if (status !== 'idle') setStatus('idle');
      }, 3000);
    }
  };

  return (
    <div style={{ padding: '20px', background: '#f5f5f5', minHeight: '100vh' }}>
      <form onSubmit={handleSubmit} style={{
        background: 'white',
        padding: '20px',
        maxWidth: '400px',
        margin: '40px auto',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        borderRadius: '8px'
      }}>
        <h2 style={{ textAlign: 'center' }}>Submit Your Info</h2>

        <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange}
          style={inputStyle} />
        <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange}
          style={inputStyle} />
        <input type="tel" name="number" placeholder="Phone Number" required value={formData.number} onChange={handleChange}
          style={inputStyle} />
        <textarea name="address" placeholder="Address" required value={formData.address} onChange={handleChange}
          style={inputStyle} />
        <input type="number" name="age" placeholder="Age" required value={formData.age} onChange={handleChange}
          style={inputStyle} />
        <input type="hidden" name="code" value={formData.code} />

        <button type="submit" disabled={status === 'loading'} style={{
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          padding: '12px',
          width: '100%',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px'
        }}>
          Submit
        </button>

        {status === 'loading' && <div className="loading" style={messageStyle('#ffa500')}>Submitting...</div>}
        {status === 'success' && <div className="success" style={messageStyle('green')}>Form submitted successfully!</div>}
        {status === 'error' && <div className="error" style={messageStyle('red')}>Something went wrong.</div>}
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '12px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px'
};

const messageStyle = (color) => ({
  textAlign: 'center',
  marginTop: '15px',
  fontSize: '15px',
  color
});
