//兼容代码封装
		var EventUtil = {
			//检测绑定事件
			addHanlder:function(element,type,handler){
				if(element.addEventListener){
					element.addEventListener(type,handler,false);
				}else if(element.attachEvent){
					element.attachEvent('on'+type,handler);
				}else{
					element['on'+type] = handler;
				}
			},
			//移除绑定事件
			removeHanler:function(element,type,handler){
				if(element.removeEventListener){
					element.removeEventListener(type,handler,false);
				}else if(element.datachEvent){
					element.datachEvent('on'+type,handler);
				}else{
					element['on'+type] = null;
				}
			},
			//获得事件
			getEvent:function(event){
				return event?event:window.event;
			},
			//捕获目标
			getTarget:function(event){
				return event.target||event.srcElement;
			},
			//阻止默认事件
			preventDefault:function(event){
				if(event.preventDefault){
					event.preventDefault();
				}else{
					event.returnValue = false;
				}
			},
			//阻止冒泡事件
			stopPropagation:function(event){
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					event.cancelBubble = true;
				}
			},
		}