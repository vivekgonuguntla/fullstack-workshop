
select id, name, department
from employees 
left join assignments on employees.id = assignments.employee_id
where assignments.employee_id is Null;
