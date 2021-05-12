import { Form, DatePicker, TimePicker, Button ,Input} from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const config = {
    rules: [{ type: 'string' as const, required: true, message: 'Please select time!' },
    //这个自定义一般是作为依赖联动
    ({ getFieldValue }) => ({
        validator(_, value) {
            console.log(value + '这里可以拿到别的地方的值进行联合校验');
            console.log(getFieldValue('unlike'));
        },
      }),
],
};

const SecondPagge: React.FC<{}> = () => {
    const onFinish = (fieldsValue: any) => {
        // Should format date value before submit.
        // const rangeValue = fieldsValue['range-picker'];
        // const rangeTimeValue = fieldsValue['range-time-picker'];
        // const values = {
        //     ...fieldsValue,
        //     'range-time-picker': [
        //         rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
        //         rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
        //     ],
        // };
        // console.log('Received values of form: ', values);
        // console.log(values['range-time-picker'][0]);
        // console.log(values['range-time-picker'][0]);
    };
    return (
        <div>
            <Form name="time_related_controls" {...formItemLayout} onFinish={onFinish}>
                <Form.Item name="like" label="Like" {...config}>
                    <Input addonAfter={'$'}/>
                </Form.Item>
                <Form.Item name="unlike" label="UnLike" >
                    <Input />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        xs: { span: 24, offset: 0 },
                        sm: { span: 16, offset: 8 },
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>
    )
}


export default SecondPagge;