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
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.timeout = 1000;
            xhr.onreadystatechange = () => {
                if(xhr.readyState === XMLHttpRequest.DONE){
                    const d = JSON.parse(xhr.responseText);
                    if(d) {
                        // @ts-ignore
                        if(d.error) {
                            reject(d.error);
                        }else{
                            resolve(d);
                        }
                    }else{
                        reject({code: 0, message: "Cant parse json"});
                    }
                }
            }
            xhr.onerror = () => {
                reject({code: 0, message: "Xhr error"});
            };
            xhr.ontimeout = () => {
                reject({code: 0, message: "Timeout"});
            }
            xhr.send(null);
        });
    }

}