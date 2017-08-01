import { Component } from '@angular/core';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent {
    gridRows = [
        [{},{num: 2},{},{num: 4}],
        [{},{},{},{}],
        [{},{},{},{}],
        [{},{},{num: 3},{}]
    ];
};