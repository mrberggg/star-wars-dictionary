'use strict';

app
  .service('dataTypes', function () {
    this.types           = {
      person:   {
        title: 'Person',
        key:   'people',
        icon:  'account'
      },
      film:     {
        title: 'Film',
        key:   'films',
        icon:  'movie'
      },
      planet:   {
        title: 'Planet',
        key:   'planets',
        icon:  'globe'
      },
      species:  {
        title: 'Species',
        key:   'species',
        icon:  'walk'
      },
      starship: {
        title: 'Starship',
        key:   'starships',
        icon:  'airplane'
      },
      vehicle:  {
        title: 'Vehicle',
        key:   'vehicles',
        icon:  'directions-car'
      }
    };
    this.isValidDataType = function (type) {
      for (var t in this.types) {
        var title = this.types[t].title;
        if (title.toLowerCase() === type.toLowerCase()) {
          return true;
        }
      }
      return false;
    }
  })
  .service('fetchData', ['dataTypes', function (dataTypes) {
    var types          = dataTypes.types;
    this.getAll        = function () {
      //return getFakeData();
      var people    = this.getPeople();
      var films     = this.getFilms();
      var planets   = this.getPlanets();
      var species   = this.getAllSpecies();
      var starships = this.getStarships();
      var vehicles  = this.getVehicles();
      return Promise.all([people, films, planets, species, starships, vehicles])
        .then(function (results) {
          var data = [].concat(
            results.shift(), // People
            results.shift(), // Films
            results.shift(), // Planets
            results.shift(), // Species
            results.shift(), // Starships
            results.shift() // Vehicles
          );
          return data;
        });
    };
    this.getPerson     = function (id) {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getPerson(id, function (item) {
            resolve(formatPerson(item));
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getPeople     = function () {
      return new Promise(function (resolve, reject) {
        swapiModule.getPeople(function (d) {
          try {
            var items     = d.results;
            var formatted = items.map(function (item) {
              return formatPerson(item);
            });
            resolve(formatted);
          } catch (e) {
            reject(e);
          }
        });
      });
    };
    this.getFilm       = function (id) {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getFilm(id, function (item) {
            resolve(formatFilm(item));
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getFilms      = function () {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getFilms(function (d) {
            var items     = d.results;
            var formatted = items.map(function (item) {
              return formatFilm(item);
            });
            resolve(formatted);
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getPlanet     = function (id) {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getPlanet(id, function (item) {
            resolve(formatPlanet(item));
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getPlanets    = function () {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getPlanets(function (d) {
            var items     = d.results;
            var formatted = items.map(function (item) {
              return formatPlanet(item);
            });
            resolve(formatted);
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getSpecies    = function (id) {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getSpecies(id, function (item) {
            resolve(formatSpecies(item));
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getAllSpecies = function () {
      return new Promise(function (resolve, reject) {
        swapiModule.getAllSpecies(function (d) {
          try {
            var items     = d.results;
            var formatted = items.map(function (item) {
              return formatSpecies(item);
            });
            resolve(formatted);
          } catch (e) {
            reject(e);
          }
        });
      });
    };
    this.getStarship   = function (id) {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getStarship(id, function (item) {
            resolve(formatStarship(item));
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getStarships  = function () {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getStarships(function (d) {
            var items     = d.results;
            var formatted = items.map(function (item) {
              return formatStarship(item);
            });
            resolve(formatted);
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getVehicle    = function (id) {
      return new Promise(function (resolve, reject) {
        try {
          swapiModule.getVehicle(id, function (item) {
            resolve(formatVehicle(item));
          });
        } catch (e) {
          reject(e);
        }
      });
    };
    this.getVehicles   = function () {
      return new Promise(function (resolve, reject) {
        try {
          return swapiModule.getVehicles(function (d) {
            var items     = d.results;
            var formatted = items.map(function (item) {
              return formatVehicle(item);
            });
            resolve(formatted);
          });
        } catch (e) {
          reject(e);
        }
      });
    };

    //function getFakeData() {
    //  return new Promise(function (response, reject) {
    //    var data = [
    //      {id: 1, title: 'abc', searchText: 'abc', icon: 'directions-car'},
    //      {id: 2, title: 'def', searchText: 'def', icon: 'face'},
    //      {id: 3, title: 'ghi', searchText: 'ghi', icon: 'home'},
    //      {id: 4, title: 'jkl', searchText: 'jkl', icon: 'home'},
    //      {id: 5, title: 'mno', searchText: 'mno', icon: 'home'},
    //    ];
    //    response(data);
    //  });
    //}

    function formatPerson(item) {
      item.id         = getIdFromUrl(types.person.key, item.url);
      item.type       = types.person.title;
      item.title      = item.name;
      item.icon       = types.person.icon;
      item.searchText = [
        item.name,
        item.type
      ].join('');
      return item;
    }

    function formatFilm(item) {
      item.id         = getIdFromUrl(types.film.key, item.url);
      item.type       = types.film.title;
      //item.title = item.title; // title already exists
      item.icon       = types.film.icon;
      item.searchText = [
        item.director,
        item.producer,
        item.title,
        item.type
      ].join('');
      return item;
    }

    function formatPlanet(item) {
      item.id         = getIdFromUrl(types.planet.key, item.url);
      item.type       = types.planet.title;
      item.title      = item.name;
      item.icon       = types.planet.icon;
      item.searchText = [
        item.climate,
        item.name,
        item.terrain,
        item.type
      ].join('');
      return item;
    }

    function formatSpecies(item) {
      item.id         = getIdFromUrl(types.species.key, item.url);
      item.type       = types.species.title;
      item.title      = item.name;
      item.icon       = types.species.icon;
      item.searchText = [
        item.classification,
        item.designation,
        item.language,
        item.name,
        item.skin_colors,
        item.type
      ].join('');
      return item;
    }

    function formatStarship(item) {
      item.id         = getIdFromUrl(types.starship.key, item.url);
      item.type       = types.starship.title;
      item.title      = item.name;
      item.icon       = types.starship.icon;
      item.searchText = [
        item.manufacturer,
        item.model,
        item.name,
        item.type
      ].join('');
      return item;
    }

    function formatVehicle(item) {
      item.id         = getIdFromUrl(types.vehicle.key, item.url);
      item.type       = types.vehicle.title;
      item.title      = item.name + ' - ' + item.model;
      item.icon       = types.vehicle.icon;
      item.searchText = [
        item.name,
        item.model
      ].join('');
      return item;
    }

    function getIdFromUrl(type, url) {
      var matches = new RegExp('https?:\/\/swapi\.co\/api\/' + type + '\/(\\d*)\/').exec(url);
      if (Array.isArray(matches)) {
        return matches[1];
      }
      return null;
    }
  }]);

