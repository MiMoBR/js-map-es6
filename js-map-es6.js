const arrA = ['1','2','3'];

const infoArr = (str, i, origin) => {
    console.log(`${i} : ${Number(str)} / ${origin}`);
}

arrA.map(infoArr);
// 0 : 1 / 1,2,3
// 1 : 2 / 1,2,3
// 2 : 3 / 1,2,3
