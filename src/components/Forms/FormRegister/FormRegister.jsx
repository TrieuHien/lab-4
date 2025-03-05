import { Button, Form, Input, message, Modal } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { authApi } from "../../../api/authApi";
import { useState } from "react";

function FormRegister() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [errorRegister, setErrorRegister] = useState('');
    const navigate = useNavigate();

    const handleOk = () => setIsModalOpen(false);
    const handleCancel = () => setIsModalOpen(false);

    const onFinish = async (values) => {
        try {
            const result = await authApi.registerAuth(values);
            if (result) {
                messageApi.open({
                    type: 'success',
                    content: 'Registered successfully!',
                });
                setTimeout(() => navigate('/login'), 1500);
            }
        } catch (error) {
            setErrorRegister(error.response?.data?.message || 'Registration failed');
            setIsModalOpen(true);
        }
    };

    return (
        <>
            <Modal title='Notification' open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <span className="text-red-500">{errorRegister}</span>
            </Modal>
            {contextHolder}
            <div className="max-w-md mx-auto mt-10 p-8 border rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold text-center mb-6">Get more opportunities</h1>
                <Button className="w-full bg-blue-600 text-white mb-4">+ Sign Up with Google</Button>
                <div className="flex items-center mb-4">
                    <div className="flex-1 border-t"></div>
                    <span className="px-2 text-gray-500">Or sign up with email</span>
                    <div className="flex-1 border-t"></div>
                </div>
                <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }} onFinish={onFinish}>
                    <Form.Item label={<span className="font-bold">Fullname</span>} name='fullName' rules={[{ required: true, message: 'Full name is required!' }]}> 
                        <Input placeholder="Enter your full name" className="w-full" />
                    </Form.Item>
                    <Form.Item label={<span className="font-bold">Username</span>} name='username' rules={[{ required: true, message: 'Username is required!' }]}> 
                        <Input placeholder="Enter username" className="w-full" />
                    </Form.Item>
                    <Form.Item label={<span className="font-bold">Password</span>} name='password' rules={[{ required: true, message: 'Password is required!' }, { min: 6, message: 'Password must be at least 6 characters long.' }]}> 
                        <Input type="password" placeholder="Enter password" className="w-full" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="w-full bg-indigo-600 text-white">Continue</Button>
                    </Form.Item>
                    <div className="text-center">
                        <span>Already have an account? <Link to='/login' className="text-blue-600 font-bold">Login</Link></span>
                    </div>
                    <p className="text-xs text-gray-500 text-center mt-4">By clicking  `Continue`, you acknowledge that you have read and accept the <Link to='/terms' className="text-blue-600">Terms of Service</Link> and <Link to='/privacy' className="text-blue-600">Privacy Policy</Link>.</p>
                </Form>
            </div>
        </>
    );
}
export default FormRegister;