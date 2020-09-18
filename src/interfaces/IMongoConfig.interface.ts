export interface IMongoConfig {
    uri: string | undefined;
    username: string | undefined;
    password: string | undefined;
    host: string | undefined;
    port: string | undefined;
    database: string | undefined;
    options?: string | undefined;
}
