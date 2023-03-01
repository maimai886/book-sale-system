
import type { ColumnsType, TableProps } from 'antd/es/table';
import { useEffect, useState } from "react"
import TableForm from "src/components/TableForm"
import { sellInfoApi } from 'src/request';
import { PurchaseDetailData } from './page05.interface';
import style from './page05.module.scss'




const columns: ColumnsType<PurchaseDetailData> = [
    {
        title: '書籍名',
        dataIndex: 'bookName',
        width: '50%',
    },
    {
        title: '量',
        dataIndex: 'amount',
        width: '10%',
        sorter: {
            compare: (a, b) => a.amount - b.amount,
            multiple: 3,
        },
    },
    {
        title: '価格',
        dataIndex: 'price',
        width: '10%',
        sorter: {
            compare: (a, b) => a.price - b.price,
            multiple: 2,
        },
    },
    {
        title: '総額',
        dataIndex: 'total',
        width: '15%',
        sorter: {
            compare: (a, b) => a.total - b.total,
            multiple: 1,
        },
    },
    {
        title: '入荷日',
        dataIndex: 'sellDate',
        sorter: {
            compare: (a, b) => Date.parse(a.sellDate) - Date.parse(b.sellDate),
            multiple: 1,
        },
    },
];

const onChange: TableProps<PurchaseDetailData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
};

const Page05 = () => {

    //状態定義

    const [data, setData] = useState<PurchaseDetailData[]>([]);
    /**
     * 関数定義
     */
    //明細取得処理
    async function sellDetail(params: any): Promise<void> {
        const result = await sellInfoApi(null);
        for (const key in result) {
            console.log(666, result[key])
            setData(result[key])
        }
    }

    /**
     * 監視定義
     */
    useEffect(() => {
        sellDetail(null)
    }, [])

    return (
        <div className={style.main}>
            <div className={style.title}>販売明細</div>
            <TableForm columns={columns} data={data} onChange={onChange} />
        </div>
    )
}

export default Page05