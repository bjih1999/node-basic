const { EventEmitter } = require('events');

const myEvent = new EventEmitter();

/**
 * addListener의 별명(?)이 on
 */
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});

myEvent.on('event2', () => {
    console.log('이벤트 2');
})

myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
})

/**
 * once : 한번만 실행됨
 * - 일회적인 이벤트 (Ex. 서버 인스턴스 초기화) 등에 사용할 수 있을 것 같다.
 */
myEvent.once('event3', () => {
    console.log('이벤트 3');
})

myEvent.emit('event1'); // 이벤트 1
myEvent.emit('event2'); // 이벤트 2
                        // 이벤트 2 추가

myEvent.emit('event3'); // 이벤트 3
myEvent.emit('event3'); // 실행 안됨

myEvent.on('event4', () => {
    console.log('이벤트 4');
})

/**
 * removeAllListener
 * - 해당 이벤트에 등록된 모든 listener(callback 함수)들이 삭제됨
 *
 * removeListener
 * - 해당 이벤트에 등록된 listener 중 하나만 삭제함함 */
myEvent.removeAllListeners('event4');
myEvent.emit('event4'); // 실행 안됨

const listener = () => {
    console.log('이벤트 5');
};

myEvent.on('event5', listener);
myEvent.removeListener('event5', listener);
myEvent.emit('event5'); // 실행 안됨

/**
 * listenerCount
 * - 해당 이벤트에 등록된 listener가 몇개인지 리턴
 */
console.log(myEvent.listenerCount('event2'));   // 2