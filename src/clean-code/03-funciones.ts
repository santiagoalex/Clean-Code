(() => {

  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActorsByMovieId(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorInfoById(actorId: string) {
    console.log({ actorId });
  }

  // Crear una película
  interface Movie {
    title: string, description: string, rating: number, cast: string[]
  }

  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  interface Actor {
    fullName: string, 
    birthdate: Date
  }
  // Crea un nuevo actor
  function createActor({fullName, birthdate}:Actor): boolean {

    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === 'fernando') return false;

    console.log('Crear actor');
    return true;

  }




})();




