// src/main/java/com/example/demo/LoginController.java
package com.example.demo.controllers;

import com.example.demo.model.LoginRequest;
import com.example.demo.model.LoginResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LoginController {

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        // Dummy authentication logic - replace with real authentication
        if ("user".equals(loginRequest.getUsername()) && "password".equals(loginRequest.getPassword())) {
            // In a real app, generate and return a token (e.g., JWT)
            return new LoginResponse("Login successful", "sample-token-12345");
        } else {
            return new LoginResponse("Invalid username or password", null);
        }
    }
}
