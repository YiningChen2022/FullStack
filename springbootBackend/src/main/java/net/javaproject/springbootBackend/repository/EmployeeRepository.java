package net.javaproject.springbootBackend.repository;

import net.javaproject.springbootBackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //all crud database methods



}
