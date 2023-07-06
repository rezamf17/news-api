import moment from "moment";

export default {
    formatDate (date:any) {
        return moment(date).format('DD MMM YYYY')
    },

    searchDate (date:any) {
        return moment(date).format('YYYY-MM-DD')
    }
}