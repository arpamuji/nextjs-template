/**
 * Example Axios Configuration
 * 
 * This is a demonstration implementation showing how to configure
 * an Axios client for API calls.
 * 
 * In a real-world application, you should:
 * - Add request/response interceptors for auth tokens
 * - Implement retry logic for failed requests
 * - Add proper error handling and logging
 * - Configure CSRF protection
 * - Add request/response transformation
 * - Implement request cancellation
 * - Add timeout handling and retry policies
 * - Configure different instances for different APIs
 * 
 * Modify this code based on your project's specific requirements.
 */

import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const CONFIG = {
    baseURL: '/api',
    timeout: 10000,
    withCredentials: true,
    maxRedirects: 0,
};

const createAxiosInstance = (config: AxiosRequestConfig): AxiosInstance => {
    return axios.create(config);
};

export const clientFetch = createAxiosInstance(CONFIG);
