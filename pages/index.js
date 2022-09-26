import { Layout, Table, Tag, Button, Modal } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";
import MyCard from "../Components/MyCard";
import MyHeader from "../Components/MyHeader";
import styles from "../styles/Home.module.css";

const List = () => {
  const [open, setOpen] = useState(false);
  const { Content } = Layout;
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Owner",
      dataIndex: "Owner",
      key: "Owner",
    },
    {
      title: "Status",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "aqua" : "skyblue";

            if (tag === "Pending") {
              color = "red";
            }

            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Created as",
      dataIndex: "create",
      key: "create",
    },
  ];

  const data = [
    {
      key: "1",
      title: "CheckIn-1",
      Owner: "John Brown",
      Status: "Checked In",
      tags: ["Checked in"],
      create: "20/APR/2021",
    },
    {
      key: "2",
      title: "CheckIn-2",
      Owner: "Jim Green",
      tags: ["Pending"],
      create: "20/10/2022",
    },
  ];

  return (
    <Layout>
      <Modal
        className={styles.modal}
        title="Project details"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <p>Name</p>
        <p>URL</p>
      </Modal>
      <MyHeader />
      <MyCard />
      <h1
        style={{
          padding: "3rem 0rem 0rem 2.7rem",
          marginBottom: "-3rem",
          textDecoration: "Underline",
        }}
      >
        List of CheckIns
      </h1>
      <Content
        style={{
          margin: "24px 16px 0",
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
          }}
        >
          <Button
            type="primary"
            onClick={() => setOpen(true)}
            style={{ float: "right" }}
          >
            Project Details
          </Button>
          <Table columns={columns} dataSource={data} />
        </div>
      </Content>
    </Layout>
  );
};

export default List;
