(() => {
    'use strict';

    kintone.events.on(['app.record.edit.show', 'app.record.create.show'], (event) => {


        const record = event.record;

        //編集不可にする
        record['重複禁止項目_文字列'].disabled = true;

        kintone.events.on([
            'app.record.create.change.日付',
            'app.record.edit.change.日付',
            'app.record.edit.change.サイボウズ製品',
            'app.record.create.change.サイボウズ製品',
            'app.record.edit.change.管理番号',
            'app.record.create.change.管理番号'], (event) => {

                const record = event.record;
                const day = record.日付.value;
                const category = record.サイボウズ製品.value;
                const controlNumber = record.管理番号.value;

                //関数で成形した値を入れ込む
                event.record.重複禁止項目_文字列.value = createValue_(day, category, controlNumber);
                console.log(createValue_(day, category, controlNumber));

                return event;
            });
        return event;

    });

    //成形する
    function createValue_(day, category, controlNumber) {

        //サイボウズ製品
        let categoryNew = '';
        switch (category) {
            case 'kintone':
                categoryNew = 'KN';
                break;
            case 'Garoon':
                categoryNew = 'GR';
                break;
            case 'サイボウズ Office':
                categoryNew = 'OF';
                break;
            case 'Mailwise':
                categoryNew = 'MW';
                break;
        }

        //日付
        const dayNew = dateFns.format(day, 'YYYYMMDD');
        return `${dayNew}-${categoryNew}-${controlNumber}`;
    }

})();