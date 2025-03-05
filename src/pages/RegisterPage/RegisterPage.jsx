import FormRegister from "../../components/Forms/FormRegister/FormRegister";

function RegisterPage() {
    return (
        <>
            <div className="h-[100vh] w-full flex items-center justify-center mx-auto container">
                <div className="w-[500px]">
                    <FormRegister />
                </div>
            </div>
        </>
    )
}
export default RegisterPage;