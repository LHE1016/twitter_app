/* 구조 분기용 라우터 */
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';

function AppRouter({ isLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        {/* 로그인이 되었을때랑 안되었을때 화면 구분  */}
        {isLoggedIn ? <Route path='/' element={<Home />} /> : <Route path='/' element={<Auth />} />}
        {/* isLoggedIn이 true면 <Home /> 호출, false면 <Auth /> 호출 */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
