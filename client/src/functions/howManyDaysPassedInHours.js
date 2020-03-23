import moment from 'moment';

const howManyDaysPassedInHours = (dateToCheck) => {
    const todaysDate = moment(new Date());
    //const day = "2020-03-22T17:30:17.820+00:00";
    const duration = moment.duration(todaysDate.diff(dateToCheck));
    const hours = duration.asHours();
    return hours;
}

export default howManyDaysPassedInHours;