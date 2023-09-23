export interface IAnalytics {
    longUrl: string;
    accessTime: Date[];
    accessCount: number;
}

export interface ICustomShortnerBody {
    longUrl: string;
    shortId: string;
}