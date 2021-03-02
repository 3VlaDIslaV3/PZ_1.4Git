function task1() {
    const dayOfWeek = {
        dayEN: [ 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
       dayUA: [ 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'П`ятниця', 'Субота', 'Неділя']
   }
    for (let i = 0; i < 1; i++){
        let seLan = prompt("Виберіть мову “ua” або “en”?", '').toLowerCase();
        if ( seLan === 'ua' || seLan === 'en') {
            if (seLan === 'ua') {
                for (let y = 0; y < 1; y++) {
                    let selDay =+ prompt('Введіть номер дня неділі від 1 до 7?', '')
                   if (selDay <= 7) {
                        alert(dayOfWeek.dayUA[selDay - 1])
                    } else if ( selDay > 8 || selDay <= 0 ) {
                        alert('mistake, try again')
                        y--;
                    }
                }
            } else if (seLan === 'en') {
                for (let y = 0; y < 1; y++) {
                    let selDay =+ prompt('Enter the day number of the week (from 1 to 7)?', '')
                    if (selDay <= 7) {
                        alert(dayOfWeek.dayEN[selDay - 1])
                    } else if ( selDay > 8 || selDay <= 0 ) {
                        alert('mistake, try again')
                        y--;
                    }
                }
            }
        } else {
            alert('mistake, try again');
           i--;
        }
    }
}
task1();