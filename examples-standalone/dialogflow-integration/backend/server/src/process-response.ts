import { structProtoToJson } from './structjson';

export function processResponse(value) {
    const result = value[0].queryResult;
    const payload = result.webhookPayload?.fields?.null?.structValue;
    return {
        messages: result.fulfillmentMessages,
        data: structProtoToJson(payload)
    };   
}
