## SETTING UP TESTING ENVIRONMENT 

    [x] yarn init -y (to create a quick json, answers yes to everything)
    [x] yarn add jest --dev
    [] in package.json, add jest and can specify diff watch commands to watch for tests 
    "scripts": {
    "test": "jest --watchAll"
    },
    [] yarn test 
        -  anything in a __tests__ folder, jest will run files in that folder, has to be called __tests__ 
        file names need to be setup as name.test.js or name.spec.js
    []