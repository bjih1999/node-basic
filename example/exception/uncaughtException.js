/**
 * Spring의 GlobalException 핸들러 처럼 최후의 예외 방어선을 만드는 법
 * - process에 uncaughtException 이벤트를 등록하면 처리되지 않은 모든 error를 받아서
 *   처리함
 *
 * 주의할 점)
 * 에러 기록 용으로만 사용할 것!
 * why? node 공식 문서에 콜백 함수의 동작을 보장하지 않는다고 되어 있음
 *  => 따라서, 에러를 처리하는 코드를 등록했어도 정상 작동하지 않을 가능성이 있음
 *  => 기록용으로 사용하고 에러 처리는 해당 로직에서 처리하는 것이 안전하고 SRP에도 위배되지 않음
 */
process.on('uncaughtException', (err) => {
    console.log(err, '예기치 못한 에러', err);
})

setInterval(() => {
    throw new Error('서버를 고장내주마!');
}, 1000);

setTimeout(() => {
    console.log('실행됩니다.');
}, 2000);