export class API {

    static request(methodName: string, params: object): Promise<object>{
        return new Promise<object>((resolve, reject) => {
            let apiUrl: string;
            if (process.env.NODE_ENV === "development") {
                apiUrl = "http://127.0.0.1:3041/";
            }else{
                apiUrl = "/";
            }
            let url = apiUrl + methodName + "?";

            let data = [];
            for (let key of Object.keys(params)) {
                // @ts-ignore
                let value: string = params[key];
                data.push(encodeURIComponent(key) + "=" + encodeURIComponent(value));
            }
            url += '&' + data.join("&");

            fetch(url, {
                method: 'GET',
            })
                .then(response => response.json()
                    .then(d => {
                        if (d.error !== undefined) {
                            reject(d.error);
                        } else {
                            resolve(d)
                        }
                    })
                    .catch(reject)
                )
                .catch(reject);
        });
    }

}