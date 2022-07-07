(() => {
    'use strict';

    kintone.events.on(['app.record.create.show', 'app.record.edit.show'], async (event) => {
        const body = {
            'app': 133
        };

        await kintone.api(kintone.api.url('/k/v1/app/form/fields.json', true), 'GET', body, (resp) => {

            // 選択肢のデータ
            const obj = resp.properties.Table.fields.Action5.options;

            // index順に並べる
            const result = Object.keys(obj).map(function (key) {
                return obj[key];
            }).sort(function (a, b) {
                return (a.index < b.index) ? -1 : 1;
            });


            const keys = [];
            for (let i = 0; i < result.length; i++) {
                keys.push(result[i].label)
            }

            const newRows = [];
            for (let i = 0; i < keys.length; i++) {
                newRows.push(createValue_(keys[i]));
            }

            event.record.Table.value = newRows;

        }, (error) => {
            console.log(error);
        });
        return event;

    });

    // 値を作る関数
    function createValue_(text) {
        return {
            'value': {
                'Action5': {
                    'type': 'DROP_DOWN',
                    'value': text
                },
                '課題': {
                    'type': 'MULTI_LINE_TEXT',
                    'value': ''
                },
                '状況': {
                    'type': 'CHECK_BOX',
                    'value': ['未振り返り']
                }
            }
        };
    }
})();












