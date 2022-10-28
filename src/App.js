import React, { useState, useEffect } from 'react';
import AppRouter from 'Router';
import { authService } from 'fbase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  /* 특정한 시점에 실행되는 HOOK 함수 */
  /* 2번째 state값(배열)이 비어있을 경우 DidMount시점에 함수 실행, state값(배열)이 있을 경우 값이 Update 될때마다 함수 실행 */
  useEffect(() => {
    onAuthStateChanged(authService, (user) => {
      console.log(user);
      if (user) {
        // User is signed in
        setIsLoggedIn(user);
        const uid = user.uid;
      } else {
        // User is signed out
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  console.log(authService.currentUser); // currentUser는 현재 로그인 한 사람 확인 함수

  return (
    <>

      {init ? <AppRouter isLoggedIn={isLoggedIn} /> : 'initializing...'}
      <footer>&copy;{new Date().getFullYear()} Twitter</footer>
    </>
  );
}

export default App;
