import FormLogin from "../../components/Forms/FormLogin/FormLogin";

function LoginPage() {
    return (
        <>
            <div className=" h-[100vh] w-full flex items-center justify-center">
                <div className="w-[500px]">
                    <FormLogin />
                </div>
            </div>
        </>
    )
}
export default LoginPage;