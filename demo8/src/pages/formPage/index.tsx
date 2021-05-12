import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio ,
    Select 

} from 'antd';
const {Option } = Select 

interface Values {
  title: string;
  description: string;
  modifier: string;
}

//接口意思  传参-》收集创建
interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
  visible,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const handleChange = () => {
      console.log('select is doing');
  }
  return (
    <Modal
      visible={visible}
      title="Create a new collection"
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ modifier: 'public' ,like:'睡觉'}}
      >
        <Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="like" label="爱好">
          <Select   style={{ width: 120 }} onChange={handleChange}>
              <Option value="playgame">
                  打游戏
              </Option>
              <Option value="readingbook">
                  读书
              </Option>
              <Option value="havingfun">
                  摸鱼
              </Option>
          </Select >
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  );
};


const FromPage: React.FC<{}> = () => {
    const [visible, setVisible] = useState(false);

    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };
    return (
        <div style={{ padding: "60px" }}>
            <Button
                type="primary"
                onClick={() => {
                    setVisible(true);
                }}
            >
                New Collection
      </Button>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />
        </div>

    )
}



export default FromPage;