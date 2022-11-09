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
                    {
                        store.favorito.length>0 ? (
                            store.favorito.map((item, index)=>{
                                return(
                                    <li className="list-group-item ml-3" key={index}>
                                        <a className="dropdown-item" href="#" >
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <span>{item.name}</span>
                                            <i className="fa-solid fa-trash" style={{cursor:'pointer'}}  onClick={() => actions.deleteFav(item.id, item.name)} ></i>
                                        </div>
                                        </a>
                                    </li>
                                )
                            })
    
                        ):(
                            <li className="list-group-item d-flex justify-content-between align-items-center ml-3">
                                <a className="dropdown-item" href="#">(empty)</a>
                            </li>
    
                        )
                    }
                </ul>
            </div>
        </div>
        {props.children}
        </div>
    );
}

export default Layout;