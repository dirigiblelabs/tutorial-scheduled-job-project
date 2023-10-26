
import { Logger, LogDataSeverity } from './Logger';

const logData = [{
    date: new Date(),
    severity: LogDataSeverity.INFO,
    message: 'Success feels so good!'
}, {
    date: new Date(),
    severity: LogDataSeverity.INFO,
    message: 'You made it!'
}, {
    date: new Date(),
    severity: LogDataSeverity.WARNING,
    message: 'Open Sesame!'
}, {
    date: new Date(),
    severity: LogDataSeverity.WARNING,
    message: 'Password updated!'
}, {
    date: new Date(),
    severity: LogDataSeverity.ERROR,
    message: 'Welcome to the dark side!'
}, {
    date: new Date(),
    severity: LogDataSeverity.INFO,
    message: 'So glad you are back!'
}];

const randomIndex = Math.floor(Math.random() * logData.length);

Logger.log(logData[randomIndex]);