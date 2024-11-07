// src/main/java/com/example/demo/LoginResponse.java
package com.example.demo.model;

public class LoginResponse {
    private String message;
    private String token; // This could be a JWT token or session ID

    public LoginResponse(String message, String token) {
        this.message = message;
        this.token = token;
    }

    public String getMessage() { return message; }
    public String getToken() { return token; }
}
