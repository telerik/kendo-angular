import { ProgressServiceConfig } from './progress-service-config';
import { DataProviderCustomer } from './customer.model';

export function getCustomerConfig(): ProgressServiceConfig {
    return {
        dataProviderName: 'DataProvider1',
        serverOperations: true,
        createModel: () => new DataProviderCustomer(),
        jsdo: {
            name: 'Customer',
        },
        ds: {
            countFnName: 'count',
        },
    };
}
