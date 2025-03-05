import { Input, Card } from "antd";
import Header from "../../components/Header/Header";
import { useContext } from "react";
import { userContext } from "../../App";
import { Navigate } from "react-router-dom";

function UserProfile() {
    const { dataUser, tokenAuth } = useContext(userContext);
    return (
        <>
            {tokenAuth ? (
                <>
                     <Header />
                    <div className="mx-auto container px-8 mt-8">
                        <h1 className="text-2xl font-bold mb-6">{dataUser.data.fullName}</h1>
                        <Card className="bg-blue-50 p-6 rounded-lg">
                            <h2 className="text-lg font-semibold mb-4">User Profile</h2>
                            <p className="text-gray-500 mb-6">Most important information about the customer</p>
                            <div className="flex flex-col gap-y-4">
                                <div className="flex flex-col">
                                    <span className="text-gray-600 font-medium">Fullname</span>
                                    <Input className="w-1/2" value={dataUser.data.fullName} disabled />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-600 font-medium">Username</span>
                                    <Input className="w-1/2" value={dataUser.data.username} disabled />
                                </div>
                            </div>
                        </Card>
                    </div>
                </>
            ) : (
                <Navigate to='/'/>
            )}
        </>
    )
}
export default UserProfile;