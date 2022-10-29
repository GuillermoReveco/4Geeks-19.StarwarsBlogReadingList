

const getStore = ({getStore, getActions, setStore}) =>{
    return {
        store:{
            favorito:[]
        },
        actions:{
            cargarFav:(name)=>{
                // favorito.push(name)
                // setStore({...store, favorito:store.favorito.concat(name)})
                // console.log('cargaFav')
                setStore({
                    favorito:[...favorito, name]
                })
            },
            deleteFav:(id)=>{
                // favorito.filter((item, index)=> index != id)
                console.log('deleteFav')
            }
        }
    }
}

export default getStore;