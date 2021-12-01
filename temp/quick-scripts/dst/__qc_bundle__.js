
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Player');
require('./assets/scripts/game');
require('./assets/scripts/star');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3a55acCGGVG0JIHtU/1MDIg', 'Player');
// scripts/Player.ts

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
        // @property(cc.Label)
        // label: cc.Label = null;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property
        // text: string = 'hello';
        _this.jumpHeight = 0; //主角跳跃高度
        _this.jumpDuration = 0; //主角跳跃持续时常
        _this.maxMoveSpeed = 0; //最大移动速度
        _this.accel = 0; //加速度
        // LIFE-CYCLE CALLBACKS:
        //加速度开关方向
        _this.accLeft = false;
        _this.accRight = false;
        _this.xSpeed = 0; //主角水平方向速度
        //跳跃音效
        _this.jumpAudio = null;
        return _this;
    }
    NewClass.prototype.onLoad = function () {
        var jumpAction = this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDwon, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    };
    NewClass.prototype.runJumpAction = function () {
        //向上跳跃
        var jumpUp = cc.tween().by(this.jumpDuration, { y: this.jumpHeight }, { easing: 'sineOut' });
        // 下落
        var jumpDwon = cc.tween().by(this.jumpDuration, { y: -this.jumpHeight }, { easing: 'sineIn' });
        // 缓动动画
        var tween1 = cc.tween().sequence(jumpUp, jumpDwon).call(this.playJumpSound, this);
        // 　重复执行
        var jumpAction = cc.tween().repeatForever(tween1);
        return jumpAction;
    };
    NewClass.prototype.playJumpSound = function () {
        cc.audioEngine.playEffect(this.jumpAudio, false);
    };
    NewClass.prototype.onKeyDwon = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = true;
                break;
            case cc.macro.KEY.d:
                this.accRight = true;
                break;
        }
    };
    NewClass.prototype.onKeyUp = function (event) {
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.accLeft = false;
                break;
            case cc.macro.KEY.d:
                this.accRight = false;
                break;
        }
    };
    NewClass.prototype.start = function () {
    };
    NewClass.prototype.update = function (dt) {
        //根据加速度方向更新每帧方向
        if (this.accLeft) {
            this.xSpeed -= this.accel * dt;
        }
        else if (this.accRight) {
            this.xSpeed += this.accel * dt;
        }
        //限制主角的速度
        if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
            this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
        }
        //根据速度更新主角位置
        this.node.x += this.xSpeed * dt;
    };
    __decorate([
        property
    ], NewClass.prototype, "jumpHeight", void 0);
    __decorate([
        property
    ], NewClass.prototype, "jumpDuration", void 0);
    __decorate([
        property
    ], NewClass.prototype, "maxMoveSpeed", void 0);
    __decorate([
        property
    ], NewClass.prototype, "accel", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "accLeft", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "accRight", void 0);
    __decorate([
        property({ visible: false })
    ], NewClass.prototype, "xSpeed", void 0);
    __decorate([
        property(cc.AudioClip)
    ], NewClass.prototype, "jumpAudio", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUVJLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFIOUIscUVBZ0dDO1FBM0ZHLFlBQVk7UUFDWiwwQkFBMEI7UUFHMUIsZ0JBQVUsR0FBUSxDQUFDLENBQUMsQ0FBQSxRQUFRO1FBRzVCLGtCQUFZLEdBQVEsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUdoQyxrQkFBWSxHQUFRLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFHOUIsV0FBSyxHQUFRLENBQUMsQ0FBQyxDQUFBLEtBQUs7UUFDcEIsd0JBQXdCO1FBRXhCLFNBQVM7UUFFVCxhQUFPLEdBQVMsS0FBSyxDQUFDO1FBRXRCLGNBQVEsR0FBUyxLQUFLLENBQUM7UUFHdkIsWUFBTSxHQUFRLENBQUMsQ0FBQyxDQUFBLFVBQVU7UUFFMUIsTUFBTTtRQUVOLGVBQVMsR0FBYyxJQUFJLENBQUM7O0lBZ0VoQyxDQUFDO0lBL0RHLHlCQUFNLEdBQU47UUFDSSxJQUFNLFVBQVUsR0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElB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UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBdEZEO1FBREMsUUFBUTtnREFDVztJQUdwQjtRQURDLFFBQVE7a0RBQ2E7SUFHdEI7UUFEQyxRQUFRO2tEQUNhO0lBR3RCO1FBREMsUUFBUTsyQ0FDTTtJQUtmO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDOzZDQUNKO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDOzhDQUNIO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDOzRDQUNWO0lBSWhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ0s7SUFoQ1gsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdHNUI7SUFBRCxlQUFDO0NBaEdELEFBZ0dDLENBaEdxQyxFQUFFLENBQUMsU0FBUyxHQWdHakQ7a0JBaEdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIC8vIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgQHByb3BlcnR5XG4gICAganVtcEhlaWdodDpudW1iZXI9MDsvL+S4u+inkui3s+i3g+mrmOW6plxuXG4gICAgQHByb3BlcnR5XG4gICAganVtcER1cmF0aW9uOm51bWJlcj0wOy8v5Li76KeS6Lez6LeD5oyB57ut5pe25bi4XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhNb3ZlU3BlZWQ6bnVtYmVyPTA7Ly/mnIDlpKfnp7vliqjpgJ/luqZcblxuICAgIEBwcm9wZXJ0eVxuICAgIGFjY2VsOm51bWJlcj0wOy8v5Yqg6YCf5bqmXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvL+WKoOmAn+W6puW8gOWFs+aWueWQkVxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgYWNjTGVmdDpib29sZWFuPWZhbHNlO1xuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgYWNjUmlnaHQ6Ym9vbGVhbj1mYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgeFNwZWVkOm51bWJlcj0wOy8v5Li76KeS5rC05bmz5pa55ZCR6YCf5bqmXG5cbiAgICAvL+i3s+i3g+mfs+aViFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAganVtcEF1ZGlvOmNjLkF1ZGlvQ2xpcD1udWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNvbnN0IGp1bXBBY3Rpb249dGhpcy5ydW5KdW1wQWN0aW9uKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbktleUR3b24sdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbktleVVwLHRoaXMpO1xuICAgICAgICBcbiAgICB9XG4gICAgcnVuSnVtcEFjdGlvbigpOmNjLlR3ZWVue1xuICAgICAgICBcbiAgICAgICAgLy/lkJHkuIrot7Pot4NcbiAgICAgICAgY29uc3QganVtcFVwPWNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24se3k6dGhpcy5qdW1wSGVpZ2h0fSx7ZWFzaW5nOidzaW5lT3V0J30pO1xuICAgICAgICAvLyDkuIvokL1cbiAgICAgICAgY29uc3QganVtcER3b249Y2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbix7eTotdGhpcy5qdW1wSGVpZ2h0fSx7ZWFzaW5nOidzaW5lSW4nfSk7XG4gICAgICAgIFxuICAgICAgICAvLyDnvJPliqjliqjnlLtcbiAgICAgICAgY29uc3QgdHdlZW4xPWNjLnR3ZWVuKCkuc2VxdWVuY2UoanVtcFVwLGp1bXBEd29uKS5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCx0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOOAgOmHjeWkjeaJp+ihjFxuICAgICAgICBjb25zdCAganVtcEFjdGlvbj1jYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4xKVxuICAgICAgICByZXR1cm4ganVtcEFjdGlvbjtcbiAgICB9XG4gICAgcGxheUp1bXBTb3VuZCgpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLGZhbHNlKTtcbiAgICB9XG4gICAgb25LZXlEd29uKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWR7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0PXRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQ9dHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbktleVVwKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWR7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0PWZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0PWZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy/moLnmja7liqDpgJ/luqbmlrnlkJHmm7TmlrDmr4/luKfmlrnlkJFcbiAgICAgICAgaWYodGhpcy5hY2NMZWZ0KXtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkLT10aGlzLmFjY2VsKmR0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5hY2NSaWdodCl7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCs9dGhpcy5hY2NlbCpkdDtcbiAgICAgICAgfVxuICAgICAgICAvL+mZkOWItuS4u+inkueahOmAn+W6plxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLnhTcGVlZCk+dGhpcy5tYXhNb3ZlU3BlZWQpe1xuICAgICAgICAgICAgdGhpcy54U3BlZWQ9dGhpcy5tYXhNb3ZlU3BlZWQqdGhpcy54U3BlZWQvTWF0aC5hYnModGhpcy54U3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8v5qC55o2u6YCf5bqm5pu05paw5Li76KeS5L2N572uXG4gICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnhTcGVlZCpkdDtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '065432Pnk9PfqwRTdfOnHFs', 'star');
