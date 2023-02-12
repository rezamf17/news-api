import moment from "moment";

export default {
    formatDate (date:any) {
        return moment(date).format('DD MMM YYYY')
    }
}