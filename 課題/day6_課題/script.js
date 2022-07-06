(() => {
    'use strict';

    kintone.events.on('app.record.create.show', (event) => {
       
        const newRow1 = createValue_('あくなき探求');
        const newRow2 = createValue_('不屈の身体');
        const newRow3 = createValue_('理想への共感');
        const newRow4 = createValue_('心を動かす');
        const newRow5 = createValue_('知識を増やす');
        const newRow6 = createValue_('公明正大');
       

        console.log(newRow1);

        event.record.Table.value = [
            newRow1,
            newRow2,
            newRow3,
            newRow4,
            newRow5,
            newRow6
        ];
        return event;


    });

    function createValue_(text){
        return {
            'value' : {
                'Action5' : {
                    'type' : 'DROP_DOWN',
                    'value' : text
                },
                '課題' : {
                    'type' : 'MULTI_LINE_TEXT',
                    'value' : ''
                },
                '状況' : {
                    'type' : 'CHECK_BOX',
                    'value' : ['未振り返り']
                }
                
            }
        };
    }

})();