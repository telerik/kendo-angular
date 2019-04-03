import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {
    static settings: IAppConfigSettings = <IAppConfigSettings>{
        "dataProviders": {
            "DataProvider1": {
                "serviceUri": "https://oemobiledemo.progress.com/OEMobileDemoServices",
                "catalogUris": ["https://oemobiledemo.progress.com/OEMobileDemoServices/static/CustomerService.json"],
                "authenticationModel": "Anonymous"
            }
        }
    };
}

export interface IAppConfigSettings {
    dataProviders: any;
    authentication: any;
}

export const environmentBase: any = {
    getDataProviders(): any {
        return AppConfigService.settings.dataProviders;
    },
    getAuthentication(): any {
        return AppConfigService.settings.authentication;
    },
};

export class DataServiceConfig {
    public dataProviderName: string;
    public serverOperations = false;
    public createModel: () => any;
    public mapData?: (dataItem: any) => any;
}

@Injectable()
export class DataProviderService {
    public get(providerName: string): any {
        const dataProviders: any = environmentBase.getDataProviders();
        return dataProviders[providerName];
    }
}

export class DataServiceRequest {
    url: string;
    routeParams?: { [param: string]: any };
    queryString?: string;
}
