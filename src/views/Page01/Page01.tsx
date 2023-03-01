import { useDispatch, useSelector } from "react-redux";
import numStatus from '../../store/numStatus/index'
import ReactECharts from 'echarts-for-react';
import { useEffect, useState } from "react";
const Page01 = () => {

    const { num } = useSelector((state: RootState) => ({

        num: state.numStatusReducer.num
    }))

    const dispatch = useDispatch()

    const option = {
        title: {
            text: '本月全体',
            subtext: 'パーセンテージ',
            x: 'left'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: '種類',
                type: 'pie',
                radius: '55%',
                center: ['50%', '40%'],
                data: [
                    { value: 335, name: '文芸' },
                    { value: 310, name: 'ビジネス' },
                    { value: 534, name: 'コミック' },
                    { value: 135, name: '趣味・生活' },
                    { value: 1548, name: '小説' }
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    const option2 = {
        title: {
            text: '本月Top5'
        },
        tooltip: {},
        legend: {
            data: ['売り上げ']
        },
        xAxis: {
            data: ['恋とそれとあと全部', 'やはり俺の青春...', 'マンガ　会計の世界史', 'ビッグコミックス', 'メイクがなんと...']
        },
        yAxis: {},
        series: [{
            name: '売り上げ',
            type: 'bar',
            data: [5, 20, 36, 10, 10]
        }]
    };


    const [count, setCount] = useState(0);

    function handleNum() {
        dispatch({ type: 'add' });
    }

    function handleNum2() {
        dispatch<any>(numStatus.asyncActions.asyncAdd)
    }

    function onChartReady(echarts: any) {
        console.log('echarts is ready', echarts);
    }

    useEffect(() => {

    }, [])
    return (
        <div className="main" style={{ height: '100%', overflowY: 'scroll' }}>
            <div style={{ width: '100% !important', display: 'flex', justifyContent: 'center' }}>
                <ReactECharts
                    option={option}
                    style={{ height: 400, width: '600px' }}
                    onChartReady={onChartReady}
                />
            </div>

            <div style={{ width: '100% !important', display: 'flex', justifyContent: 'center' }}>
                <ReactECharts
                    option={option2}
                    style={{ height: 400, width: '600px' }}
                    opts={{ renderer: 'svg' }}
                />
            </div>
        </div>
    )
}

export default Page01