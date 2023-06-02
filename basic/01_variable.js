// Variable 변수
// var, let, const

// 1. var
// 읽기, 쓰기 가능
// 블럭을 무시한다

{
    var userName='Alice'
    userName='홍길동'
    console.log(userName)
}

console.log(userName)

// 2. let
// 읽기, 쓰기 가능
{
    let title ='html'
    title='css'
    console.log(title)
}

// 3.const(상수)
// 읽기만 가능, 변하지 않는다.

{
    const title = 'javascript'

    console.log(title)
}

// 4. 변수의 데이타 타입 - 자료형

// 원시데이타 : string, number, boolean(참거짓), null(텅 비어있는 데이타), undefined

// 숫자형 Number
{
    const num = 10
    const PI = 3.14

    const a = 10
    const b = 5

    console.log(a-b)
    console.log(a+b)
    console.log(a*b)
    console.log(a/b)
    console.log(a%b)
}

{
    const a = 1/0
    const b = -1/0
    const c = 'html'/0
    console.log(a)
    console.log(b)
    console.log(c)
}

// 문자형 string
{
    const name1 = "Alice"
    const name2 = 'alice'

    const firstName = 'John'
    const lastName = 'snow'
    const fullName = firstName + " " + lastName
    console.log(fullName)
    console.log(`${firstName} ${lastName}`)
}

// Boolean
{
    const a = true
    const b = false

    const name = 'Alice'
    const age = 21

    console.log(name == 'Alice')
    console.log(age > 20)

    if(age > 20){
        console.log('입장!!!')
    } else {
        console.log('퇴장!!!')
    }
}

// null - 존재하지 않는 값
{
    const a = null
    console.log(`값은 ${a}이고 타입은 ${typeof a}입니다.`)
}

// undefined - 값이 할당되지 않음
{
    let winter
    console.log(`값은 ${winter}이고 타입은 ${typeof winter}입니다.`)
}

// 5. 대화상자 - alert, prompt, confirm
{
    // const name = prompt('이름을 입력하세요','영업팀')
    // alert(`안녕하세요 ${name}님, 환영합니다.`)
    // const isCheck = window.confirm('확인하셨습니까?')
    // console.log(isCheck)
}

// 6. 형 변환
{
    // const mathScore = prompt('수학점수는?')
    // const engScore = prompt('영어점수는?')
    // const score = (Number(mathScore) + Number(engScore)) / 2
    // alert(score)
}

{
    console.log(
        String(1234),
        String(true),
        String(null),
        String(undefined)
    )

    console.log(
        Number('1234'),
        Number('1234hello'),
        Number(true),
        Number(false),
        Number(null),
        Number(undefined),
    )

    console.log(
        Boolean(0),
        Boolean('0'),
        Boolean(''),
        Boolean(' '),
        Boolean(null),
        Boolean(undefined),
        Boolean(NaN),
    )
}