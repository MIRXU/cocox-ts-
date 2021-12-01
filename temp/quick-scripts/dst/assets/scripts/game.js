
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '454c4rEO/1ANLdWwTFo5sqq', 'game');
// scripts/game.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //引入星星预制体
        _this.starPrefab = null;
        //星星产生后消失时间的随机范围
        _this.maxStarDuration = 0;
        _this.minStarDuration = 0;
        //地面
        _this.ground = null;
        //玩家
        _this.player = null;
        _this.groundY = 0;
        //得分
        _this.scoreDisplay = null;
        // LIFE-CYCLE CALLBACKS:
        //初始化得分
        _this.score = 0;
        // 初始化计时器
        _this.timer = 0;
        _this.starDuration = 0;
        //得分音效
        _this.scoreAudio = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        //获取地面y轴
        this.groundY = this.ground.y + this.ground.height / 2;
        //生成星星
        this.spawnNewStar();
    };
    NewClass.prototype.spawnNewStar = function () {
        //内置方法生成星星
        var newStar = cc.instantiate(this.starPrefab);
        //将星星添加至场景
        this.node.addChild(newStar);
        //设置星星随机点
        newStar.setPosition(this.getNewStarPosition());
        newStar.getComponent('star').game = this; //星星脚本保存game 对象的引用
        //根据消失时间，重置计时器
        this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
        this.timer = 0;
    };
    NewClass.prototype.getNewStarPosition = function () {
        var randX = 0;
        //根据地面和主角跳跃高度，随机生成星星y坐标
        var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 50;
        // 根据屏幕宽度获取星星的x
        var maxX = this.node.width / 2;
        randX = (Math.random() - 0.5) * 2 * maxX;
        return cc.v2(randX, randY);
    };
    NewClass.prototype.gainScore = function () {
        this.score += 1;
        this.scoreDisplay.string = "Score:" + this.score;
        //播放得分音效
        cc.audioEngine.playEffect(this.scoreAudio, false);
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        if (this.timer > this.starDuration) {
            this.gameOver();
            return;
        }
        this.timer += dt;
    };
    NewClass.prototype.gameOver = function () {
        // 停止跳跃
        this.player.stopAllActions();
        //重新加载场景
        cc.director.loadScene('game');
    };
    __decorate([
        property(cc.Prefab)
    ], NewClass.prototype, "starPrefab", void 0);
    __decorate([
        property
    ], NewClass.prototype, "maxStarDuration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "minStarDuration", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "ground", void 0);
    __decorate([
        property(cc.Node)
    ], NewClass.prototype, "player", void 0);
    __decorate([
        property({ visible: false }),
        property
    ], NewClass.prototype, "groundY", void 0);
    __decorate([
        property(cc.Label)
    ], NewClass.prototype, "scoreDisplay", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "score", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "timer", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "starDuration", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "scoreAudio", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZjtRQURDLFFBQVEsQ0FBQyxFQUFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsQ0FBQztrREFDSjtJQUl0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDO2dEQUNNO0lBekNaLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0E2RjVCO0lBQUQsZUFBQztDQTdGRCxBQTZGQyxDQTdGcUMsRUFBRSxDQUFDLFNBQVMsR0E2RmpEO2tCQTdGb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld0NsYXNzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgLy/lvJXlhaXmmJ/mmJ/pooTliLbkvZNcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHN0YXJQcmVmYWI6Y2MuUHJlZmFiPW51bGw7XG5cbiAgICAvL+aYn+aYn+S6p+eUn+WQjua2iOWkseaXtumXtOeahOmaj+acuuiMg+WbtFxuICAgIEBwcm9wZXJ0eVxuICAgIG1heFN0YXJEdXJhdGlvbjpudW1iZXI9MDtcbiAgICBAcHJvcGVydHlcbiAgICBtaW5TdGFyRHVyYXRpb246bnVtYmVyPTA7XG5cbiAgICAvL+WcsOmdolxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGdyb3VuZDpjYy5Ob2RlPW51bGw7XG5cbiAgICAvL+eOqeWutlxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHBsYXllcjpjYy5Ob2RlPW51bGw7XG5cbiAgICBAcHJvcGVydHkoe3Zpc2libGU6ZmFsc2V9KVxuICAgIEBwcm9wZXJ0eVxuICAgIGdyb3VuZFk6bnVtYmVyPTA7XG5cbiAgICAvL+W+l+WIhlxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzY29yZURpc3BsYXk6Y2MuTGFiZWw9bnVsbDtcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICAvL+WIneWni+WMluW+l+WIhlxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgc2NvcmU6bnVtYmVyPTA7XG5cblxuICAgIC8vIOWIneWni+WMluiuoeaXtuWZqFxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgdGltZXI6bnVtYmVyPTA7XG4gICAgQHByb3BlcnR5KHt2aXNpYmxlOmZhbHNlfSlcbiAgICBzdGFyRHVyYXRpb246bnVtYmVyPTA7XG5cbiAgICAvL+W+l+WIhumfs+aViFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAgc2NvcmVBdWRpbzpjYy5BdWRpb0NsaXA9bnVsbDtcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICAvL+iOt+WPluWcsOmdonnovbRcbiAgICAgICAgdGhpcy5ncm91bmRZPXRoaXMuZ3JvdW5kLnkrdGhpcy5ncm91bmQuaGVpZ2h0LzI7XG4gICAgICAgIC8v55Sf5oiQ5pif5pifXG4gICAgICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XG4gICAgfVxuICAgIHNwYXduTmV3U3RhcigpOnZvaWR7XG4gICAgICAgIC8v5YaF572u5pa55rOV55Sf5oiQ5pif5pifXG4gICAgICAgIGNvbnN0IG5ld1N0YXI9Y2MuaW5zdGFudGlhdGUodGhpcy5zdGFyUHJlZmFiKTtcbiAgICAgICAgLy/lsIbmmJ/mmJ/mt7vliqDoh7PlnLrmma9cbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xuICAgICAgICAvL+iuvue9ruaYn+aYn+maj+acuueCuVxuICAgICAgICBuZXdTdGFyLnNldFBvc2l0aW9uKHRoaXMuZ2V0TmV3U3RhclBvc2l0aW9uKCkpO1xuICAgICAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnc3RhcicpLmdhbWU9dGhpczsvL+aYn+aYn+iEmuacrOS/neWtmGdhbWUg5a+56LGh55qE5byV55SoXG4gICAgICAgIC8v5qC55o2u5raI5aSx5pe26Ze077yM6YeN572u6K6h5pe25ZmoXG4gICAgICAgIHRoaXMuc3RhckR1cmF0aW9uPXRoaXMubWluU3RhckR1cmF0aW9uK01hdGgucmFuZG9tKCkqKHRoaXMubWF4U3RhckR1cmF0aW9uLXRoaXMubWluU3RhckR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy50aW1lcj0wO1xuICAgIH1cbiAgICBnZXROZXdTdGFyUG9zaXRpb24oKTpjYy5WZWMye1xuICAgICAgICBsZXQgcmFuZFg6bnVtYmVyPTA7XG4gICAgICAgIC8v5qC55o2u5Zyw6Z2i5ZKM5Li76KeS6Lez6LeD6auY5bqm77yM6ZqP5py655Sf5oiQ5pif5pifeeWdkOagh1xuICAgICAgICBjb25zdCByYW5kWT10aGlzLmdyb3VuZFkrTWF0aC5yYW5kb20oKSp0aGlzLnBsYXllci5nZXRDb21wb25lbnQoJ1BsYXllcicpLmp1bXBIZWlnaHQrNTA7XG4gICAgICAgIC8vIOagueaNruWxj+W5leWuveW6puiOt+WPluaYn+aYn+eahHhcbiAgICAgICAgY29uc3QgbWF4WD10aGlzLm5vZGUud2lkdGgvMjtcbiAgICAgICAgcmFuZFg9KE1hdGgucmFuZG9tKCktMC41KSoyKm1heFg7XG5cbiAgICAgICAgcmV0dXJuIGNjLnYyKHJhbmRYLHJhbmRZKTtcbiAgICB9XG4gICAgZ2FpblNjb3JlKCk6dm9pZHtcbiAgICAgICAgdGhpcy5zY29yZSs9MTtcbiAgICAgICAgdGhpcy5zY29yZURpc3BsYXkuc3RyaW5nPWBTY29yZToke3RoaXMuc2NvcmV9YDtcbiAgICAgICAgLy/mkq3mlL7lvpfliIbpn7PmlYhcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLnNjb3JlQXVkaW8sZmFsc2UpO1xuICAgIH1cbiAgICBzdGFydCAoKSB7XG5cbiAgICB9XG5cbiAgICB1cGRhdGUgKGR0KSB7XG4gICAgICAgIGlmKHRoaXMudGltZXI+dGhpcy5zdGFyRHVyYXRpb24pe1xuICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGltZXIrPWR0O1xuICAgIH1cbiAgICBnYW1lT3ZlcigpOnZvaWR7XG4gICAgICAgIC8vIOWBnOatoui3s+i3g1xuICAgICAgICB0aGlzLnBsYXllci5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAvL+mHjeaWsOWKoOi9veWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2dhbWUnKTtcbiAgICB9XG59XG4iXX0=