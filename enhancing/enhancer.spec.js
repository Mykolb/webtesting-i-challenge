const enhancer = require('./enhancer.js');
// test away!

//testing passed 
// function can be named test or it 
//add an x in fron to skip test tex xit('should return something')
//can add toodo ex: it.todo('something, something)
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
        "durability": 10,
        })

        //name of the imported file has to be referenced for the variable
        //took awhile to learn that haha!
       const repair = enhancer.repair(item)
       expect(repair.durability).toBe(100);
        })


        //only trying to return item that is the same hmm
    describe('succeed(item)', () => {
        it('should return a new item that is modified by 1', () => {
            
            const item = ({
                "name": "crossbow",
                "enhancement": 5,
                "durability": 10,
                "level": 19
            });
        

            const actual = enhancer.succeed(item)

            
            expect(actual.enhancement).toEqual(6); //working
            
            })

        it('should return same old same old because it is level 20', () => {
            const item = ({
                "name": "crossbow",
                "durability": 10,
                "enhancement": 5,
                "level": 20
            });

            const actual = enhancer.succeed(item)

            expect(actual.enhancement).toEqual(5) //working
        })
    
    describe('fail(item', () => {
        it('should return durability +5 because enhancemnt is less than 15', () => {
            const item = ({ 
                    "name": "crossbow",
                    "durability": 8,
                    "enhancement": 5,
                    "level": 20
            })

            const actual = enhancer.fail(item)

            //pass in props I want to change 
            expect(actual.durability).toEqual(3)//seems to be working 
        })

        it('should return durability decreased by 10 because enhancement is 15+', () => {
            const item = ({ 
                "name": "crossbow",
                "durability": 30,
                "enhancement": 20,
                "level": 20
        })

        const actual = enhancer.fail(item)

        expect(actual.durability).toEqual(20) //seems to be working 
        })



        it('should return enhancement level -1 because enhancement level is greater than 16', () => {
            const item = ({ 
                "name": "crossbow",
                "durability": 30,
                "enhancement": 20,
                "level": 30
        })

        const actual = enhancer.fail(item)

        expect(actual.level).toEqual(29); //not sure why this isn't working, seems right 

        })
    })




        })

    })

  
     
    

})
    

