package com.tarkeshwar.portfolio.controller;

import com.tarkeshwar.portfolio.dto.ContactRequestDto;
import com.tarkeshwar.portfolio.entity.Contact;
import com.tarkeshwar.portfolio.service.ContactService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactService contactService;

    // Save contact form data
    @PostMapping
    public Contact saveContact(
            @Valid @RequestBody ContactRequestDto requestDto
    ) {
        return contactService.saveContact(requestDto);
    }
}