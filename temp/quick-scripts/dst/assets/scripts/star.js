
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