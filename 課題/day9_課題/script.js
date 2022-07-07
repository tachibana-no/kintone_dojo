(() => {
    'use strict';
    
    // 解決できていない問題点：キャンセルを押しても保存される
    kintone.events.on(['app.record.edit.submit', 'app.record.create.submit'], (event) => {
        
        const body = {
            'app': 132,
            'fields': ['重複禁止項目']
        };

        // 今入っているレコードの重複禁止事項の値を取得する
        kintone.api(kintone.api.url('/k/v1/records.json', true), 'GET', body, (resp) => {
            console.log(resp);

            const records = resp.records;

            const list = [];
            for (let i = 0; i < records.length; i++) {
                list.push(records[i]['重複禁止項目']['value']);
            }

            // 入力した値と配列を比べる
            const data = kintone.app.record.get();
            const value = data.record['重複禁止項目'].value;
            if (list.indexOf(value) !== -1) {
                if (!window.confirm('重複しているよ。大丈夫？')) {
                    return event === false;
                }
            } else {
                return false;
            }

        }, (error) => {

            console.log(error);

        });// GET end

        return event;

    })// イベント end
})();//end
