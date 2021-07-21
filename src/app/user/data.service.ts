export class DataService {
    getDetails(){
        const resultPromise = new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve('Data');
            }, 3000)
        })

        return resultPromise;
    }

}