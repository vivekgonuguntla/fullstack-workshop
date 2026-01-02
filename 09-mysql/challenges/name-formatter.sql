select  concat(upper(left(name,1)),lower(substring(name,2))) as formatted_name, concat(upper(left(name,1)),lower(substring(name,2)),'@rev.com') as email,concat(upper(left(name,1)),upper(right(name,1))) as initials
from employees;
