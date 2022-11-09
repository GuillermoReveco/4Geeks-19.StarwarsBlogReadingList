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

    // const [peopleData, setPeopleData] = useState([]);
    // const [planetsData, setPlanetsData] = useState([]);
    // const [isCall, setIsCall] = useState(true);
    // const [carga, setCarga] = useState(true);

    // const [dataPeople, setDataPeople] = useState();
    // const [dataPlanets, setDataPlanets] = useState();
    const [imgPeople, setImgPeople] = useState('https://starwars-visualguide.com/assets/img/characters/@.jpg');
    const [imgPlanets, setImgPlanets] = useState('https://starwars-visualguide.com/assets/img/planets/@.jpg');

    // useEffect(() => {
    //     if (isCall) {
    //         // consultaPeople();
    //         consultaPlanets();
    //         // console.log('peopleData: ', peopleData);
    //         console.log('useEffect - iscall: ', isCall);
    //         setIsCall(false);
    //     }
    // }, [isCall]);

    // useEffect(() => {
    //     console.log('UseEffect - peopleData: ', peopleData);
    //     console.log('UseEffect - planetsData: ', planetsData);
    //     if ((peopleData.length > 1) || (planetsData.length > 1)) {
    //         setArrPeople(peopleData);
    //         setArrPlanets(planetsData);
    //         setCarga(false);
    //     }
    // }, [peopleData, planetsData]);

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

    //     const consultaPeople = () => {
    //         // let character;
    //         var requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow'
    //         };
    //         fetch('https://swapi.dev/api/people', requestOptions)
    //             .then(response => response.json())
    //             .then(result => {
    //                 console.log('consultaPeople - result', result)
    //                 //   console.log('consultaPeople - cantidad:', result.length);
    //                 var dataPerson = result.results;
    //                 console.log('consultaPeople - results:', dataPerson);
    //                 for (const key in dataPerson) {
    //                     // console.log('consultaPeople - key:', key);
    //                     // console.log('consultaPeople - url:', dataPerson[key].url);
    //                     // character = consultaDetPeople(dataPerson[key].url, dataPerson[key].uid, dataPerson[key].name);
    //                     consultaDetPeople(key, dataPerson);
    //                 }
    //                 //   setCarga(false);
    //                 //   setPeopleData(dataPerson);
    //             })
    //             .catch(error => console.log('consultaPeople - error', error))

    //     }
    //     const consultaDetPeople = (index, item) => {
    //         let people = [];
    //         // let image = 'https://starwars-visualguide.com/assets/img/planets/@.jpg';
    //         let image = 'https://starwars-visualguide.com/assets/img/characters/@.jpg';

    //         // var requestOptions = {
    //         //     method: 'GET',
    //         //     redirect: 'follow'
    //         //   };
    //         //   fetch(url, requestOptions)
    //         //     .then(response => response.json())
    //         //     .then(result => {
    //         //       console.log('consultaDetPeople - result', result)
    //         //     //   console.log('consultaPeople - cantidad:', result.length);
    //         //       var dataDetPerson = result.result;
    //         //       console.log('consultaDetPeople - results:', dataDetPerson);
    //         //       console.log('consultaDetPeople - description:', dataDetPerson.description);
    //         //       console.log('consultaDetPeople - properties:', dataDetPerson.properties);
    //         //       console.log('consultaDetPeople - eye_color:', dataDetPerson.properties.eye_color);
    //         let arr = item[index].url.split('/');
    //         let id = arr[arr.length - 2];
    //         console.log('consultaDetPeople - id:', id);
    //         people.push({
    //             'id': id,
    //             'name': item[index].name,
    //             'img': image.replace('@', `${id}`),
    //             'gender': item[index].gender,
    //             'hair_color': item[index].hair_color,
    //             'eye_color': item[index].eye_color,
    //             'birth_year': item[index].birth_year,
    //             'height': item[index].height,
    //             'skin_color': item[index].skin_color,
    //         });
    //         console.log('consultaDetPeople - people:', people);
    //         setPeopleData((p) => [...p, people[0]]);
    //         //   for (const key in dataPerson) {
    //         //     console.log('consultaPeople - key:', key);
    //         //     console.log('consultaPeople - url:', dataPerson[key].url);
    //         //   }
    //         //   setPeopleData(dataPerson);
    //         //     })
    //         //     .catch(error => console.log('consultaPeople - error', error));

    //         // return people;
    //     }
    // //Planets
    // const consultaPlanets = () => {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };
    //     fetch('https://swapi.dev/api/planets', requestOptions)
    //         .then(response => response.json())
    //         .then(result => {
    //             console.log('consultaPlanets - result', result)
    //             var dataPlanets = result.results;
    //             console.log('consultaPlanets - results:', dataPlanets);
    //             for (const key in dataPlanets) {
    //                 consultaDetPlanets(key, dataPlanets);
    //             }
    //             //   setCarga(false);
    //             //   setPeopleData(dataPerson);
    //         })
    //         .catch(error => console.log('consultaPeople - error', error))

    // }
    // const consultaDetPlanets = (index, item) => {
    //     let planets = [];
    //     // let image = 'https://starwars-visualguide.com/assets/img/planets/@.jpg';
    //     let image = 'https://starwars-visualguide.com/assets/img/planets/@.jpg';

    //     let arr = item[index].url.split('/');
    //     let id = arr[arr.length - 2];
    //     console.log('consultaDetPlanets - id:', id);
    //     let img = image.replace('@', `${id}`);
    //     if(id == 1){
    //         img = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
    //     }
    //     planets.push({
    //         'id': id,
    //         'name': item[index].name,
    //         'img': img,
    //         'population': item[index].population,
    //         'terrain': item[index].terrain,
    //         'climate': item[index].climate,
    //         'orbital_period': item[index].orbital_period,
    //         'rotation_period': item[index].rotation_period,
    //         'diameter': item[index].diameter,
    //     });
    //     console.log('consultaDetPlanets - planets:', planets);
    //     setPlanetsData((p) => [...p, planets[0]]);
    // }

    return (
        <>
            <Layout>

                <div className='container mt-3'>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item" disabled={arrPeople.previous? false : true} ><a class="page-link" href="#" onClick={()=>getPrevPeople()}>Previous</a></li>
                            <li class="page-item" disabled={arrPeople.next? false : true} ><a class="page-link" href="#" onClick={()=>getNextPeople()}>Next</a></li>
                        </ul>
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

                <div className='container mt-3'>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item" disabled={arrPlanets.previous? false : true} ><a class="page-link" href="#" onClick={()=>getPrevPlanets()}>Previous</a></li>
                            <li class="page-item" disabled={arrPlanets.next? false : true} ><a class="page-link" href="#" onClick={()=>getNextPlanets()}>Next</a></li>
                        </ul>
                    </nav>
                </div>

            </Layout>
        </>

    );
}

export default Home;