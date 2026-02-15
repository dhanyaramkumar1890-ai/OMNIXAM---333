package com.examhub;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ExamhubApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExamhubApplication.class, args);
    }

}

package com.examhub.model;

import jakarta.persistence.*;

@Entity
@Table(name="users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String email;
    private String password;

    public User() {}

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }
}
package com.examhub.model;

import jakarta.persistence.*;

@Entity
@Table(name="exams")
public class Exam {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;
    private String state;
    private String category;

    @Column(length = 2000)
    private String description;

    private String eligibility;
    private String ageLimit;

    public Exam() {}

    public String getName(){ return name; }
    public void setName(String name){ this.name=name; }

    public String getState(){ return state; }
    public void setState(String state){ this.state=state; }

    public String getCategory(){ return category; }
    public void setCategory(String category){ this.category=category; }

    public String getDescription(){ return description; }
    public void setDescription(String description){ this.description=description; }

    public String getEligibility(){ return eligibility; }
    public void setEligibility(String eligibility){ this.eligibility=eligibility; }

    public String getAgeLimit(){ return ageLimit; }
    public void setAgeLimit(String ageLimit){ this.ageLimit=ageLimit; }
}

package com.examhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examhub.model.User;

public interface UserRepository extends JpaRepository<User, Integer> {

    User findByEmail(String email);

}

package com.examhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examhub.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Integer> {

}

package com.examhub.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.examhub.model.Exam;

public interface ExamRepository extends JpaRepository<Exam, Integer> {

}
package com.examhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examhub.model.User;
import com.examhub.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserRepository repo;

    @PostMapping("/signup")
    public String signup(@RequestBody User user){

        if(repo.findByEmail(user.getEmail()) != null){
            return "Email already exists";
        }

        repo.save(user);
        return "Signup successful";
    }

    @PostMapping("/login")
    public String login(@RequestBody User user){

        User existing = repo.findByEmail(user.getEmail());

        if(existing == null){
            return "User not found";
        }

        if(existing.getPassword().equals(user.getPassword())){
            return "Login successful";
        }

        return "Invalid password";
    }

}
package com.examhub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.examhub.model.Exam;
import com.examhub.repository.ExamRepository;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
@CrossOrigin(origins = "*")
public class ExamController {

    @Autowired
    ExamRepository repo;

    @GetMapping
    public List<Exam> getAllExams(){
        return repo.findAll();
    }

    @PostMapping
    public Exam addExam(@RequestBody Exam exam){
        return repo.save(exam);
    }

}

