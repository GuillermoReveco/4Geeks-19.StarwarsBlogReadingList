import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import starwars from '../image/starwars.png';
import { Context } from '../store/AppContext';

const Layout = (props) => {
const {store, actions} = useContext(Context);
    return (
        <div className='container'>
        <div className='d-flex justify-content-between'>
            <div className='float-right'>
                <Link to='/'><img src={starwars} width='65px'  ></img></Link>
            </div>
            <div className='btn-group float-end'>
                <button type='button' className='btn btn-primary dropdown-toggle' data-bs-toggle='dropdown' aria-expanded='false'>
                    Favorites<span className="badge bg-secondary">{store.favorito.length}</span>
                </button>
                <ul className="dropdown-menu">
                    <li class="list-group-item d-flex justify-content-between align-items-center ml-3">
                        <a className="dropdown-item" href="#">Luke Skywalker</a>
                        <i class="fa-solid fa-trash"></i>
                    </li>                    
                    <li class="list-group-item d-flex justify-content-between align-items-center ml-3">
                        <a className="dropdown-item" href="#">C-3PO</a>
                        <i class="fa-solid fa-trash"></i>
                    </li>                    
                    <li class="list-group-item d-flex justify-content-between align-items-center ml-3">
                        <a className="dropdown-item" href="#">R2-D2</a>
                        <i class="fa-solid fa-trash"></i>
                    </li>                    
                    <li class="list-group-item d-flex justify-content-between align-items-center ml-3">
                        <a className="dropdown-item" href="#">Darth Vader</a>
                        <i class="fa-solid fa-trash"></i>
                    </li>                    
                </ul>
            </div>
        </div>
        {props.children}
        </div>
    );
}

export default Layout;