import { ShoppingCartOutlined, ShoppingOutlined,UserOutlined,DollarCircleOutlined } from "@ant-design/icons"
import { Typography,Card,Space,Statistic, Table } from "antd";
import { useEffect, useState } from "react";
import { getOrders } from "../../API";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Dashboard() {
    return (
        <Space size={20} direction="vertical">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal" >
                <DashboardCard icon={<ShoppingCartOutlined style={{color:"green", backgroundColor:"rgba(0,255,0,0.25)",borderRadius:20, fontSize:24,padding:8}}/>} title={"Orders"} value={12345}/>

                <DashboardCard icon={<ShoppingOutlined style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Inventory"} value={105}/>

                <DashboardCard icon={<UserOutlined style={{ color: "purple", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Customer"} value={120}/>

                <DashboardCard icon={<DollarCircleOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Revenue"} value={1246}/>
                
            </Space>
            
            <Space >
                <RecentOrders  />
                <DashboardCart/>
            </Space>
            
        </Space>
    )
}

function DashboardCard({title,value,icon}){
    return(
        <Card style={{cursor:"pointer"}}>
            <Space>
                {icon}
                <Statistic title={title} value={value}/>
            </Space>
        </Card>
    )
}
function RecentOrders(){
    const [dataSource,setDataSource] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=>{
        setLoading(true);
        getOrders().then((res)=>{
            console.log(res.products);
            setDataSource(res.products.splice(0,3))
            setLoading(false);
             
        });
    },[])
    return(
        <>
        <Typography.Title level={4}>Recent Orders</Typography.Title>
        <Table columns={[
            {
                title:"Title",
                dataIndex:"title"
            },
            {
                title:"Quantity",
                dataIndex:"quantity",
            },
            {
                title:"Price",
                dataIndex:"discountedPrice"
            },
            {
                title: "Discount rate",
                dataIndex:"discountPercentage"
            }
        ]}
            loading={loading}
            dataSource={dataSource}
            pagination={false}
        >
            
        </Table>
        </>
    )
}
function DashboardCart(){
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' ,
            },
            title: {
                display: true,
                text: 'Order Revenue',
            },
        },
    };
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Dataset 1',
                data: labels.map(() => Math.random()*1000),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'Dataset 2',
                data: labels.map(() => Math.random()*1000),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    return <Bar options={options} data={data}/>;
}
export default Dashboard;