import delay from './delay';

const users = [
    {
        name:'Alex Pop',
        position:'Proggrammer'
    },
    {
        name:'Deak Fery',
        position:'CSS GUY'
    },
    {
        name:'Simona Bostaca',
        position:'Redux Expert'
    },
    {
        name:'Banu Mihai',
        position:'Angular Expert'
    },
    {
        name:'Alex Cornea',
        position:'Team Lider'
    }

];

class Users {
    static getAllUsers() {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve(Object.assign([], users))
            }, delay);
        });
    }
}

export default Users;