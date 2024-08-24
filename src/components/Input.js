const Input = ({ disabled = false, className, ...props }) => (
    <input
        disabled={disabled}
        className={`${className} px-3 py-2 border-0 text-base rounded-md dark:text-white shadow-sm ring-1 ring-inset ring-neutral-400 dark:ring-neutral-600 placeholder:text-neutral-500 dark:placeholder:text-neutral-400 focus:ring-2 focus:ring-inset focus:ring-neutral-700 sm:leading-6 dark:bg-neutral-800`}
        {...props}
    />
)

export default Input
