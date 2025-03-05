import { Button, Form, Input, message, Modal, Checkbox } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { useContext, useState } from "react";
import { userContext } from "../../../App";
function FormLogin() {
    const { token } = useContext(userContext);
    const navigate = useNavigate();
    const [errorLogin, setErrorLogin] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onFinish = async (values) => {
        try {
            const result = await authApi.loginAuth(values);
            token(result.token);
            if (result) {
                messageApi.open({
                    type: 'success',
                    content: 'Login successful!',
                });
            }
            setTimeout(() => {
                navigate('/user-profile');
            }, 1500);
        } catch (error) {
            console.log(error.response.data.message);
            setErrorLogin(error.response.data.message);
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <Modal title="Notification" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <span className="text-red-500">{errorLogin}</span>
            </Modal>
            {contextHolder}
            <div className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Welcome Back, Dude</h1>
                <Button className="w-full bg-blue-600 text-white mb-4">+ Login with Google</Button>
                <div className="flex items-center mb-4">
                    <div className="flex-1 border-t"></div>
                    <span className="px-2 text-gray-500">Or login with username</span>
                    <div className="flex-1 border-t"></div>
                </div>
                <Form
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label={<span className="font-bold">Full name</span>}
                        name="username"
                        rules={[{ required: true, message: 'Username is required!' }]}
                    >
                        <Input placeholder="Enter username" className="w-full" />
                    </Form.Item>
                    <Form.Item
                        label={<span className="font-bold">Username</span>}
                        name="password"
                        rules={[
                            { required: true, message: 'Password is required!' },
                            { min: 6, message: 'Password must be at least 6 characters long.' }
                        ]}
                    >
                        <Input type="password" placeholder="Enter password" className="w-full" />
                    </Form.Item>
                    <Form.Item>
                        <div className="flex items-center justify-between">
                            <Checkbox>Remember me</Checkbox>
                        </div>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full bg-indigo-600 text-white">Login</Button>
                    </Form.Item>
                    <Form.Item>
                        <div className="text-center">
                            <span>Don’t have an account? <Link to='/register' className="text-blue-600 font-bold ">Sign Up</Link></span>
                        </div>
                    </Form.Item>
                </Form>
            </div>
        </>
    );
}
export default FormLogin;