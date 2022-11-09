

const getState = ({getStore, getActions, setStore}) =>{
    return {
        store:{
            favorito:[]
        },
        actions:{
            cargarFav:(id, tipo, name)=>{
                // favorito.push(name)
                // setStore({...store, favorito:store.favorito.concat(name)})
                // console.log('cargaFav', id)
                // console.log('cargaFav', name)
                // let fav = {'id': id, 'name': name};
                const store = getStore();

                let isfav=false;
                if(store.favorito.length === 0){
                    isfav = false;
                }else{
                    isfav = store.favorito.some((dato)=>{
                        return (dato.id === id && dato.tipo === tipo)
                    });
                }
                if(isfav){
                    let favorito = store.favorito.filter((item)=> item.name != name)
                    setStore({favorito: favorito});
                }else{
                    store.favorito.push({
                        'id': id, 
                        'tipo': tipo, 
                        'name': name
                     })
                    setStore(store);
                }


                // console.log('cargaFav', fav)
                // const store = getStore();
                // const fav = store.favorito.push({
                //     'id': id, 
                //     'name': name
                // });
                // console.log('cargaFav', store.favorito)
                // setStore({favorito: store.favorito});
                // setStore({
                //     const store = getStore();
                //     favorito:[...favorito, name]
                // })
                // const store = getStore();
                // // if(!store.favorito.includes(name)){
                // //     const favorito = store.favorito.concat(name);
                // //     setStore({favorito: favorito});
                // // }
                // // // setStore({...favorito, favorito});
                // let fav = {'id': id, 'name': name};
                // let isfav=false;
                // if(store.favorito.length === 0){
                //     isfav = false;
                // }else{
                //     isfav = store.favorito.some((dato)=>{
                //         return dato.id === fav.id
                //     });
                // }
                // if(isfav){
                //     let favorito = store.favorito.filter((item)=> item.name != fav.name)
                //     setStore({favorito: favorito});
                // }else{
                //     let newfavorito = store.favorito.push(fav);
                //     setStore({favorito: newfavorito});
                // }
            },
            deleteFav:(id, name)=>{
                // favorito.filter((item, index)=> index != id)
                console.log('deleteFav - name', name)
                const store = getStore();
                const favorito = store.favorito.filter((item)=> item.name != name)
                setStore({favorito: favorito});
            },
            conFav:(id, tipo)=>{
                const store = getStore();

                let isfav=false;
                if(store.favorito.length === 0){
                    isfav = false;
                }else{
                    isfav = store.favorito.some((dato)=>{
                        return (dato.id === id && dato.tipo === tipo)
                    });
                }
                return isfav;
            }
        }
    };
};

export default getState;