



export type MyDataType =
    {
        from: 'from_0700AM' | 'from_0800AM' | 'from_0900AM' | 'from_1000AM' | 'from_1100AM' | 'from_1200PM' | 'from_1300PM' | 'from_1400PM' | 'from_1500PM' | 'from_1600PM';
        to: 'to_0800AM' | 'to_0900AM' | 'to_1000AM' | 'to_1100AM' | 'to_1200PM' | 'to_1300PM' | 'to_1400PM' | 'to_1500PM' | 'to_1600PM' | 'to_1700PM'
        Basis2: number | string;
        Interface: number | string;
        cms: number | string;
        spms: number | string;
        newperpay: number | string;
        oldperpay: number | string;
        utilitymaster: number | string;
        internet: number | string,
        exchangemail: number | string,
        comments: string;
        authorId: string;

    };



export interface ReportTypes {
    [key: string]: any;
    Basis2: number
    Interface: number;
    author: {
        createdAt: string;
        email: string;
        groupMessageId: string;
        id: string;
        name: string;
        online: boolean;
        password: string;
        role: string;
        updatedAt: string;
    };
    cms: number;
    comments: string;
    createdAt: string;
    date: string;
    exchangemail: number;
    from: string;
    id: string;
    internet: number;
    newperpay: number;
    oldperpay: number;
    spms: number;
    to: string;
    updatedAt: string;
    utilitymaster: number;
};


export type ActivityTypes = {
    id: string;
    createdAt: string;
    updatedAt: string;
    content: string;
    authorId: string;
    author: {
        id: string;
        name: string;
        email: string;
        password: string;
        createdAt: string;
        updatedAt: string;
        role: string;
        online: boolean;
        groupMessageId: string;
    };
};


export type Role = 'USER' | 'ADMIN';

export type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    role: Role;
    online: boolean;
    Reports: ReportTypes[];
    messages: Message[];
    reply: ReplyMessage[];
    activity: ActivityTypes[];
    Message: Message[];
    GeoupAuthor: GroupMessage[];
    GroupMessage: GroupMessage[];
    GroupMessagemany: GroupMessage | null;
    groupMessageId: string | null;
};


export type Message = {
    id?: string;
    createdAt?: Date;
    updatedAt?: Date;
    content: string;
    author?: User | null;
    authorId?: string | null;
    report?: ReportTypes| null;
    reportId?: string | null;
    reply?: ReplyMessage[];
    receiver?: User | null;
    receiverId?: string | null;
};


export type GroupMessage = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    author: User | null;
    authorId: string | null;
    report:ReportTypes | null;
    reportId: string | null;
    reply: ReplyMessage[];
    receiver: User | null;
    receiverId: string | null;
    receivermany: User[];
};


export type ReplyMessage = {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    content: string;
    author: User | null;
    authorId: string | null;
    message: Message | null;
    messageId: string | null;
    GroupMessage: GroupMessage | null;
    groupMessageId: string | null;
};

