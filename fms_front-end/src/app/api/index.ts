const BaseUrl = "http://localhost:3001"

export const apiManager = async(
    endpoint : string,
    options: RequestInit = {}
):Promise<Response> => {
    const url = new URL(endpoint, BaseUrl);
    
    const defaultOptions : RequestInit = {
        credentials : 'include',
        headers : {
            'Content-Type' : 'application/json',
        },
        ...options,
    };

    console.log("gdgd",url.toString()); 
    const response = await fetch(url.toString(), defaultOptions);

    console.log(response)
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    
    return response;
}


// Helper functions for common HTTP methods
export const get = (endpoint: string, options?: RequestInit) => {
    console.log('sds', endpoint);
    apiManager(endpoint, { ...options, method: 'GET' });
}
    

export const post = (endpoint: string, body: any, options?: RequestInit) => 
apiManager(endpoint, { ...options, method: 'POST', body });

export const put = (endpoint: string, body: any, options?: RequestInit) => 
apiManager(endpoint, { ...options, method: 'PUT', body });

export const del = (endpoint: string, options?: RequestInit) => 
apiManager(endpoint, { ...options, method: 'DELETE' });