const BaseUrl = "http://localhost:3000"

export interface ApiResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: Headers;
}


export const apiManager = async <T>(
    endpoint: string,
    options: RequestInit = {}
): Promise<ApiResponse<T>> => {
    const url = new URL(endpoint, BaseUrl);

    const defaultOptions: RequestInit = {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-store',
        ...options,
    };
    try {
        const response = await fetch(url.toString(), defaultOptions);

        let data;
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        if (!response.ok) {
            throw new Error(
                JSON.stringify({
                    status: response.status,
                    statusText: response.statusText,
                    data,
                    url
                })
            );
        }
        return {
            data,
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        }
    } catch (err) {
        console.log("API request failed", err);
        throw err;
    }
};


// Helper functions for common HTTP methods
export const get = async <T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> => {
    return await apiManager<T>(endpoint, { ...options, method: 'GET' });
}


export const post = async <T>(endpoint: string, body: any, options?: RequestInit): Promise<ApiResponse<T>> => {
    return apiManager<T>(endpoint, { ...options, method: 'POST', body: JSON.stringify(body) });
}


export const put = async <T>(endpoint: string, body: any, options?: RequestInit): Promise<ApiResponse<T>> => {
    return apiManager<T>(endpoint, { ...options, method: 'PUT', body: JSON.stringify(body) });
}


export const del = async <T>(endpoint: string, options?: RequestInit): Promise<ApiResponse<T>> => {
    return apiManager<T>(endpoint, { ...options, method: 'DELETE' });
}
