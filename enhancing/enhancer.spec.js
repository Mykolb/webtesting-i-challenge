const enhancer = require('./enhancer.js');
// test away!

//testing passed 
test('we are up and running', () => {
    expect(true).toBe(true);
})
//add fille that we are importing from
describe('./enhancer.js', () => {

//add the method to function
   
    describe('repair(item)', () => {
        it('should return new item with durability restored to 100', () => {
          
           
        const item = ({
        "name": "crossbow",
        "durability": "52",
        "enahancement": "unlimited bows"
        })

        //name of the imported file has to be referenced for the variable
        //took awhile to learn that haha!
       const repair = enhancer.repair(item)
       expect(repair.durability).toBe(100);

        })
    })
})
