// tslint:disable-next-line:interface-name
export interface Todo {
    id: string;
    title: string;
    done: boolean;
}

export enum TodosFilter {
    All = 'all',
    Completed = 'completed',
    Active = 'active'
}