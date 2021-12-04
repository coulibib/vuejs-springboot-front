<template>
    <div class="container">
        <h1>Employé liste</h1>
        <div class="tab">
            <table>
            <thead>
                <th>Employee Id</th>
                <th>Employee FirstName</th>
                <th>Employee LastName</th>
                <th>Employee Email</th>
            </thead>
            <tbody>
                <tr v-for="employee in employees" v-bind:key="employee-id">
                    <td> {{ employee.id }} </td>
                    <td> {{ employee.firstName }} </td>
                    <td> {{ employee.lastName }} </td>
                    <td> {{ employee.email }} </td>
                </tr>
            </tbody>
        </table>


        </div>
        
    </div>
</template>

<script>
import EmployeeService from '../services/EmployeeService'
export default {
    name: 'Employees',
    data() {
        return {
            employees: []
        };
    },
    methods: {
        getEmployees(){
            EmployeeService.getEmployees().then((response) => {
                this.employees = response.data;
            })
        }
    },
    created() {
        this.getEmployees();
    }
}
</script>



<style scoped>

.tab{
    display: flex;
    justify-content: center;
}

table,
td {
    border: 1px solid #333;
}

thead,
tfoot {
    background-color: #333;
    color: #fff;
}
</style>