import moment from 'moment';

const howManyDaysPassedInHours = (dateToCheck) => {
    const todaysDate = moment(new Date());
    const duration = moment.duration(todaysDate.diff(dateToCheck));
    const hours = duration.asHours();
    return hours;
}

export default howManyDaysPassedInHours;