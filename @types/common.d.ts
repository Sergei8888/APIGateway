export type Schema = {
    description?: string;
    $id: string;
    properties: {
        [key: string]: {
            type: string;
        };
    };
    required?: string[];
    additionalProperties: false;
    type: string;
};

export type PutSchema = Schema & {
    properties: {
        [key: string]: {
            type: string;
        };
        // TODO: Must be reverse typed as Exclude<string, 'id'> but it is not supported in typescript yet
        id?: undefined;
        createdAt?: undefined;
    };
};

export type PatchSchema = Schema & {
    properties: {
        [key: string]: {
            type: string;
        };
        // TODO: Must be reverse typed as Exclude<string, 'id'> but it is not supported in typescript yet
        id?: undefined;
    };
};

export type ArraySchema = {
    description?: string;
    items: Schema;
    type: 'array';
};

type Entity = {
    name: string;
    nameCapitalized: string;
    routePrefix: string;
    schemaId: string;
};
