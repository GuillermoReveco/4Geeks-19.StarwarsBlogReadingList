import React, { useState, useEffect, useContext } from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { arrPeopleContext } from '../store/PeopleStore'
import { arrPlanetsContext } from '../store/PlanetsStore'

import { Context } from '../store/AppContext';

const Home = () => {

    const { store, actions } = useContext(Context);

    const { arrPeople, setArrPeople } = useContext(arrPeopleContext);
    const { arrPlanets, setArrPlanets } = useContext(arrPlanetsContext);

    const [imgPeople, setImgPeople] = useState('https://starwars-visualguide.com/assets/img/characters/@.jpg');
    const [imgPlanets, setImgPlanets] = useState('https://starwars-visualguide.com/assets/img/planets/@.jpg');

    //People
    useEffect(() => {
        console.log('useEffect - dataPeople: ', arrPeople);
    }, [arrPeople]);

    //Planets
    useEffect(() => {
        console.log('useEffect - dataPlanets: ', arrPlanets);
    }, [arrPlanets]);

    useEffect(() => {
        getDataPeople();
        getDataPlanets();
    }, []);

    const getDataPeople = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch('https://swapi.dev/api/people', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('getDataPeople - result', result)
                setArrPeople(result);
            })
            .catch(error => console.log('getDataPeople - error', error))
    }

    const getDataPlanets = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch('https://swapi.dev/api/planets', requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('getDataPlanets - result', result)
                setArrPlanets(result);
            })
            .catch(error => console.log('getDataPlanets - error', error))
    }

    const getPrevPeople = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(arrPeople.previous, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('getDataPeople - result', result)
                setArrPeople(result);
            })
            .catch(error => console.log('getDataPeople - error', error))
    }

    const getNextPeople = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(arrPeople.next, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('getDataPeople - result', result)
                setArrPeople(result);
            })
            .catch(error => console.log('getDataPeople - error', error))
    }
    
    const getPrevPlanets = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(arrPlanets.previous, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('getDataPlanets - result', result)
                setArrPlanets(result);
            })
            .catch(error => console.log('getDataPlanets - error', error))

    }

    const getNextPlanets = () =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(arrPlanets.next, requestOptions)
            .then(response => response.json())
            .then(result => {
                console.log('getDataPlanets - result', result)
                setArrPlanets(result);
            })
            .catch(error => console.log('getDataPlanets - error', error))

    }


    return (
        <>
            <Layout>

                <div className='container mt-3'>
                    <nav aria-label="Page navigation example">
                        {
                            arrPeople?
                            (
                            <ul className="pagination">
                                <li className={arrPeople.previous? 'page-item' : 'page-item disabled'} ><a className="page-link" href="#" onClick={()=>getPrevPeople()}>Previous</a></li>
                                <li className={arrPeople.next? 'page-item' : 'page-item disabled'}><a className="page-link" href="#" onClick={()=>getNextPeople()}>Next</a></li>
                            </ul>
                            ):(
                            <ul className="pagination">
                            </ul>

                            )
                        }
                    </nav>
                </div>
                <div className='container  mt-4 '>
                    <div className='character row-cols-md-5 g-2'>
                        {
                            arrPeople && arrPeople.results.map((item, index) => {
                                // console.log('MAP - item', item);
                                // console.log('MAP - index', index);
                                // console.log('MAP - arr-NAME', item.name);
                                // console.log('MAP - carga', carga);
                                // // console.log('item', item[index].img);
                                // console.log('MAP - item length', item.length);
                                let arr = item.url.split('/');
                                let ind = arr[arr.length - 2];
                                let img = imgPeople.replace('@', `${ind}`);
                                return (
                                    <div className='item' key={ind}>
                                        <div className="card" key={ind}>
                                            <img src={img} className="card-img-top" alt="..." />
                                            {/* <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." /> */}
                                            <div className="card-body">
                                                <div className='text-start'>
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">Gender: {item.gender} <br />Color: {item.hair_color} <br />Eye-Color: {item.eye_color}</p>
                                                </div>
                                                <div className='d-flex justify-content-between pt-3'>
                                                    <div>
                                                        <Link to={`/detalle/${ind}`} className="btn btn-outline-primary" >learn more!</Link>
                                                    </div>
                                                    <div>
                                                        <button type="button" className={
                                                            actions.conFav(ind, 'PEP') ?
                                                                'btn btn-warning cursor-pointer'
                                                                : 'btn btn-outline-warning cursor-pointer'
                                                        } onClick={() => actions.cargarFav(ind, 'PEP', item.name)}><i className="fa-regular fa-heart"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>

                <div className='container mt-3'>
                    <nav aria-label="Page navigation example">
                {
                    arrPlanets?
                    (

                        <ul className="pagination">
                            <li className={arrPlanets.previous? 'page-item' : 'page-item disabled'} ><a className="page-link" href="#" onClick={()=>getPrevPlanets()}>Previous</a></li>
                            <li className={arrPlanets.next? 'page-item' : 'page-item disabled'}  ><a className="page-link" href="#" onClick={()=>getNextPlanets()}>Next</a></li>
                        </ul>

                    ):(

                        <ul className="pagination">
                        </ul>

                    )
                }

                    </nav>
                </div>

                <div className='container mt-4'>
                    <div className='character row-cols-md-5 g-2'>
                        {
                            arrPlanets && arrPlanets.results.map((item) => {
                                // console.log('MAP - item', item);
                                // console.log('MAP - index', index);
                                // console.log('MAP - arr-NAME', item.name);
                                // console.log('MAP - carga', carga);
                                // // console.log('item', item[index].img);
                                // console.log('MAP - item length', item.length);
                                let arr = item.url.split('/');
                                let ind = arr[arr.length - 2];
                                let img = imgPlanets.replace('@', `${ind}`);

                                if (ind == 1) {
                                    img = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
                                }

                                return (
                                    <div className='item' key={ind}>
                                        <div className="card" key={ind}>
                                            <img src={img} className="card-img-top" alt="..." />
                                            {/* <img src="https://starwars-visualguide.com/assets/img/characters/1.jpg" className="card-img-top" alt="..." /> */}
                                            <div className="card-body">
                                                <div className='text-start'>
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <p className="card-text">Population: {item.population} <br />Terrain: {item.terrain}</p>
                                                </div>
                                                <div className='d-flex justify-content-between pt-3'>
                                                    <div>
                                                        {/* <a href="#" className="btn btn-outline-primary">learn more!</a> */}
                                                        <Link to={`/detalleplanets/${ind}`} className="btn btn-outline-primary" >learn more!</Link>
                                                    </div>
                                                    <div>
                                                        <button type="button" className={
                                                            actions.conFav(ind, 'PLA') ?
                                                                'btn btn-warning cursor-pointer'
                                                                : 'btn btn-outline-warning cursor-pointer'
                                                        } onClick={() => actions.cargarFav(ind, 'PLA', item.name)}><i className="fa-regular fa-heart"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
                

            </Layout>
        </>

    );
}

export default Home;