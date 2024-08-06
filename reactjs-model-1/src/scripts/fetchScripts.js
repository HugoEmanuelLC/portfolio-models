import { urlServer } from '../scripts/urlServer'

export async function getDatasMenus() {
    return await fetch(urlServer+'/menus',{
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
        return error
    });
}

export async function getDatasProduits(id) {
    return await fetch(urlServer+`/menu/${id}`, {
        method: 'GET',
    })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
        return error
    });

}

