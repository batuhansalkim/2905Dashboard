import {MailOutlined,BellFilled} from "@ant-design/icons"
import {Image,Typography,Space, Badge} from "antd";

function AppHeader() {
    return (
        <div className="AppHeader">
            <Image width={40} src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
            />
            <Typography.Title>Batuhan's Dashboard</Typography.Title>
            <Space>
                <Badge count={20} dot>
                    <MailOutlined style={{ fontSize: 24, cursor: "pointer" }}/>
                </Badge>
                <Badge count={10} dot>
                    <BellFilled style={{ fontSize: 24, cursor: "pointer" }}/>
                </Badge>
                
            </Space>
        </div>
    )
}

export default AppHeader;