import { useEffect, useState } from 'react'
import { Theme } from './components/Theme'
import { getEmployees } from './utils/fetchData'

export const App = () => {
	const [isDarkMode, setIsDarkMode] = useState(true)
	const [employees, setEmployees] = useState([])
	const [order, setOrder] = useState(true)
	useEffect(() => {
		const employeesData = getEmployees()
		setEmployees(employeesData)
	}, [])

	const sortEmployeesBySalary = (employees, order) => {
		console.log('Ordenando empleados... ⌛')
		if (order === true) {
			return employees.sort((a, b) => b.salary - a.salary)
		} else {
			return employees.sort((a, b) => a.salary - b.salary)
		}
	}
	// puedes empezar por esta linea ⬇️⬇️
	const sortedEmployees = sortEmployeesBySalary(employees, order)

	return (
		<Theme theme={isDarkMode}>
			<nav>
				<img
					src='https://media.ada-school.org/5fcd3ac12b22eab4d301d819/5fcd49a07ffe7b324996b784/ada-logo-cfdb7c7b-1791-408f-b5b4-240b22bd1653.png?version=2'
					alt='ADA School'
				/>
				<button onClick={() => setIsDarkMode((prev) => !prev)}>
					{isDarkMode ? '☀️' : '🌙'}
				</button>
			</nav>
			<h1>Lista de empleados ordenada por su salario</h1>
			<button onClick={() => setOrder((prev) => !prev)}>
				{order ? 'mayor a menor' : 'menor a mayor'}
			</button>
			<section>
				<table>
					<thead>
						<tr>
							<th>👩‍💻 Nombre 👨‍💻</th>
							<th>Edad</th>
							<th>Salario 💸</th>
							<th>Rol 🖥️</th>
						</tr>
					</thead>

					<tbody>
						{sortedEmployees.map((employee) => (
							<tr key={employee.id}>
								<th>{employee.name}</th>
								<th>{employee.age}</th>
								<th>$ {new Intl.NumberFormat().format(employee.salary)}</th>
								<th>{employee.role}</th>
							</tr>
						))}
					</tbody>
				</table>
			</section>
		</Theme>
	)
}
