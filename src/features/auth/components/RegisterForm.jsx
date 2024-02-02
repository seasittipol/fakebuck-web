import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import registerSchema from "../../validations/validate-register";

const initial = {
    firstName: '',
    lastName: '',
    emailOrMobile: '',
    password: '',
    confirmPassword: ''
}

export default function RegisterForm({ onSuccess }) {
    const [input, setInput] = useState(initial)
    const [mError, setMError] = useState(initial)

    const handleFormSubmit = e => {
        e.preventDefault()
        const { value, error } = registerSchema.validate(input, { abortEarly: false })
        console.log(error);
        // console.log(error.details[0].message);
        setMError()
        console.log('************');
        for (let i = 0; i < error.details.length; i++) {
            const keyna = error.details[i].message.split('"')[1]
            const valuena = error.details[i].message
            // console.log(keyna);
            // console.log(valuena);
            setMError(prv => ({ ...prv, [keyna]: valuena }))
            // console.log(mError);
        }
        console.log(mError);
        // console.log(mError);
        // const a = Object.keys(error.details)
        // const result = (error.details).reduce((object, el) => ({ ...object, [el]: el.message }), {})
        // setError({ ...error, ...result })
        // console.log(result);


        // onSuccess()
    }

    const handleChangeInput = e => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <form>
            <div className="grid grid-cols-2 gap-4 p-4">
                <div>
                    <Input placeholder='First name' value={input.firstName || ''} name='firstName' onChange={handleChangeInput} mError={mError.firstName} />

                </div>
                <div>
                    <Input placeholder='Last name' value={input.lastName} name='lastName' onChange={handleChangeInput} mError={mError.lastName} />
                    {/* {mError.lastName ? <span className="text-red-500">{mError.lastName}</span> : null} */}
                </div>
                <div className="col-span-full">
                    <Input placeholder='Email address or mobile number' value={input.emailOrMobile} name='emailOrMobile' onChange={handleChangeInput} mError={mError.emailOrMobile} />
                    {/* {mError.emailOrMobile ? <span className="text-red-500">{mError.emailOrMobile}</span> : null} */}
                </div>
                <div className="col-span-full">
                    <Input placeholder='Password' value={input.password} name='password' onChange={handleChangeInput} type='password' mError={mError.password} />
                    {/* {mError.password ? <span className="text-red-500">{mError.firstName}</span> : null} */}
                </div>
                <div className="col-span-full">
                    <Input placeholder='Confirm new password' value={input.confirmPassword} name='confirmPassword' onChange={handleChangeInput} type='password' mError={mError.confirmPassword} />
                    {/* {mError.confirmPassword ? <span className="text-red-500">{mError.confirmPassword}</span> : null} */}
                </div>
                <div className="col-span-full text-center">
                    <Button bg='green' color='white' onClick={handleFormSubmit}>
                        Sign up
                    </Button>
                </div>

            </div>
        </form>
    )
}