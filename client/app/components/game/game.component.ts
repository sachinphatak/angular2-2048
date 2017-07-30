import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'game',
    templateUrl: 'game.component.html'
})
export class GameComponent {
    gridRows = [
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4],
        [1,2,3,4]
    ];
};