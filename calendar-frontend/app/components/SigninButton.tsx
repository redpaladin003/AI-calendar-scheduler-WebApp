import { PiSignIn } from "react-icons/pi";

const Register = () => {
    return (
        <>
            <a
            href="/login"
            className="text-white font-semibold py-2 px-4 text-xl hover:text-blue-500"
            >
            <PiSignIn />
            </a>
        </>
        
    )
}

export default Register;
