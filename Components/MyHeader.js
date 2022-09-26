// Reuseable Header Component

import { Layout, Button } from "antd";
import styles from "../styles/Home.module.css";
const { Header } = Layout;

const MyHeader = () => {
  return (
    <div>
      <>
        <Header
          className="site-layout-sub-header-background"
          style={{
            padding: 0,
            backgroundColor: "#fff",
          }}
        >
          <img src="/" alt="AAA" />
          <span className={styles.logo}>
            <Button type="text">Feedback</Button>
            <Button type="text">Support</Button>
            <Button type="text">
              <img
                src="/ok.png"
                className={styles.btn}
                alt="V"
                width={20}
                height={16}
              />
            </Button>
          </span>
        </Header>
      </>
    </div>
  );
};

export default MyHeader;
