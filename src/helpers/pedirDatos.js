import data from "../data/data.json"

export const pedirDatos = () => {

        return new Promise((resolve, reject)    =>{
            setTimeout ( () => {
                resolve (data);
            } , 2000)
        })

}

export const pedirItemPorId = (id) =>{

    return new Promise((resolve, reject) =>{
        const item = data.find((it) => it.id === id) 
        
        if (item) {
            resolve (item)
        }else { reject ({
            error:"Articulo no existe"
            
        })

        }
    })
}