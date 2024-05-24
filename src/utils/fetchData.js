export const employes = [
	{ id: 1, name: 'Alice', age: 28, salary: 75000, role: 'front end' },
	{ id: 2, name: 'Bob', age: 34, salary: 85000, role: 'back end' },
	{ id: 3, name: 'Charlie', age: 26, salary: 70000, role: 'full stack' },
	{ id: 4, name: 'David', age: 30, salary: 80000, role: 'front end' },
	{ id: 5, name: 'Eve', age: 29, salary: 76000, role: 'back end' },
	{ id: 6, name: 'Frank', age: 32, salary: 83000, role: 'full stack' },
	{ id: 7, name: 'Grace', age: 27, salary: 72000, role: 'front end' },
	{ id: 8, name: 'Hank', age: 31, salary: 81000, role: 'back end' },
	{ id: 9, name: 'Ivy', age: 25, salary: 99000, role: 'full stack' },
	{ id: 10, name: 'Jack', age: 33, salary: 84000, role: 'front end' },
	{ id: 11, name: 'Erik', age: 22, salary: 500, role: 'full stack' },
	{ id: 12, name: 'Ada', age: 37, salary: 84000, role: 'full stack' },
	{ id: 13, name: 'Mari', age: 25, salary: 80000, role: 'back end' },
	{ id: 14, name: 'Estefany', age: 21, salary: 70000, role: 'front end' },
	{ id: 15, name: 'Gabriel', age: 33, salary: 100000, role: 'full stack' },
	{ id: 16, name: 'Sofia', age: 37, salary: 75000, role: 'back end' },
]

export const getEmployees = () => employes

export const sortEmployeesBySalary = (employees, order) => {
	console.log('Ordenando empleados... ⌛')
	if (order === true) {
		return employees.sort((a, b) => b.salary - a.salary)
	} else {
		return employees.sort((a, b) => a.salary - b.salary)
	}
}
