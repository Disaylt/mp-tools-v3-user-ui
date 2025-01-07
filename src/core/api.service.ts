import axios from 'axios';

export default axios.create({
    baseURL: 'https://localhost:7249',
    headers: {
      'Content-Type': 'application/json',
    },
  });