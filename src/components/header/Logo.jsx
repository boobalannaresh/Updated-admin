import React from 'react';
import './logo.css';
import { useNavigate } from 'react-router-dom';

export default function Logo() {

    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar')
    }

    const navigate = useNavigate()
    
  return (
    <div className='d-flex align-items-center justify-content-between'>
<a href='/' style={{ textDecoration:"none"}} className='logo d-flex align-iems-center'>
<span className='d-none d-lg-block'>SVL India</span>
</a>
<i className='bi bi-list toggle-sidebar-btn'
onClick={handleToggleSideBar}
>

</i>
    </div>
  )
}
