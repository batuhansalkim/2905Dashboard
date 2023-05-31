import { ShoppingCartOutlined, ShoppingOutlined,UserOutlined,DollarCircleOutlined } from "@ant-design/icons"
import { Typography,Card,Space,Statistic } from "antd";


function Dashboard() {
    return (
        <div>
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Space direction="horizontal">
                <DashboardCard icon={<ShoppingCartOutlined style={{color:"green", backgroundColor:"rgba(0,255,0,0.25)",borderRadius:20, fontSize:24,padding:8}}/>} title={"Orders"} value={12345}/>

                <DashboardCard icon={<ShoppingOutlined style={{ color: "blue", backgroundColor: "rgba(0,0,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Inventory"} value={105}/>

                <DashboardCard icon={<UserOutlined style={{ color: "purple", backgroundColor: "rgba(0,255,255,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Customer"} value={120}/>

                <DashboardCard icon={<DollarCircleOutlined style={{ color: "red", backgroundColor: "rgba(255,0,0,0.25)", borderRadius: 20, fontSize: 24, padding: 8 }} />} title={"Revenue"} value={1246}/>
            </Space>
        </div>
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
export default Dashboard;