import React from 'react';
import { Form, Input, Button ,Checkbox} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 20 },
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 20, offset: 4 },
    },
};

enum listOfName { '选项A', '选项B', '选项C', '选项D', '选项E', '选项F', '选项G' }
const DynamicFieldSet: React.FC<{}> = () => {
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    const listenCheckbox = ccval => {
        console.log(ccval);
    }
    return (
        <Form name="dynamic_form_item" {...formItemLayoutWithOutLabel} onFinish={onFinish}>
            <Checkbox.Group onChange={listenCheckbox}>
            <Form.List
                name="names"
            >
                {(fields, { add, remove }, { errors }) => (
                    <>
                        {fields.map((field, index) => (
                            <Form.Item
                                {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                label={<Checkbox value={listOfName[index]}>{listOfName[index]}</Checkbox>}
                                required={false}
                                key={field.key}
                            >
                                
                                <Form.Item
                                    {...field}
                                    label={listOfName[index]}
                                    key={field.key}
                                    name={[field.name, listOfName[index]]}
                                    fieldKey={[field.fieldKey, listOfName[index]]}
                                    validateTrigger={['onChange', 'onBlur']}
                                    noStyle
                                >
                                    
                                    <Input  style={{ width: '60%' }}  />
                                </Form.Item>
                                {(fields.length > 1 && fields.length-1 ===index) ? (
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => {
                                            remove(field.name)
                                            console.log(index);
                                        }}
                                    />
                                ) : null}
                                 {(fields.length > 1 && fields.length-1 !==index) ? (
                                    <MinusCircleOutlined
                                        className="dynamic-delete-button"
                                        onClick={() => {
                                            //在这里进进行逻辑判断
                                            fields[fields.length-1] = fields[index]
                                            remove(field.name)
                                        }}
                                    />
                                ) : null}
                            </Form.Item>
                        ))}
                        <Form.Item>
                            <Button
                                type="dashed"
                                onClick={() => add()}
                                style={{ width: '60%' }}
                                icon={<PlusOutlined />}
                            >
                                Add field
              </Button>

                            <Form.ErrorList errors={errors} />
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
        </Form>
    );
};

export default DynamicFieldSet