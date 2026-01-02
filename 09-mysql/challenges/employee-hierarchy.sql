select e1.name  as employee_name, e2.name as manager_name
from employees e1
left join employees e2 on e1.manager_id = e2.id;
