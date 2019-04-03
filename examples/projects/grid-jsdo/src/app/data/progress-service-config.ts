import { DataServiceConfig } from './service-config';
import { progress } from '@progress/jsdo-core';

export class ProgressServiceConfig extends DataServiceConfig {
    public jsdo: progress.data.JSDOOptions;
    public ds: {
        tableRef?: string;
        filter?: any;
        sort?: any;
        top?: any;
        skip?: any;
        mergeMode?: any;
        pageSize?: any;
        readLocal?: boolean;
        countFnName?: string;
    };
    public getJsdoResource?: (options: progress.data.JSDOOptions) => progress.data.JSDO;
}
