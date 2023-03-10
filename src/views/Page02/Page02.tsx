import React, { useEffect, useState } from 'react';
import { Button, Form, Input, InputNumber, Popconfirm, Table, Tooltip, Typography } from 'antd';
import Search from 'antd/es/input/Search';
import style from './page02.module.scss';
import { bookInfoApi, itemInfoApi } from 'src/request';
import { bookInfoData, Item, EditableCellProps, itemInfoData, dialogDetailData } from './page02.interface';
import DialogMessage from 'src/components/dialog';

const EditableCell: React.FC<EditableCellProps> = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
}) => {
    const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

    return (
        <td {...restProps}>
            {editing ? (
                <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                        {
                            required: true,
                            message: `${title}を入力ください!`,
                        },
                    ]}
                >
                    {inputNode}
                </Form.Item>
            ) : (
                children
            )}
        </td>
    );
};

const Page02: React.FC = () => {

    /**
     * 状態定義
     */
    //書籍データ
    const [bookInfo, setBookInfo] = useState(bookInfoData)

    //アイテムデータ
    const [itemInfo, setItemInfo] = useState(itemInfoData)

    //検索テキスト
    const [searchText, setSearchText] = useState<string>('')

    //詳細表示
    const [dialogDetail, setDialogDetail] = useState(dialogDetailData);

    //token
    const token = localStorage.getItem('token')

    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

    const [form] = Form.useForm();

    const [editingKey, setEditingKey] = useState<number>(0);

    const isEditing = (record: Item) => record.sqlNo == editingKey;

    //colデータ準備
    const columns = [
        {
            title: '写真',
            dataIndex: 'img',
            width: '10%',
            editable: false,
            render: (url: any, record: { img: any; comment: string; author: string }) => <span
                style={{
                    width: 80,
                    height: 100,
                    display: 'inline-flex',

                }} onClick={() => {
                    setDialogDetail({
                        ...dialogDetail,
                        title:
                            <div style={{ display: 'flex' }}>
                                {record.img}
                                <div style={{ display: 'unset ' }}>著者：</div>
                                <div >{record.author}</div>
                                <div></div>
                            </div>,
                        comment: record.comment,
                        show: true
                    })
                }}>{url}</span>,
        },
        {
            title: '書籍名',
            dataIndex: 'bookName',
            width: '20%',
            editable: true,
            render: (text: any) => <Tooltip title={text}><span
                style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    width: '100%',
                    maxWidth: '150px',
                    display: 'inline-block',
                }}>{text}</span></Tooltip>,
        },
        {
            title: 'コース',
            dataIndex: 'cost',
            width: '15%',
            editable: true,
        },
        {
            title: '価格',
            dataIndex: 'price',
            width: '10%',
            editable: true,
        },
        {
            title: '出版社',
            dataIndex: 'publishing',
            width: '15%',
            editable: true,
        },
        {
            title: '種類',
            dataIndex: 'type',
            width: '10%',
            editable: true,
        },
        {
            title: '詳細編集',
            dataIndex: 'operation',
            render: (_: any, record: Item) => {
                const editable = isEditing(record);
                return editable ? (
                    <span>
                        <Typography.Link onClick={() => save(record.sqlNo)} style={{ marginRight: 8 }}>
                            保存
                        </Typography.Link>
                        <Popconfirm title="キャンセル?" onConfirm={cancel}>
                            <a>戻る</a>
                        </Popconfirm>
                    </span>
                ) : (
                    <Typography.Link disabled={editingKey !== 0} onClick={() => edit(record)}>
                        編集
                    </Typography.Link>
                );
            },
        },
    ];

    const mergedColumns = columns.map((col) => {
        if (!col.editable) {
            return col;
        }
        return {
            ...col,
            onCell: (record: Item) => ({
                record,
                inputType: col.dataIndex === 'age' ? 'number' : 'text',
                dataIndex: col.dataIndex,
                title: col.title,
                editing: isEditing(record),
            }),
        };
    });

    //選択状態
    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    /**
     * 関数定義
     */
    //変更処理
    const edit = (record: Partial<Item> & { sqlNo: React.Key }) => {
        form.setFieldsValue({ img: '', bookName: '', cost: '', price: '', ...record });
        setEditingKey(record.sqlNo);
    };

    //キャンセル処理
    const cancel = () => {
        setEditingKey(0);
    };

    //保存処理
    async function save(sqlNo: React.Key) {
        try {
            const row = (await form.validateFields()) as Item;

            const newData = [...bookInfo];
            const index = newData.findIndex((item) => sqlNo === item.sqlNo);
            if (index > -1) {
                const item = newData[index];
                newData.splice(index, 1, {
                    ...item,
                    ...row,
                });
                setBookInfo(newData);
                setEditingKey(0);
            } else {
                newData.push(row);
                setBookInfo(newData);
                setEditingKey(0);
            }
        } catch (errInfo) {
            console.log('Validate Failed:', errInfo);
        }
    }

    //検索処理
    function onSearch(): void {
        const searchResult = bookInfo.filter((item) => {
            return item.bookName.indexOf(searchText) >= 0
        })
        setBookInfo(searchResult);
    }

    //書籍データを取得
    async function fetchBookInfo(params: any) {
        try {
            const { data: { bookInfo } } = await bookInfoApi(null);
            const { data: { itemInfo } } = await itemInfoApi({ kind: 'bookType' });
            const bookInfoResult = bookInfo.map((item: any) => {
                return {
                    ...item,
                    img: <img src={`${item.img}`} />,
                    key: item.sqlNo,
                    type: itemInfo.find((info: any) => info.num === item.type)?.itemName
                };
            });
            setBookInfo(bookInfoResult);
            setItemInfo(itemInfo);
        } catch (err) {
            // Handle error here
        }
    }

    //アイテムデータを取得
    async function fetchItemInfo(params: Object) {
        try {
            const res = await itemInfoApi(params);
            console.log(123, res.data.itemInfo)
            setItemInfo(itemInfo);
            return res.data.itemInfo
        } catch (err) {
            // Handle error here
        }
    }

    //CheckBox選択処理
    function onSelectChange(newSelectedRowKeys: React.Key[]) {
        console.log('selectedRowKeys changed: ', newSelectedRowKeys);
        setSelectedRowKeys(newSelectedRowKeys);
    };

    /**
     * 監視
     */
    //初期化
    useEffect(() => {
        fetchBookInfo(null);
    }, [])

    //検索テキスト監視
    useEffect(() => {
        token && searchText == '' && fetchBookInfo(null);
    }, [searchText])

    return (
        <div className={style.main} >
            {//詳細ダイアログ表示
                <DialogMessage
                    title={dialogDetail.title}
                    content={dialogDetail.comment}
                    show={dialogDetail.show}
                    onCancel={() => { setDialogDetail({ ...dialogDetail, show: false }) }} />
            }

            {
                <div className={style.topCol}>
                    <Search
                        className={style.searchbar}
                        placeholder="書籍名を入力してください"
                        allowClear
                        onChange={(e) => setSearchText(e.target.value)}
                        onSearch={onSearch} />

                    <Button type="primary" danger className={style.actionButton} >
                        作成
                    </Button>

                    <Button type="primary" danger className={style.actionButton} disabled={!(selectedRowKeys.length > 0)}>削除</Button>

                    <Button type="dashed" danger className={style.actionButton} disabled={!(selectedRowKeys.length > 0)}>
                        出荷
                    </Button>

                    <Button type="dashed" danger className={style.actionButton} disabled={!(selectedRowKeys.length > 0)}>
                        入荷
                    </Button>

                </div>
            }


            <Form form={form} component={false}>
                <Table
                    className={style.tableStyle}
                    components={{
                        body: {
                            cell: EditableCell,
                        },
                    }}
                    bordered
                    dataSource={bookInfo}
                    columns={mergedColumns}
                    rowClassName="editable-row"
                    rowSelection={rowSelection}
                    pagination={{
                        onChange: cancel,
                    }}
                />
            </Form>
        </div>
    );
};

export default Page02