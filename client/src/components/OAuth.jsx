import { Button } from 'flowbite-react';
import React from 'react'
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { app } from '../Firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

function OAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleGoogleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: 'select_account' });
    try {
      const resultsFromGoogle = await signInWithPopup(auth, provider);
      const res = await fetch('/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: resultsFromGoogle.user.displayName,
          email: resultsFromGoogle.user.email,
          googlePhotoUrl: resultsFromGoogle.user.photoURL,
        })
      });

      const data = await res.json();
      console.log(data)
      if (res.ok) {
        dispatch(signInSuccess(data));
        navigate('/')
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Button className="bg-gradient-to-br from-pink-500 to-orange-400 text-white hover:bg-gradient-to-bl focus:ring-pink-200 dark:focus:ring-pink-800 " onClick={handleGoogleClick}>
      <AiFillGoogleCircle className='w-5 h-5 mr-2' />
      Continue with google
    </Button>
  )
}

export default OAuth;