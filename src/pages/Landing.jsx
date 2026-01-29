import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSpaces } from '../features/spaces/spacesApi';
import SpaceCard from '../features/spaces/SpaceCard';

const Landing = () => {
  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h1>Spacer Frontend Is Live 🚀</h1>
      <p>If you can see this, routing works.</p>
    </div>
  );
};

export default Landing;



