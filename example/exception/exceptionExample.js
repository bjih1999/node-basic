const fs = require('fs').promises;

/**
 * 콜백 함수에서 제공하는 에러객체를 사용할 경우 따로 catch를 할 필요 없음
 */
setInterval(() => {
    s.unlink('.\\abcdefg', (err) => {
        if (err) {
            console.error(err);
        }
    });
})

/**
 * 프로미스의 에러는 따로 처리하지 않아도 됨
 * 단, 버전이 올라감에 따라 에러가 발생할 가능성이 있기 때문에 catch를 통해 처리해주는 것을 추천
 */
setInterval(() => {
    fs.unlink('.\\abcdefg')
        .catch((error) => {
            console.error(error);
        });
}, 1000);
