const cds = require('@sap/cds');

module.exports = class CatalogService extends cds.ApplicationService {
    init() {
        const books = [{
            "ID": 1, "title": "Wuthering Heights", "stock": 100
        }, {
            "ID": 2, "title": "Jane Eyre", "stock": 500
        }];

        const { Books } = this.entities;

        this.on("READ", Books, (req) => {
            return books
        });
    }
}