(async () => {
    'use strict';

     
    // データを取得する
    const getData = async () => {
        const res = await axios.get('https://54o76ppvn8.execute-api.ap-northeast-1.amazonaws.com/prod/bb-dojo', {
            params: {
                'id': 'dojo',
            },
        });
        return res.data; //製品
    };

    const data = await getData();

  

    // データを二次元配列に加工
    let values = [];
    for (let i = 0; i < data.length; i++) {
        values.push(
            [data[i]['day']['value'],
            data[i]['category']['value'],
            data[i]['content']['value'],
            data[i]['url']['value'],
            data[i]['target']['value'],
            data[i]['label']['value']

            ]);
    }

    //テーブルを作成する
    const table = document.getElementById('table');
    let dataHtml = '';

    for (let value of values) {

        dataHtml += `<tr>
            <td>${value[0]}</td>
            <td class=${value[5]}>${value[1]}</td>
            <td><a href=${value[3]} target=${value[4]}>${value[2]}</a></td>
            </tr>`;

    }
    table.innerHTML = dataHtml;

})();