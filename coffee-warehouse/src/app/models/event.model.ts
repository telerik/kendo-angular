export class Event {
    public id?: any;
    public dataItem?: any;
    public start?: Date;
    public startTimezone?: string;
    public end?: Date;
    public endTimezone?: string;
    public isAllDay?: boolean;
    public title?: string;
    public description?: string;
    public recurrenceRule?: string;
    public recurrenceId?: any;
    public recurrenceExceptions?: Date[];
    public teamID?: number;
}
