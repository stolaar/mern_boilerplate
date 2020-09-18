import keys from "../config/keys";
import {IMongoConfig} from "../interfaces/IMongoConfig.interface";

const buildMongoURI = function (config: IMongoConfig): string  {
    const defaults = {
        host: "localhost",
    };
    config = Object.assign({}, defaults, config);
    let uri = "mongodb://";

    if (config.uri) uri = config.uri;

    if (config.username) {
        uri += config.username;
    }

    if (config.password) {
        uri += ":" + config.password;
    }

    if (config.username) {
        uri += "@";
    }

    uri += config.host;

    if (config.port) {
        uri += ":" + config.port;
    }

    if (config.database || config.options) {
        uri += "/";
    }

    if (config.database) {
        uri += config.database;
    }

    if (config.options) {
        uri += "?" + config.options;
    }

    return uri;
};

const mongoURI = buildMongoURI(keys.db)
export default mongoURI
