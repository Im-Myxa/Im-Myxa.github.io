import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const NavProfile = () => {
  const { user, isAuth } = useSelector(state => state.auth);
  const navigate = useNavigate();
  console.log(user);
  console.log(isAuth);

  // useEffect(() => {
  if (!isAuth) {
    return navigate('/auth/signIn');
  }
  // }, [isAuth]);

  return (
    <div className='mr-10 flex items-center gap-2'>
      <img
        src={user.image}
        className='h-[70px] w-[66px] rounded-full border border-black'
      />
      <div className='font-poppins'>
        <p className='text-2xl'>
          {user.firstName} {user.lastName}
        </p>
        <p className='text-sm'>{user.company}</p>
      </div>
    </div>
  );
};

export default NavProfile;
