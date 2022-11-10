import React, { useContext } from "react";
import { useParams } from "react-router";
import Layout from './Layout';
import { arrPeopleContext } from '../store/PeopleStore'

const Detalle = () => {
    const { arrPeople } = useContext(arrPeopleContext);
    const param = useParams();
    console.log('Detalle - arrPeople', arrPeople);
    console.log('Detalle - arrPeople', param.id);
    return (
        <Layout>
            <div>
                {
                    arrPeople && arrPeople.results.map((item, index) => {
                        console.log('Detalle - item', item);
                        console.log('Detalle - index', index);
                        // let ind = index + 1;
                        let arr = item.url.split('/');
                        let ind = arr[arr.length - 2];
                        console.log('Detalle - ind', ind);

                        if (ind == param.id) {

                            let imgPeople = 'https://starwars-visualguide.com/assets/img/characters/@.jpg';
                            let img = imgPeople.replace('@', `${ind}`);

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
                            <div>
                                <hr className="linea" />
                                <div className="text-danger fw-bold">
                                    <div className="row">
                                        <div className="col">Name</div>
                                        <div className="col">Birth <br /> Year</div>
                                        <div className="col">Gender</div>
                                        <div className="col">Height</div>
                                        <div className="col">Skin <br /> Color</div>
                                        <div className="col">Eye <br /> Color</div>
                                    </div>
                                    <div className="row">
                                        <div className="col">{item.name}</div>
                                        <div className="col">{item.birth_year}</div>
                                        <div className="col">{item.gender}</div>
                                        <div className="col">{item.height}</div>
                                        <div className="col">{item.skin_color}</div>
                                        <div className="col">{item.eye_color}</div>
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

export default Detalle;