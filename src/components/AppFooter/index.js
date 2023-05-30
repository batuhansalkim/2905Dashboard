import { Typography } from "antd";
function AppFooter(){
    return(
        <div className="AppFooter">
            <Typography.Link href="tel:+123456789">+123456789</Typography.Link>
            <Typography.Link>Linkedin</Typography.Link>
            <Typography.Link>Instagram</Typography.Link>
            <Typography.Link>Github</Typography.Link>
        </div>
    )
}

export default AppFooter;