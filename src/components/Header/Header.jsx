import { Avatar, Badge, Dropdown, Input } from "antd";
import { IoIosSearch } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../App";
import avatar from "../../assets/img/logo.jpg";
import { IoIosChatbubbles } from "react-icons/io";


function Header() {
    const { dataUser } = useContext(userContext);

    const items = [
        {
            key: '1',
            icon: <IoIosLogOut />,
            label: (
                <Link to='/login'>Log out</Link>
            )
        }
    ];

    return (
        <header className="py-4 border-b flex items-center justify-between mx-auto container px-8">
            <div className="flex items-center gap-2 w-1/2">
                <IoIosSearch className="text-xl text-blue-500" />
                <Input placeholder="Search..." className="w-full bg-blue-100 border border-blue-500 text-blue-700 placeholder-blue-400 focus:ring-2 focus:ring-blue-500 focus:outline-none rounded-md" />
            </div>
            <div className="flex items-center gap-6">
            <IoIosChatbubbles className="text-2xl text-blue-500" />
                <Badge count={9} size="small">
                    <GoBell className="text-xl text-blue-500" />
                </Badge>
                <Dropdown menu={{ items }} trigger={['click']}>
                    <div className="flex items-center gap-2 cursor-pointer">
                        <Avatar src={avatar} size={50} />
                        <span className="text-sm font-medium">{dataUser?.data?.fullName || "User"}</span>
                        <IoMdArrowDropdown className="text-lg text-blue-500" />
                    </div>
                </Dropdown>
            </div>
        </header>
    );
}

export default Header;
