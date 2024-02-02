
export default function Input({ type = "text", placeholder, value, name, onChange, mError }) {
    const finalClass = mError
        ? 'w-full focus:outline-none px-3 py-1.5 border border-red-300 rounded-md focus:border-red-500 focus:ring-2 focus:ring-red-300'
        : 'w-full focus:outline-none px-3 py-1.5 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300'
    // console.log(mError);
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                className={finalClass}
            />
            {mError ? <span className="text-red-500">{mError}</span> : null}
        </>
    );
}