import nconf from 'nconf';

const envConfig = {
    handle(app) {
        this.configureCommon(app);

        if(nconf.get('development')) {
            this.configureDevelopmentEnv(app);
        } else {
            this.configureProductionEnv(app);
        }
    },

    configureCommon(/*app*/) {},

    configureProductionEnv(/*app*/) {},

    configureDevelopmentEnv(/*app*/) {}
};

export default envConfig;
