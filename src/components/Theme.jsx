export const Theme = ({ children, theme }) => {
	return <div className={theme ? 'light' : 'dark'}>{children}</div>
}
