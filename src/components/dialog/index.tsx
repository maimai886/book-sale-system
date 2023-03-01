import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';

interface DialogMessageProps {
  title: string;
  content: any;
  show: boolean;
  onCancel?: () => void;
}

const DialogMessage: React.FC<DialogMessageProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const handleCancel = () => {
    setVisible(false);
    if (props.onCancel) {
      props.onCancel();
    }
  };

  useEffect(() => {
    setVisible(props.show);
  }, [props.show]);

  return (
    <Modal title={props.title} open={visible} onCancel={handleCancel} footer={null}>
      <div>{props.content}</div>
    </Modal>
  );
};

export default DialogMessage;