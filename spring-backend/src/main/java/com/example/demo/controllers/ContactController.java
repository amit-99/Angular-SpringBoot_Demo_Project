package com.example.demo.controllers;

import com.example.demo.model.ContactRequest;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class ContactController {

    @PostMapping("/contact")
    public String submitContactForm(@RequestBody ContactRequest contactRequest) {
        // Handle the contact data (e.g., save to database or send an email)
        System.out.println("Received contact request from: " + contactRequest.getName());
        System.out.println("Message: " + contactRequest.getMessage());
        return "Contact form submitted successfully!";
    }
}
