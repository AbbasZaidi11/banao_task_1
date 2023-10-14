import React from 'react';
import '../../Styles/Header.css';
function Header({setpopup}) {
  function changesetpopup(){
    setpopup(popup => !popup);
  }
  
  return (
    <div className='headername'>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <div class="container-fluid">
     <img className="CompanyLogo" src="https://atghelp.files.wordpress.com/2017/02/logo-in.png?w=774&h=178&crop=1" alt="" width="162" height="24"/>
    <button class="navbar-toggler randomi" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    

    <form class="container-fluid searchbar">
     <div class="input-group">
     <span class="input-group-text" id="basic-addon1">&#128269;</span>
      <input type="text" class="form-control" placeholder="Search for your favorite groups in ATG" aria-label="Username" aria-describedby="basic-addon1"/>
     </div>
    </form>


    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" onClick={changesetpopup} href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Create Account. It's free!
        </a>
        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Action</a></li>
          <li><a class="dropdown-item" href="#">Another action</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li><a class="dropdown-item" href="#">Something else here</a></li>
        </ul>
      </li>
    </ul>

  </div>
</nav>
</div>
  );
}

export default Header;