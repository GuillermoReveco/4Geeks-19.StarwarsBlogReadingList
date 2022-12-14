import React, { useContext } from "react";
import { useParams } from "react-router";
import Layout from './Layout';
import { arrPlanetsContext } from '../store/PlanetsStore'

const DetallePlanets = () => {
    const { arrPlanets } = useContext(arrPlanetsContext);
    const param = useParams();
    console.log('DetallePlanets - arrPlanets', arrPlanets);
    console.log('DetallePlanets - id', param.id);
    return (
        <Layout>
            <div>
                {
                    arrPlanets && arrPlanets.results.map((item, index) => {
                        console.log('DetallePlanets - item', item);
                        console.log('DetallePlanets - index', index);
                        // let ind = index + 1;
                        let arr = item.url.split('/');
                        let ind = arr[arr.length - 2];
                        console.log('DetallePlanets - ind', ind);

                        if (ind == param.id) {

                            let imgPlanets = 'https://starwars-visualguide.com/assets/img/planets/@.jpg';
                            let img = imgPlanets.replace('@', `${ind}`);

                            if(ind == 1){
                                img = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
                            }


                            return (
                            <div key={ind}>
                            <div className="card mb-3" >
                                <div className="row g-0" >
                                    <div className="col-md-4">
                                        <img src={img} className="img-fluid rounded-start" alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <hr className="linea" />
                                <div className="text-danger fw-bold">
                                    <div className="row">
                                        <div className="col">Name</div>
                                        <div className="col">Climate</div>
                                        <div className="col">Population</div>
                                        <div className="col">Orbital<br/> Period</div>
                                        <div className="col">Rotation <br /> Period</div>
                                        <div className="col">Diameter</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">{item.name}</div>
                                        <div className="col">{item.climate}</div>
                                        <div className="col">{item.population}</div>
                                        <div className="col">{item.orbital_period}</div>
                                        <div className="col">{item.rotation_period}</div>
                                        <div className="col">{item.diameter}</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            )

                        }

                    })
                }
            </div>
        </Layout>
    );
}

export default DetallePlanets;