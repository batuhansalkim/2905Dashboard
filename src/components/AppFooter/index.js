import { Typography } from "antd";
import { InstagramOutlined, LinkedinOutlined, GithubOutlined, PhoneOutlined } from "@ant-design/icons";
function AppFooter(){
    return(
        <div className="AppFooter" >
            <Typography.Link style={{ fontSize: "23px" }} target="_blank" href="tel:+123456789">+<PhoneOutlined /></Typography.Link>

            <Typography.Link style={{ fontSize: "23px" }} target="_blank" href="https://www.linkedin.com/in/batuhanslkmm/"><LinkedinOutlined /></Typography.Link>

            <Typography.Link style={{ fontSize: "23px" }} target="_blank" href="https://www.instagram.com/batuslkm/"><InstagramOutlined /></Typography.Link>

            <Typography.Link style={{ fontSize: "23px" }} target="_blank" href="https://github.com/batuhansalkim"><GithubOutlined /></Typography.Link>
        </div>
    )
}

export default AppFooter;