import { Link } from "react-router-dom"

// eslint-disable-next-line react/prop-types
function Button({children, disabled, to, type}) {
    const base = "bg-yellow-400 text-sm font-semibold text-stone-800  inline-block tracking-wide rounded-full uppercase hover:bg-yellow-300 transition-colors duration-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 focus:outline-none disabled:cursor-not-allowed";
    const styles = {
        primary: base + " py-3 px-4 md:px-6 md:py-4",
        small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xsm",
        secondary: "text-sm border-2 border-stone-300 font-semibold text-stone-400  inline-block tracking-wide rounded-full uppercase hover:bg-stone-300 hover:text-stone-800 transition-colors duration-300 focus:ring focus:bg-stone-300 focus:ring-offset-2 focus:bg-yellow-300 focus:text-stone-800 focus:ring-stone-200 focus:outline-none disabled:cursor-not-allowed py-2.5 px-4 md:px-6 md:py-3.5",
    }

    if (to) return <Link to="/order/new" className={styles[type]}>{children}</Link>

    return (
        <button disabled={disabled} className={styles[type]} >
            {children}
        </button>
    )
}

export default Button
