export default function Modal({ title, children, onClose, width }) {
    return (
        <>
            {/* <div className="fixed bg-white top-0 left-0 right-0 bottom-0 opacity-70"> */}
            <div className="fixed bg-white inset-0 opacity-70"></div>
            <div className="fixed inset-0">
                <div className="flex items-center justify-center h-full bg-slate-200">
                    <div className="bg-white rounded-lg shadow-[0_0_15px_rgb(0,0,0,0.2)]" style={{ width: `${width}rem` }}>
                        <div className="border-b flex justify-between p-4 items-center">
                            <button className="text-2xl invisible">&#10005;</button>
                            <h5 className="text-3xl font-semibold">{title}</h5>
                            <button className="text-2xl" onClick={onClose}>&#10005;</button>
                        </div>
                        <div>{children}</div>
                    </div>
                </div>
            </div>
        </>
    )
}