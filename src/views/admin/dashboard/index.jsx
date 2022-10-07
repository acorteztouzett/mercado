import { useDocumentTitle, useScrollTop } from 'hooks';
import React from 'react';

const Dashboard = () => {
  useDocumentTitle('Welcome | Admin Dashboard');
  useScrollTop();

  return (
    <div className="loader">
      <h2>Bienvenido al panel de administración</h2>
    </div>
  );
};

export default Dashboard;
