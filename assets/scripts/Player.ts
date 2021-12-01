// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    @property
    jumpHeight:number=0;//主角跳跃高度

    @property
    jumpDuration:number=0;//主角跳跃持续时常

    @property
    maxMoveSpeed:number=0;//最大移动速度

    @property
    accel:number=0;//加速度
    // LIFE-CYCLE CALLBACKS:

    //加速度开关方向
    @property({visible:false})
    accLeft:boolean=false;
    @property({visible:false})
    accRight:boolean=false;

    @property({visible:false})
    xSpeed:number=0;//主角水平方向速度

    //跳跃音效
    @property(cc.AudioClip)
    jumpAudio:cc.AudioClip=null;
    onLoad () {
        const jumpAction=this.runJumpAction();
        cc.tween(this.node).then(jumpAction).start();
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDwon,this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this);
        
    }
    runJumpAction():cc.Tween{
        
        //向上跳跃
        const jumpUp=cc.tween().by(this.jumpDuration,{y:this.jumpHeight},{easing:'sineOut'});
        // 下落
        const jumpDwon=cc.tween().by(this.jumpDuration,{y:-this.jumpHeight},{easing:'sineIn'});
        
        // 缓动动画
        const tween1=cc.tween().sequence(jumpUp,jumpDwon).call(this.playJumpSound,this);
        
        // 　重复执行
        const  jumpAction=cc.tween().repeatForever(tween1)
        return jumpAction;
    }
    playJumpSound(){
        cc.audioEngine.playEffect(this.jumpAudio,false);
    }
    onKeyDwon(event:KeyboardEvent):void{
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft=true;
                break;
            case cc.macro.KEY.d:
                this.accRight=true;
                break;
        }
    }
    onKeyUp(event:KeyboardEvent):void{
        switch(event.keyCode){
            case cc.macro.KEY.a:
                this.accLeft=false;
                break;
            case cc.macro.KEY.d:
                this.accRight=false;
                break;
        }
    }
    start () {

    }

    update (dt) {
        //根据加速度方向更新每帧方向
        if(this.accLeft){
            this.xSpeed-=this.accel*dt;
        }
        else if(this.accRight){
            this.xSpeed+=this.accel*dt;
        }
        //限制主角的速度
        if(Math.abs(this.xSpeed)>this.maxMoveSpeed){
            this.xSpeed=this.maxMoveSpeed*this.xSpeed/Math.abs(this.xSpeed);
        }
        //根据速度更新主角位置
        this.node.x+=this.xSpeed*dt;
    }
}
