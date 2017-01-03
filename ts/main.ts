
///<reference path="../lib/phaser.d.ts"/>

class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'assets/textures/image1.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.8, 0.1);
    }

}

window.onload = () => {

    var game = new SimpleGame();

};

//class Greeter {
//    element: HTMLElement;
//    span: HTMLElement;
//    timerToken: number;

//    constructor(element: HTMLElement) {
//        this.element = element;
//        this.element.innerHTML += "The time is: ";
//        this.span = document.createElement('span');
//        this.element.appendChild(this.span);
//        this.span.innerText = new Date().toUTCString();
//    }

//    start() {
//        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
//    }

//    stop() {
//        clearTimeout(this.timerToken);
//    }

//}

//window.onload = () => {
//    var el = document.getElementById('mainDiv');
//    var greeter = new Greeter(el);
//    greeter.start();
//};