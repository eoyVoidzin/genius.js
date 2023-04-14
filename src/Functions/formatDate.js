module.exports = async function formatDate(time, f, format) {
        if (f === '+') {
            const DATE = new Date(time - ms('3h'));
            
            const Month = `${DATE.getMonth() + 1}`
                .replace('1', 'Janeiro')
                .replace('2', 'Fevereiro')
                .replace('3', 'Março')
                .replace('4', 'Abril')
                .replace('5', 'Maio')
                .replace('6', 'Junho')
                .replace('7', 'Julho')
                .replace('8', 'Agosto')
                .replace('9', 'Setembro')
                .replace('10', 'Outubro')
                .replace('11', 'Novembro')
                .replace('12', 'Dezembro');
            if(format === 'long') {
                return `${DATE.getDate()} de ${Month} de ${DATE.getFullYear()}`;
            } else if(format === 'long+h') {
                const Hours = `${DATE.getHours()}:${DATE.getMinutes()}`;
                return `${DATE.getDate()} de ${Month} de ${DATE.getFullYear()} às ${Hours}`;
            }
        } else {
            const DATE = new Date(time - ms('3h'));
            
            const Month = `${DATE.getMonth() + 1}`
                .replace('1', '01')
                .replace('2', '02')
                .replace('3', '03')
                .replace('4', '04')
                .replace('5', '05')
                .replace('6', '06')
                .replace('7', '07')
                .replace('8', '08')
                .replace('9', '09');
            
            if(format === 'iso') {
                return `${DATE.getDate()}-${Month}-${DATE.getFullYear()}`;
            } else if(format === 'iso+h') {
                const Hours = `${DATE.getHours()}:${DATE.getMinutes()}`;
                return `${DATE.getDate()}-${Month}-${DATE.getFullYear()} às ${Hours}`;
            } else if(format === 'short') {
                return `${DATE.getDate()}/${Month}/${DATE.getFullYear()}`;
            } if(format === 'short+h') {
                const Hours = `${DATE.getHours()}:${DATE.getMinutes()}`;
                return `${DATE.getDate()}/${Month}/${DATE.getFullYear()} às ${Hours}`;
            }
        }

    }