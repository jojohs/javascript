// object 객체
// 자바스크립트는 객체기반 언어
// 객체는 속성과 기능을 가진다.
// 속성 - property
// 기능 - method 뒤에 괄호
// { 키:값, 키2:값2 }

const user = {
    name: 'Picaso',
    age : 28,
    email: 'picaso@gmail.com',
    works: [
        { id: 1, title: '게르니카', price: 10000, like:50 },
        { id: 2, title: '아비뇽의 처녀들', price: 30000, like:80 },
        { id: 3, title: '우는 여인', price: 50000, like:200 },
    ],
    // login:function() {
    //     console.log('피카소가 로그인 하였습니다.')
    // },

    login() {
        console.log('피카소가 로그인 하였습니다.')
    },

    logout() {
        console.log('퇴장 하였습니다.')
    },

    goodWorks() {
        console.log('피카소의 대표작')
        this.works.forEach(work => {
            console.log(
                `${work.id}. ${work.title}, ${work.price}원, 좋아요(${work.like})`
                )
        })
    }
}

console.log(user.name)
console.log(user.login)

// 수정
user.age = 52
console.log(user.age)

// 타입확인
console.log(typeof user)

user.login()
user.logout()
user.goodWorks()