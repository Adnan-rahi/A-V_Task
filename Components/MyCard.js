import { Divider, Button, Card, Modal, Input } from "antd";
import React, { useState } from "react";
import "antd/dist/antd.css";

const MyCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <>
        <Card>
          <span>
            <h3>CheckIns</h3>
            <Button
              onClick={showModal}
              href="#"
              style={{ backgroundColor: "#000", float: "right", color: "#fff" }}
            >
              Add checkins
            </Button>
          </span>
          <p>Clicked on the button located to right to add new checkins</p>
          <Divider />
        </Card>
        <Modal
          title="New Checkin"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>
            <Input placeholder="Check in Title" />
          </p>
          <p>
            <Input placeholder="Image Url" />
          </p>
        </Modal>
      </>
    </div>
  );
};

export default MyCard;
