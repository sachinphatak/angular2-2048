import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent {
    
    gridSize = [4, 4]
    grid = [
        [{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}],
        [{},{},{},{}]
    ]; 

    makeGrid (): any {
        var row: any;
        var grid: any;
        for (var i = 0; i < this.gridSize[1]; ++i) {
            row.push({});
        }
        for (var j = 0; j < this.gridSize[0]; ++j) {
            grid.push(row);
        }
        return grid;
    }

    tiles = [
        [, 2, ,4],
        [8, , , ],
        [ , , , 8],
        [, , , ]
    ];

    @HostListener('document:keydown', ['$event'])
    keypress (e: KeyboardEvent): void {
        if (e.key === 'ArrowRight') {
            this.moveRight();
        } else if (e.key === 'ArrowLeft') {
            this.moveLeft();
        }
    }

    moveRight(): void {
        for (var i = 0; i < this.gridSize[0]; ++i) {
            var numEmpty: number = 0;
            for (var j = this.gridSize[1]-1; j >= 0; --j) {
                if (!this.tiles[i][j]) {
                    ++numEmpty;
                } else {
                    if (j !== this.gridSize[1]) {
                        this.tiles[i].splice(j+1, numEmpty);
                        j += numEmpty;
                        while (numEmpty > 0) {
                            this.tiles[i].unshift(undefined);
                            --numEmpty;
                        }
                    }
                }
            }
        }       
    }

    moveLeft(): void {
        for (var i = 0; i < this.gridSize[0]; ++i) {
            var numEmpty: number = 0;
            for (var j = 0; j < this.gridSize[1]; ++j) {
                if (!this.tiles[i][j]) {
                    ++numEmpty;
                } else {
                    if (j !== 0) {
                        this.tiles[i].splice(j-numEmpty, numEmpty);
                        j -= numEmpty;
                        while (numEmpty > 0) {
                            this.tiles[i].splice(this.gridSize[1] - 1, undefined);
                            --numEmpty;
                        }
                    }
                }
            }
        }
    }

    // moveUp(): void {
    //     for (var j = 0; j < this.gridSize[1]; ++j) {
    //         var numEmpty: number = 0;
    //         for (var i = this.gridSize[0]-1; j >= 0; --j) {
    //             if (!this.tiles[i][j]) {
    //                 ++numEmpty;
    //             } else {
    //                 if (i !== this.gridSize[1]) {
    //                     this.tiles[i].splice(j, numEmpty);
    //                     j += numEmpty;
    //                     while (numEmpty > 0) {
    //                         this.tiles[i].unshift(undefined);
    //                         --numEmpty;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    // }
};