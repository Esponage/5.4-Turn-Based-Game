var models = require('models');
var views = require('views');

$(document).ready(function(){
  $('body').prepend(JST.application());

function Player(character){
  this.health = 100,
  this.name = character.name
}
Player.prototype.attack = function(attack){

}
Player.prototype.specialAttack = function(attack){
}

var scorpion = new Player({name: 'Scorpion'});
var subZero = new Player({name: 'SubZero'});
var raiden = new Player({name: 'Raiden'});
var jaxx = new Player({name: 'Jaxx'});

});
