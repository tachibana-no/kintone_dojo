(() => {
  'use strict';
  kintone.events.on('app.record.create.change.提案プラン', (event) => {
    console.log(event);
    const plan = event.record.提案プラン.value;
    const today = new Date();
    let addDate;
    switch(plan){
      case 'Aプラン':
        addDate = dateFns.addWeeks(today,2);
        break;
      case 'Bプラン':
        addDate = dateFns.addMonths(today,1);
        break;
      default:
        addDate = today;
    }
    
    event.record.受注予定日.value = dateFns.format(addDate, 'YYYY-MM-DD');
    return event;
  });
})();
