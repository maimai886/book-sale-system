export interface Item {
    key:string,
    sqlNo: number,
    bookName: string,
    cost: number,
    price: number,
    publishing: string,
    amount: number,
    type: number,
    img: string,
    author: string,
    comment: string,
}

export const bookInfoData: Item[] = []


export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
    editing: boolean;
    dataIndex: string;
    title: any;
    inputType: 'number' | 'text';
    record: Item;
    index: number;
    children: React.ReactNode;
}


export interface ItemInfo {
    sqlNo: number,
    kind:string,
    itemName:string,
    group:number,
    num:number,
    detail:string,
}

export const itemInfoData: ItemInfo[] = []


export interface DialogDetail {
    title:any,
    comment:string,
    show:boolean
}

export const dialogDetailData: DialogDetail = {
    title:'',
    comment:'',
    show:false,
}