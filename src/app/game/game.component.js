"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var GameComponent = (function () {
    function GameComponent() {
        this.tiles = [
            { row: 1, col: 2, num: 2 },
            { row: 1, col: 4, num: 4 },
            { row: 2, col: 1, num: 8 },
            { row: 3, col: 4, num: 8 }
        ];
        this.gridSize = [4, 4];
        this.grid = this.makeGrid();
    }
    GameComponent.prototype.makeGrid = function () {
        var row = [];
        var grid = [];
        for (var j = 0; j < this.gridSize[1]; ++j) {
            row.push({});
        }
        for (var i = 0; i < this.gridSize[0]; ++i) {
            grid.push(row);
        }
        return grid;
    };
    GameComponent.prototype.keypress = function (e) {
        if (e.key === 'ArrowRight') {
            this.moveRight();
        }
        else if (e.key === 'ArrowLeft') {
            this.moveLeft();
        }
        else if (e.key === 'ArrowUp') {
            this.moveUp();
        }
        else if (e.key === 'ArrowDown') {
            this.moveDown();
        }
    };
    GameComponent.prototype.sortOnCol = function (a, b) {
        if (a.col < b.col) {
            return -1;
        }
        else if (a.col > b.col) {
            return 1;
        }
        return 0;
    };
    ;
    GameComponent.prototype.sortOnRow = function (a, b) {
        if (a.row < b.row) {
            return -1;
        }
        else if (a.row > b.row) {
            return 1;
        }
        return 0;
    };
    ;
    GameComponent.prototype.moveRight = function () {
        var colMax = this.gridSize[1];
        var tiles = this.tiles;
        var sortOnCol = this.sortOnCol;
        var rowGroups = [];
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
                for (var i = rowGroup.length - 1; i >= 0; --i) {
                    tiles[rowGroup[i].index].col = colPushPosition;
                    --colPushPosition;
                }
            }
        });
    };
    GameComponent.prototype.moveLeft = function () {
        var tiles = this.tiles;
        var sortOnCol = this.sortOnCol;
        var rowGroups = [];
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
                var colPushPosition = 0;
                for (var i = 0; i < rowGroup.length; ++i) {
                    tiles[rowGroup[i].index].col = i + 1;
                }
            }
        });
    };
    GameComponent.prototype.moveUp = function () {
        var tiles = this.tiles;
        var sortOnRow = this.sortOnRow;
        var colGroups = [];
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
                var rowPushPosition = 0;
                for (var i = 0; i < colGroup.length; ++i) {
                    tiles[colGroup[i].index].row = i + 1;
                }
            }
        });
    };
    GameComponent.prototype.moveDown = function () {
        var rowMax = this.gridSize[0];
        var tiles = this.tiles;
        var sortOnRow = this.sortOnRow;
        var colGroups = [];
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
                for (var i = colGroup.length - 1; i >= 0; --i) {
                    tiles[colGroup[i].index].row = rowPushPosition;
                    --rowPushPosition;
                }
            }
        });
    };
    return GameComponent;
}());
__decorate([
    core_1.HostListener('document:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], GameComponent.prototype, "keypress", null);
GameComponent = __decorate([
    core_1.Component({
        selector: 'game',
        templateUrl: './game.component.html'
    }),
    __metadata("design:paramtypes", [])
], GameComponent);
exports.GameComponent = GameComponent;
;
//# sourceMappingURL=game.component.js.map