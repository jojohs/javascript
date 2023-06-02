// 조건문
// 1. if, else if, else
{
    // const age = prompt('당신의 나이는?')
    // if(age >= 20) {
    //     console.log('입장')
    // } else {
    //     console.log('돌아가...')
    // }

    
}

{
    // const month = prompt('지금 몇월인가요?')
    // if(month >= 3 && month <=5 ) {
    //     console.log('봄')
    // } else if(month >=6 && month <= 8) {
    //     console.log('여름')
    // } else if(month >=9 && month <= 11) {
    //     console.log('가을') 
    // } else if(month >=12 && month <= 2) {
    //     console.log('겨울') 
    // } else {
    //     console.log('이상하다...')
    // }
}

//2.switch문
{
    const site = prompt('네이버, 다음 구글, 중에서 즐겨 사용하는 포털 사이트는?')

    switch (site) {
        case '구글':
            url = 'http://google.com'
            break;

        case '다음':
            url = 'http://daum.net'
            break;

        case '네이버':
        url = 'http://naver.com'
        break;

        default:
            console.log('하하하')
            break;
    }

    document.write(`<a href=${url} target="_blank">${site}</a>`)
}