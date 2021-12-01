
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL1BsYXllci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUVJLHNCQUFzQjtRQUN0QiwwQkFBMEI7UUFIOUIscUVBZ0dDO1FBM0ZHLFlBQVk7UUFDWiwwQkFBMEI7UUFHMUIsZ0JBQVUsR0FBUSxDQUFDLENBQUMsQ0FBQSxRQUFRO1FBRzVCLGtCQUFZLEdBQVEsQ0FBQyxDQUFDLENBQUEsVUFBVTtRQUdoQyxrQkFBWSxHQUFRLENBQUMsQ0FBQyxDQUFBLFFBQVE7UUFHOUIsV0FBSyxHQUFRLENBQUMsQ0FBQyxDQUFBLEtBQUs7UUFDcEIsd0JBQXdCO1FBRXhCLFNBQVM7UUFFVCxhQUFPLEdBQVMsS0FBSyxDQUFDO1FBRXRCLGNBQVEsR0FBUyxLQUFLLENBQUM7UUFHdkIsWUFBTSxHQUFRLENBQUMsQ0FBQyxDQUFBLFVBQVU7UUFFMUIsTUFBTTtRQUVOLGVBQVMsR0FBYyxJQUFJLENBQUM7O0lBZ0VoQyxDQUFDO0lBL0RHLHlCQUFNLEdBQU47UUFDSSxJQUFNLFVBQVUsR0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDdEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdDLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pFLEVBQUUsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxDQUFDO0lBRXpFLENBQUM7SUFDRCxnQ0FBYSxHQUFiO1FBRUksTUFBTTtRQUNOLElBQU0sTUFBTSxHQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLEVBQUMsRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLENBQUMsQ0FBQztRQUNyRixLQUFLO1FBQ0wsSUFBTSxRQUFRLEdBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7UUFFdkYsT0FBTztRQUNQLElBQU0sTUFBTSxHQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBRWhGLFFBQVE7UUFDUixJQUFPLFVBQVUsR0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2xELE9BQU8sVUFBVSxDQUFDO0lBQ3RCLENBQUM7SUFDRCxnQ0FBYSxHQUFiO1FBQ0ksRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBQ0QsNEJBQVMsR0FBVCxVQUFVLEtBQW1CO1FBQ3pCLFFBQU8sS0FBSyxDQUFDLE9BQU8sRUFBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUM7Z0JBQ2xCLE1BQU07WUFDVixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUM7Z0JBQ25CLE1BQU07U0FDYjtJQUNMLENBQUM7SUFDRCwwQkFBTyxHQUFQLFVBQVEsS0FBbUI7UUFDdkIsUUFBTyxLQUFLLENBQUMsT0FBTyxFQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsT0FBTyxHQUFDLEtBQUssQ0FBQztnQkFDbkIsTUFBTTtZQUNWLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsUUFBUSxHQUFDLEtBQUssQ0FBQztnQkFDcEIsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQUNELHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixlQUFlO1FBQ2YsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO1lBQ1osSUFBSSxDQUFDLE1BQU0sSUFBRSxJQUFJLENBQUMsS0FBSyxHQUFDLEVBQUUsQ0FBQztTQUM5QjthQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsRUFBQztZQUNsQixJQUFJLENBQUMsTUFBTSxJQUFFLElBQUksQ0FBQyxLQUFLLEdBQUMsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsU0FBUztRQUNULElBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUMsSUFBSSxDQUFDLFlBQVksRUFBQztZQUN2QyxJQUFJLENBQUMsTUFBTSxHQUFDLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDLE1BQU0sR0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNuRTtRQUNELFlBQVk7UUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUMsTUFBTSxHQUFDLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBdEZEO1FBREMsUUFBUTtnREFDVztJQUdwQjtRQURDLFFBQVE7a0RBQ2E7SUFHdEI7UUFEQyxRQUFRO2tEQUNhO0lBR3RCO1FBREMsUUFBUTsyQ0FDTTtJQUtmO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDOzZDQUNKO0lBRXRCO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDOzhDQUNIO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUMsT0FBTyxFQUFDLEtBQUssRUFBQyxDQUFDOzRDQUNWO0lBSWhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7K0NBQ0s7SUFoQ1gsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWdHNUI7SUFBRCxlQUFDO0NBaEdELEFBZ0dDLENBaEdxQyxFQUFFLENBQUMsU0FBUyxHQWdHakQ7a0JBaEdvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgLy8gQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIC8vIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICAvLyBAcHJvcGVydHlcbiAgICAvLyB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xuXG4gICAgQHByb3BlcnR5XG4gICAganVtcEhlaWdodDpudW1iZXI9MDsvL+S4u+inkui3s+i3g+mrmOW6plxuXG4gICAgQHByb3BlcnR5XG4gICAganVtcER1cmF0aW9uOm51bWJlcj0wOy8v5Li76KeS6Lez6LeD5oyB57ut5pe25bi4XG5cbiAgICBAcHJvcGVydHlcbiAgICBtYXhNb3ZlU3BlZWQ6bnVtYmVyPTA7Ly/mnIDlpKfnp7vliqjpgJ/luqZcblxuICAgIEBwcm9wZXJ0eVxuICAgIGFjY2VsOm51bWJlcj0wOy8v5Yqg6YCf5bqmXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvL+WKoOmAn+W6puW8gOWFs+aWueWQkVxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgYWNjTGVmdDpib29sZWFuPWZhbHNlO1xuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgYWNjUmlnaHQ6Ym9vbGVhbj1mYWxzZTtcblxuICAgIEBwcm9wZXJ0eSh7dmlzaWJsZTpmYWxzZX0pXG4gICAgeFNwZWVkOm51bWJlcj0wOy8v5Li76KeS5rC05bmz5pa55ZCR6YCf5bqmXG5cbiAgICAvL+i3s+i3g+mfs+aViFxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApXG4gICAganVtcEF1ZGlvOmNjLkF1ZGlvQ2xpcD1udWxsO1xuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNvbnN0IGp1bXBBY3Rpb249dGhpcy5ydW5KdW1wQWN0aW9uKCk7XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpO1xuICAgICAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX0RPV04sdGhpcy5vbktleUR3b24sdGhpcyk7XG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsdGhpcy5vbktleVVwLHRoaXMpO1xuICAgICAgICBcbiAgICB9XG4gICAgcnVuSnVtcEFjdGlvbigpOmNjLlR3ZWVue1xuICAgICAgICBcbiAgICAgICAgLy/lkJHkuIrot7Pot4NcbiAgICAgICAgY29uc3QganVtcFVwPWNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24se3k6dGhpcy5qdW1wSGVpZ2h0fSx7ZWFzaW5nOidzaW5lT3V0J30pO1xuICAgICAgICAvLyDkuIvokL1cbiAgICAgICAgY29uc3QganVtcER3b249Y2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbix7eTotdGhpcy5qdW1wSGVpZ2h0fSx7ZWFzaW5nOidzaW5lSW4nfSk7XG4gICAgICAgIFxuICAgICAgICAvLyDnvJPliqjliqjnlLtcbiAgICAgICAgY29uc3QgdHdlZW4xPWNjLnR3ZWVuKCkuc2VxdWVuY2UoanVtcFVwLGp1bXBEd29uKS5jYWxsKHRoaXMucGxheUp1bXBTb3VuZCx0aGlzKTtcbiAgICAgICAgXG4gICAgICAgIC8vIOOAgOmHjeWkjeaJp+ihjFxuICAgICAgICBjb25zdCAganVtcEFjdGlvbj1jYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4xKVxuICAgICAgICByZXR1cm4ganVtcEFjdGlvbjtcbiAgICB9XG4gICAgcGxheUp1bXBTb3VuZCgpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLGZhbHNlKTtcbiAgICB9XG4gICAgb25LZXlEd29uKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWR7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0PXRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQ9dHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbktleVVwKGV2ZW50OktleWJvYXJkRXZlbnQpOnZvaWR7XG4gICAgICAgIHN3aXRjaChldmVudC5rZXlDb2RlKXtcbiAgICAgICAgICAgIGNhc2UgY2MubWFjcm8uS0VZLmE6XG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0PWZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcbiAgICAgICAgICAgICAgICB0aGlzLmFjY1JpZ2h0PWZhbHNlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgLy/moLnmja7liqDpgJ/luqbmlrnlkJHmm7TmlrDmr4/luKfmlrnlkJFcbiAgICAgICAgaWYodGhpcy5hY2NMZWZ0KXtcbiAgICAgICAgICAgIHRoaXMueFNwZWVkLT10aGlzLmFjY2VsKmR0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5hY2NSaWdodCl7XG4gICAgICAgICAgICB0aGlzLnhTcGVlZCs9dGhpcy5hY2NlbCpkdDtcbiAgICAgICAgfVxuICAgICAgICAvL+mZkOWItuS4u+inkueahOmAn+W6plxuICAgICAgICBpZihNYXRoLmFicyh0aGlzLnhTcGVlZCk+dGhpcy5tYXhNb3ZlU3BlZWQpe1xuICAgICAgICAgICAgdGhpcy54U3BlZWQ9dGhpcy5tYXhNb3ZlU3BlZWQqdGhpcy54U3BlZWQvTWF0aC5hYnModGhpcy54U3BlZWQpO1xuICAgICAgICB9XG4gICAgICAgIC8v5qC55o2u6YCf5bqm5pu05paw5Li76KeS5L2N572uXG4gICAgICAgIHRoaXMubm9kZS54Kz10aGlzLnhTcGVlZCpkdDtcbiAgICB9XG59XG4iXX0=