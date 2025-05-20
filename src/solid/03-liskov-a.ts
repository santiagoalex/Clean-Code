import { Tesla, Audi, Toyota, Honda, VehicleRepository, Volvo, Ford } from './03-liskov-b';




(() => {

    const printCarSeats = (cars: VehicleRepository[]) => {

        cars.forEach((car)=>{
            console.log(car.constructor.name,car.getNumberOfSeats )
               
        })
    }

    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(5),
        new Ford(5),

    ];


    printCarSeats(cars);

})();