import React from 'react';

const NavbarComponent = () => {
  return ( 
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">       
  <li className="nav-item dropdown"> 
  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
  Menú
  </a>
  <ul class="dropdown-menu">
    <li><a className='dropdown-item' href='#'>Menú</a></li>
    <li><a className='dropdown-item' href='#'>Tienda</a></li>
    <li><a className='dropdown-item' href='#'>Redes sociales y contactos</a></li>
  </ul>
</li>
</div>
</nav>
);
};

export default NavbarComponent;