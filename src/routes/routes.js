import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../pages/Home';

const AppRoutes = () => {
  return (
    /* O basename precisa ser EXATAMENTE o nome do seu repositório no GitHub */
    <BrowserRouter basename="/Perfumaria">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Rota de segurança: se digitar algo errado, volta para a Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>


    </BrowserRouter>


  );
};

export default AppRoutes;