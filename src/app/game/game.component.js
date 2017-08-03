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
        this.gridSize = [4, 4];
        this.grid = [
            [{}, {}, {}, {}],
            [{}, {}, {}, {}],
            [{}, {}, {}, {}],
            [{}, {}, {}, {}]
        ];
        this.tiles = [
            [, 2, , 4],
            [8, , ,],
            [, , , 8],
            [, , ,]
        ];
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
    }
    GameComponent.prototype.makeGrid = function () {
        var row;
        var grid;
        for (var i = 0; i < this.gridSize[1]; ++i) {
            row.push({});
        }
        for (var j = 0; j < this.gridSize[0]; ++j) {
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
    };
    GameComponent.prototype.moveRight = function () {
        for (var i = 0; i < this.gridSize[0]; ++i) {
            var numEmpty = 0;
            for (var j = this.gridSize[1] - 1; j >= 0; --j) {
                if (!this.tiles[i][j]) {
                    ++numEmpty;
                }
                else {
                    if (j !== this.gridSize[1]) {
                        this.tiles[i].splice(j + 1, numEmpty);
                        j += numEmpty;
                        while (numEmpty > 0) {
                            this.tiles[i].unshift(undefined);
                            --numEmpty;
                        }
                    }
                }
            }
        }
    };
    GameComponent.prototype.moveLeft = function () {
        for (var i = 0; i < this.gridSize[0]; ++i) {
            var numEmpty = 0;
            for (var j = 0; j < this.gridSize[1]; ++j) {
                if (!this.tiles[i][j]) {
                    ++numEmpty;
                }
                else {
                    if (j !== 0) {
                        this.tiles[i].splice(j - numEmpty, numEmpty);
                        j -= numEmpty;
                        while (numEmpty > 0) {
                            this.tiles[i].splice(this.gridSize[1] - 1, undefined);
                            --numEmpty;
                        }
                    }
                }
            }
        }
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
    })
], GameComponent);
exports.GameComponent = GameComponent;
;
//# sourceMappingURL=game.component.js.map