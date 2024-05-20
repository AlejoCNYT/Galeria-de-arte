const employees = [
	{
		id: 1,
		name: 'Alice Johnson',
		wage: 50000,
		icon: '👩',
		level: 'Senior',
	},
	{
		id: 2,
		name: 'Bob Smith',
		wage: 45000,
		icon: '👨',
		level: 'Mid',
	},
	{
		id: 3,
		name: 'Charlie Brown',
		wage: 40000,
		icon: '👨',
		level: 'Junior',
	},
	{
		id: 4,
		name: 'Diana Prince',
		wage: 55000,
		icon: '👩',
		level: 'Senior',
	},
	{
		id: 5,
		name: 'Edward King',
		wage: 42000,
		icon: '👨',
		level: 'Mid',
	},
]

export const getWage = (number) => {
	if (number > employees.length) {
		number = employees.length
	}

	let acc = 0
	for (let i = 0; i < number; i++) {
		acc = acc + employees[i].wage
	}
	return acc
}

export const fibonacciSeriesRecursive = (n) => {
	console.log('se hizo un calculo')
	function fibonacci(n) {
		if (n <= 1) return n
		return fibonacci(n - 1) + fibonacci(n - 2)
	}

	const series = []
	for (let i = 0; i < n; i++) {
		series.push(fibonacci(i))
	}
	return series
}
