import React, { useContext } from 'react';
import { Form, Input, Icon, Button, Row } from 'antd';
import UserContext from '../../context/UserContext';

const { Item } = Form;

const AddUserForm = (props) => {
  const { getFieldDecorator } = props.form;
  const { handleAdd } = useContext(UserContext);
  console.log('userContext: ', useContext(UserContext));

  const handleSubmit = () => {
    const { getFieldValue } = props.form;
    const newUser = {
      name: getFieldValue('name'),
      age: getFieldValue('age'),
      address: getFieldValue('address')
    }
    handleAdd(newUser);
  }

  return (<div>
    <Form onSubmit={handleSubmit}>
      <Row type="flex" justify="center">
        {/* <Col> */}
          <Item>
            {getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name!' }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Your Name"
              />,
            )}
          </Item>
          <Item>
            {getFieldDecorator('age', {
              rules: [],
            })(
              <Input
                prefix={<Icon type="heart" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Your Age"
              />,
            )}
          </Item>
          <Item>
            {getFieldDecorator('address', {
              rules: [],
            })(
              <Input
                prefix={<Icon type="home" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Your Address"
              />,
            )}
          </Item>
        {/* </Col> */}
      </Row>
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  </div>);
}

const WrappAddUserForm = Form.create({
  name: 'add-user'
})(AddUserForm);

export default WrappAddUserForm;