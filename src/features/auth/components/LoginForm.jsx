import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function LoginForm() {
    return (
        <form>
            <div className="grid gap-4">
                <Input placeholder="Email address or mobile number" />
                <Input placeholder="Password" />
                <Button bg="blue" color="white">
                    Login
                </Button>
            </div>
        </form>
    )
}