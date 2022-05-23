package net.javaproject.springbootBackend;

import net.javaproject.springbootBackend.model.Employee;
import net.javaproject.springbootBackend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) throws Exception {
      /*  Employee employee = new Employee();
        employee.setFirstName("Yining");
        employee.setLastName("Chen");
        employee.setEmailId("yiningchen2018@gmail.com");
        employeeRepository.save(employee);

        Employee employee1 = new Employee();
        employee1.setFirstName("Keqiang");
        employee1.setLastName("Wu");
        employee1.setEmailId("wkq881124@gmail.com");
        employeeRepository.save(employee1);

*/

    }
}
