import axios, {AxiosRequestConfig} from 'axios';

class APIService {
  private static instance: APIService;
  private api = axios.create();

  private constructor() {}

  public static getInstance(): APIService {
    if (!APIService.instance) {
      APIService.instance = new APIService();
    }
    return APIService.instance;
  }

  public async get<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.get<T>(url, config);
  }
  public async post<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ) {
    return this.api.post<T>(url, data, config);
  }

  public async put<T, D = unknown>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig,
  ) {
    return this.api.put<T>(url, data, config);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig) {
    return this.api.delete<T>(url, config);
  }
}

export const apiService = APIService.getInstance();
