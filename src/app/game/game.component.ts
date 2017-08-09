import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'game',
    templateUrl: './game.component.html'
})
export class GameComponent {
    
    constructor () {
        this.gridSize = [4, 4];
        this.grid = this.makeGrid();
    }
    
    gridSize: Array<number>;

    makeGrid (): any {
        var row = [];
        var grid = [];
        for (var j = 0; j < this.gridSize[1]; ++j) {
            row.push({});
        }
        for (var i = 0; i < this.gridSize[0]; ++i) {
            grid.push(row);
        }
        return grid;
    }

    grid: Array<Array<any>>;

    tiles = [
        {row: 1, col: 2, num: 2},
        {row: 1, col: 4, num: 4},
        {row: 2, col: 1, num: 8},
        {row: 3, col: 4, num: 8}
    ];

    @HostListener('document:keydown', ['$event'])
    keypress (e: KeyboardEvent): void {
        if (e.key === 'ArrowRight') {
            this.moveRight();
        } else if (e.key === 'ArrowLeft') {
            this.moveLeft();
        } else if (e.key === 'ArrowUp') {
            this.moveUp();
        } else if (e.key === 'ArrowDown') {
            this.moveDown();
        }
    }

    sortOnCol (a: any, b: any): number {
        if (a.col < b.col) {
            return -1;
        } else if (a.col > b.col) {
            return 1;
        }
        return 0;
    };

    sortOnRow (a: any, b: any): number {
        if (a.row < b.row) {
            return -1;
        } else if (a.row > b.row) {
            return 1;
        }
        return 0;
    };

    moveRight(): void {
        var colMax = this.gridSize[1];
        var tiles = this.tiles;
        var sortOnCol = this.sortOnCol;

        var rowGroups: Array<any> = [];
        this.tiles.forEach(function (tile, index) {
            if (!rowGroups[tile.row]) {
                rowGroups[tile.row] = [];
            }
            rowGroups[tile.row].push({
                col: tile.col,
                index: index
            });
        });
        rowGroups.forEach(function (rowGroup) {
            if (rowGroup) {
                rowGroup.sort(sortOnCol);
                var colPushPosition = colMax;
                for (var i = rowGroup.length-1; i >= 0; --i) {
                    tiles[rowGroup[i].index].col = colPushPosition;
                    --colPushPosition;
                }
            }
        });
    }

    moveLeft(): void {
        var tiles = this.tiles;
        var sortOnCol = this.sortOnCol;

        var rowGroups: Array<any> = [];
        this.tiles.forEach(function (tile, index) {
            if (!rowGroups[tile.row]) {
                rowGroups[tile.row] = [];
            }
            rowGroups[tile.row].push({
                col: tile.col,
                row: tile.row,
                index: index
            });
        });
        rowGroups.forEach(function (rowGroup) {
            if (rowGroup ) {
                rowGroup.sort(sortOnCol);
                var colPushPosition = 0;
                for (var i = 0; i < rowGroup.length; ++i) {
                    tiles[rowGroup[i].index].col = i+1;
                }
            }
        });
    }

    moveUp (): void {
        var tiles = this.tiles;
        var sortOnRow = this.sortOnRow;

        var colGroups: Array<any> = [];
        this.tiles.forEach(function (tile, index) {
            if (!colGroups[tile.col]) {
                colGroups[tile.col] = [];
            }
            colGroups[tile.col].push({
                col: tile.col,
                row: tile.row,
                index: index
            });
        });
        colGroups.forEach(function (colGroup) {
            if (colGroup ) {
                colGroup.sort(sortOnRow);
                var rowPushPosition = 0;
                for (var i = 0; i < colGroup.length; ++i) {
                    tiles[colGroup[i].index].row = i+1;
                }
            }
        });
    }

    moveDown (): void {
        var rowMax = this.gridSize[0];
        var tiles = this.tiles;
        var sortOnRow = this.sortOnRow;

        var colGroups: Array<any> = [];
        this.tiles.forEach(function (tile, index) {
            if (!colGroups[tile.col]) {
                colGroups[tile.col] = [];
            }
            colGroups[tile.col].push({
                row: tile.row,
                index: index
            });
        });
        colGroups.forEach(function (colGroup) {
            if (colGroup) {
                colGroup.sort(sortOnRow);
                var rowPushPosition = rowMax;
                for (var i = colGroup.length-1; i >= 0; --i) {
                    tiles[colGroup[i].index].row = rowPushPosition;
                    --rowPushPosition;
                }
            }
        });
    }
};