import capitalizeFirstLetter from '../utils/capitalizeFirstLetter';
import pluralize from 'pluralize';

const entities = {
    user: {
        name: '',
        get nameCapitalized() {
            console.log(this);
            return capitalizeFirstLetter(this.name);
        },
        get routePrefix() {
            return pluralize(this.name);
        }, // Must be plural of single name
        schemaId: 'User', // Name of the typescript type inside schemas folder
    },

    telescope: {
        name: '',
        get nameCapitalized() {
            return this.name === '' ? '' : capitalizeFirstLetter(this.name);
        },
        get routePrefix() {
            return this.name === '' ? '' : pluralize(this.name);
        },
        schemaId: 'Telescope',
    },
};

applyNames(entities);

function applyNames(entitiesConfig: typeof entities) {
    let entityName: keyof typeof entities;
    for (entityName in entitiesConfig) {
        entitiesConfig[entityName].name = entityName;
    }
}

export { entities };
