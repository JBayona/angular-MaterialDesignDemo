'use strict';

angular.module('angularMaterialDesignDemoApp')
  .service('Users', [ '$q',function ($q) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var users = [
      {
        name:'Ivan Bayona',
        avatar:'svg-2',
        content: 'La educación secundaria tiene como objetivo capacitar al alumno para poder iniciar estudios de educación media superior. Al terminar la educación secundaria se pretende que el alumno desarrolle las suficientes habilidades, valores y actitudes para lograr un buen desenvolvimiento en la sociedad.'
      },
      {
        name:'Maria Bayona',
        avatar:'svg-6',
        content: 'Formación destinada a desarrollar la capacidad intelectual, moral y afectiva de las personas de acuerdo con la cultura y las normas de convivencia de la sociedad a la que pertenecen.'
      },
      {
        name:'Elena Bayona',
        avatar:'svg-3',
        content: 'Actuación es el trabajo realizado por un actor o actriz al representar a un personaje en una obra teatral, cinematográfica o de otro tipo. Para el actor, dicho proceso comienza desde una interiorización para conocer el principio de dicho personaje y traerlo desde lo más profundo y transformarlo en un personaje integrado.'
      },
      {
        name:'Jorge Ramos',
        avatar:'svg-4',
        content: 'La ingeniería de la industria automotriz, junto con la ingeniería aeroespacial y la ingeniería marina, es una rama de la ingeniería vehicular, que incorpora elementos de mecánica, electricidad, electrónica, software e ingeniería de seguridad aplicándolos al diseño, manufactura y operación de motocicletas, automóviles, autobuses y camiones y sus respectivos subsistemas de ingeniería.'
      },
      {
        name:'Jorge Bayona',
        avatar:'svg-1',
        content: 'La ingeniería en sistemas computacionales o ingeniería informática es un modo de enfoque interdisciplinario que permite estudiar y comprender la realidad, con el propósito de implementar u optimizar sistemas informáticos complejos. Puede verse como la aplicación tecnológica de la teoría de sistemas a los esfuerzos de la ingeniería, adoptando en todo este trabajo el paradigma sistémico. La ingeniería en sistemas integra otras disciplinas y grupos de especialidad en un esfuerzo de equipo formando un proceso de desarrollo estructurado.'
      }
    ];

    var infoUsers = {
        users: users
    };

    this.returnUsers = function(){
      var defer = $q.defer();
      if(users){
        defer.resolve(infoUsers);
      }else{
        defer.reject("Something went wrong!");
      }
      return defer.promise;
    };

  }]);
