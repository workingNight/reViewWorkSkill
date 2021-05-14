import { Form, Input, Button, Space, Select, Checkbox, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const { Option } = Select;




enum listOfOptions {
    'A',
    'B',
    'C',
    'D',
    'E',
    'F'
}

const DeadForm: React.FC<{}> = () => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form:', values);
        // form.getFieldsValue('radio-options')
    };

    const handleChange = (val) => {
        // form.setFieldsValue({ sights: [] });  //设置表单字段
        console.log(val);
    };

    return (
        <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" >
            <Row gutter={[64, 24]}>
                <Col>
                    <Form.Item name='radio-options' label='选项或答案'>
                        <Checkbox.Group name='checkOptions' onChange={handleChange}>
                            <Form.List name="options">

                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map((field, index) => (
                                            <Space key={field.key} align="baseline" >
                                                <Form.Item
                                                    noStyle
                                                    shouldUpdate={(prevValues, curValues) =>
                                                        prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                                    }
                                                >
                                                    {() => (
                                                        <Form.Item
                                                            {...field}
                                                            label={<Checkbox value={listOfOptions[index]}>{listOfOptions[index]}</Checkbox>}
                                                            name={[field.name, 'options']}
                                                            fieldKey={[field.fieldKey, 'options']}
                                                            rules={[{ required: true, message: '需要输入题目~' }]}
                                                        >
                                                            {/* <Select disabled={!form.getFieldValue('area')} style={{ width: 130 }}>
                                                {(sights[form.getFieldValue('area')] || []).map(item => (
                                                    <Option key={item} value={item}>
                                                        {item}
                                                    </Option>
                                                ))}
                                            </Select> */}
                                                            <Input />
                                                        </Form.Item>
                                                    )}
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                                            </Space>
                                        ))}

                                        <Form.Item>
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add sights
                </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>
                        </Checkbox.Group>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
          </Button>
                        </Form.Item>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}


export default DeadForm;