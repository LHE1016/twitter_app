/* 인증 페이지 */
import React, { useState } from 'react';
import { authService } from 'fbase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { async } from '@firebase/util';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState('')

  const onChange = (e) => {
    // console.log(e.target.name);
    const {
      target: { name, value },
    } = e;
    /* input이 여러개 있으니까 if문으로 확인 */
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  /* 서버에서 사용자 정보 데이터를 가져올 때 까지 기다리는 비동기식 처리 async-await 사용 */
  const onSubmit = async (e) => {
    /* onSubmit은 기본적으로 웹을 새로고침 하기 때문에 preventDefault 사용 */
    e.preventDefault();
    /* 사용자의 정보(데이터)를 가져오기 성공 할 경우 try문을, 실패한 경우 catch문을 실행 */
    try {
      let data;
      if (newAccount) {
        /* create new account */
        data = await createUserWithEmailAndPassword(authService, email, password);
      } else {
        /* log in */
        data = await signInWithEmailAndPassword(authService, email, password);
      }
      // console.log(data); 
      /* 회원가입을 마친 사용자 정보 */
      /* 로그인 성공하면 브라우저의 indexedDB에 데이터를 저장 함 */
    } catch (error) {
      // console.log(error);
      /* 에러가 발생하면 출력 */
      setError(error.message)
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type='email' placeholder='Email' name='email' value={email} required onChange={onChange} />
        <input type='password' placeholder='Password' name='password' value={password} required onChange={onChange} />
        <input type='submit' value={newAccount ? 'Create Account' : 'Log in'} />
        {error}
      </form>
      <div>
        <button>Continue withe Google</button>
        <button>Continue withe Github</button>
      </div>
    </div>
  );
}

export default Auth;
