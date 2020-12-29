const fs     = require('fs');
const chai   = require('chai');
const should = chai.should();
const expect = chai.expect;

const db     = require('../datastore/datastore')

const resetDatabase = () => {
    db.setState({}); // clears by setting to empty JSON object.
    console.log('Database cleared.');

    db.setState(JSON.parse(fs.readFileSync('./testData.json', { encoding: "utf-8" }))); // Syncrhonously reads the testData.json file and makes that the db.
    console.log('Database reset to the contents of testData.json');
}

// Top level
beforeEach('[ Testing Post Features ]: Resetting Database before next SUITE', function() {
    resetDatabase();
})
describe('Posting Messages', function() {
    
    /**
     * Before each individual test, clear the database and reset it to the state defined in testData.json.
     * This ensures each test runs with the same, unmodified data, so that each test can safely modify the data without
     * fear of messing up the test database.
     **/
    beforeEach('[ Posting Messages ]: Resetting database before next TEST', function(done) {
        resetDatabase();
    });

    it('')
});

