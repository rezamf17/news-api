import moment from "moment";

export default {
    formatDate (date:any) {
        return moment(date).format('DD MMM YYYY')
    },

    searchDate (date:any) {
        // return moment(date, 'YYYY-MM-DD').toDate();
        return moment.utc(date, 'YYYY-MM-DDTHH:mm:ss.SSSZ').format('YYYY-MM-DD');
    }
}