// scripts/star.ts

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
        _this.pickRadius = 0; //星星和主角距离小于当前值就收集星星
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    NewClass.prototype.onLoad = function () {
    };
    NewClass.prototype.start = function () {
    };
    //计算星星和玩家的距离
    NewClass.prototype.getPlayDistance = function () {
        //没有按照官网给的例子写，不知道什么原因，已经拿不到了
        var playPos = this.node.getParent().getComponent('game').player.getPosition();
        // 计算距离
        var dis = this.node.position.sub(playPos).mag();
        return dis;
    };
    NewClass.prototype.onPicked = function () {
        //星星被摘取，生成新的星星
        this.node.getParent().getComponent('game').spawnNewStar();
        //调用得分
        this.node.getParent().getComponent('game').gainScore();
        //销毁当前星星
        this.node.destroy();
    };
    NewClass.prototype.update = function (dt) {
        //如果当前距离小于收集距离，就收取
        if (this.getPlayDistance() < this.pickRadius) {
            //  收取星星
            this.onPicked();
            return;
        }
        //根据game脚本计时器更新星星透明度
        var opacityRatio = 1 - this.node.getParent().getComponent('game').timer / this.node.getParent().getComponent('game').starDuration;
        var minOpacity = 50;
        this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    };
    __decorate([
        property
    ], NewClass.prototype, "pickRadius", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3N0YXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUEyQ0M7UUF4Q0csZ0JBQVUsR0FBUSxDQUFDLENBQUMsQ0FBQSxtQkFBbUI7O0lBd0MzQyxDQUFDO0lBdENHLHdCQUF3QjtJQUV4Qix5QkFBTSxHQUFOO0lBRUEsQ0FBQztJQUVELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBQ0QsWUFBWTtJQUNaLGtDQUFlLEdBQWY7UUFDSSw0QkFBNEI7UUFDNUIsSUFBTSxPQUFPLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3RGLE9BQU87UUFDUCxJQUFNLEdBQUcsR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDaEQsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0QsMkJBQVEsR0FBUjtRQUNJLGNBQWM7UUFDZCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUMxRCxNQUFNO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDdkQsUUFBUTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBUSxFQUFFO1FBQ04sa0JBQWtCO1FBQ2xCLElBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxHQUFDLElBQUksQ0FBQyxVQUFVLEVBQUM7WUFDdEMsUUFBUTtZQUNSLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNoQixPQUFPO1NBQ1Y7UUFDRCxvQkFBb0I7UUFDcEIsSUFBTSxZQUFZLEdBQUMsQ0FBQyxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssR0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUM7UUFDOUgsSUFBTSxVQUFVLEdBQUMsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFDLFVBQVUsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBQyxDQUFDLEdBQUcsR0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUF2Q0Q7UUFEQyxRQUFRO2dEQUNXO0lBSEgsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTJDNUI7SUFBRCxlQUFDO0NBM0NELEFBMkNDLENBM0NxQyxFQUFFLENBQUMsU0FBUyxHQTJDakQ7a0JBM0NvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5XG4gICAgcGlja1JhZGl1czpudW1iZXI9MDsvL+aYn+aYn+WSjOS4u+inkui3neemu+Wwj+S6juW9k+WJjeWAvOWwseaUtumbhuaYn+aYn1xuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQgKCkge1xuXG4gICAgfVxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgXG4gICAgfVxuICAgIC8v6K6h566X5pif5pif5ZKM546p5a6255qE6Led56a7XG4gICAgZ2V0UGxheURpc3RhbmNlKCk6bnVtYmVye1xuICAgICAgICAvL+ayoeacieaMieeFp+WumOe9kee7meeahOS+i+WtkOWGme+8jOS4jeefpemBk+S7gOS5iOWOn+WboO+8jOW3sue7j+aLv+S4jeWIsOS6hlxuICAgICAgICBjb25zdCBwbGF5UG9zOmNjLlZlYzM9dGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZ2FtZScpLnBsYXllci5nZXRQb3NpdGlvbigpO1xuICAgICAgICAvLyDorqHnrpfot53nprtcbiAgICAgICAgY29uc3QgZGlzPXRoaXMubm9kZS5wb3NpdGlvbi5zdWIocGxheVBvcykubWFnKCk7XG4gICAgICAgIHJldHVybiBkaXM7XG4gICAgfVxuICAgIG9uUGlja2VkKCl7XG4gICAgICAgIC8v5pif5pif6KKr5pGY5Y+W77yM55Sf5oiQ5paw55qE5pif5pifXG4gICAgICAgIHRoaXMubm9kZS5nZXRQYXJlbnQoKS5nZXRDb21wb25lbnQoJ2dhbWUnKS5zcGF3bk5ld1N0YXIoKTtcbiAgICAgICAgLy/osIPnlKjlvpfliIZcbiAgICAgICAgdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZ2FtZScpLmdhaW5TY29yZSgpO1xuICAgICAgICAvL+mUgOavgeW9k+WJjeaYn+aYn1xuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy/lpoLmnpzlvZPliY3ot53nprvlsI/kuo7mlLbpm4bot53nprvvvIzlsLHmlLblj5ZcbiAgICAgICAgaWYodGhpcy5nZXRQbGF5RGlzdGFuY2UoKTx0aGlzLnBpY2tSYWRpdXMpe1xuICAgICAgICAgICAgLy8gIOaUtuWPluaYn+aYn1xuICAgICAgICAgICAgdGhpcy5vblBpY2tlZCgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5qC55o2uZ2FtZeiEmuacrOiuoeaXtuWZqOabtOaWsOaYn+aYn+mAj+aYjuW6plxuICAgICAgICBjb25zdCBvcGFjaXR5UmF0aW89MS10aGlzLm5vZGUuZ2V0UGFyZW50KCkuZ2V0Q29tcG9uZW50KCdnYW1lJykudGltZXIvdGhpcy5ub2RlLmdldFBhcmVudCgpLmdldENvbXBvbmVudCgnZ2FtZScpLnN0YXJEdXJhdGlvbjtcbiAgICAgICAgY29uc3QgbWluT3BhY2l0eT01MDtcbiAgICAgICAgdGhpcy5ub2RlLm9wYWNpdHk9bWluT3BhY2l0eStNYXRoLmZsb29yKG9wYWNpdHlSYXRpbyooMjU1LW1pbk9wYWNpdHkpKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------
