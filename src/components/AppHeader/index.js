import {MailOutlined,BellFilled} from "@ant-design/icons"
import {Image,Typography,Space} from "antd";

function AppHeader() {
    return (
        <div className="AppHeader">
            <Image width={40} src="https://yt3.ggpht.com/ytc/AMLnZu83ghQ28n1SqADR-RbI2BGYTrqqThAtJbfv9jcq=s176-c-k-c0x00ffffff-no-rj"
            />
            <Typography.Title>Batuhan's Dashboard</Typography.Title>
            <Space>
                <MailOutlined/>
                <BellFilled/>
            </Space>
        </div>
    )
}

export default AppHeader;