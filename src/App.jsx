import { useEffect, useMemo, useState } from 'react'
import { fibonacciSeriesRecursive } from './utils/fetchData'

export const App = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [count, setCount] = useState(40)
	const [toggle, setToggle] = useState(false)
	const [isCalculate, setIsCalculate] = useState(false)

	const data = useMemo(() => {
		const x = fibonacciSeriesRecursive(count)
		setIsLoading(false)
		return x
	}, [isCalculate])
	const handleClick = () => {
		setIsLoading(true)
		setIsCalculate((prev) => !prev)
	}

	if (isLoading) return <h1>Cargando</h1>

	return (
		<>
			<button onClick={() => setCount((prev) => prev + 1)}>
				calcular el fibonacci de: {count}
			</button>

			<button onClick={handleClick}>calcular</button>
			<h1>es : {data[count]}</h1>

			<br />
			<button onClick={() => setToggle((prev) => !prev)}>mostrar tabla</button>
			{toggle && (
				<ol>
					{data.map((val, i) => (
						<li key={i}>{val}</li>
					))}
				</ol>
			)}
		</>
	)
}
