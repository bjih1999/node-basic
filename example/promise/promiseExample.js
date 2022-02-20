/**
 * promise
 *
 * - 콜백 헬이라고 불리는 지저분한 자바스크립트 코드의 해결책
 * - "내용은 실행되었지만 결과를 아직 반환하지 않은 객체" 라고 정의할 수 있음
 *      -> 실행 시킨 후 결과를 반환받는 시점을 조정할 수 있음
 *      callback은 실행 시킨 후 결과를 바로 반환 받기때문에 자유도가 떨어짐
 *          => promise가 더 유연한 사용환경을 제공한다.
 */

/**
 * callback 예제
 */
function findAndSaveUser(Users) {
    Users.findOne({}, (err, user) => {
        if (err) {
            return console.error(err);
        }
        user.name = 'jih';
        user.save((err) => {
            if (err) {
                return console.log(err);
            }
            Users.findOne({ gender: 'm' }, (err, user) => {
                if (err) {
                    return console.log(err);
                }
            });
        });
    });
}

/**
 * promise 예제
 * findOne, save 메소드가 promise를 지원한다고 가정했을 떄
 */

function findAndSaveUser(Users) {
    Users.findOne({})
        .then((user) => {
            user.name = 'jih';
            return user.save();
        })
        .then((user) => {
            return Users.findOne({ gender: 'm'})
        })
        .then((user) => {
            //
        })
        .catch(err => {
            console.error(err);
        });
}

/**
 * async/awiat 예제
 */

async function findAndSaveUser(Users) {
    try {
        let user = await Users.findOne({});
        user.name = 'jih';
        user = await user.save();
        user = await User.findOne({gender: 'n'});
    } catch (err) {
        console.error(err);
    }
}