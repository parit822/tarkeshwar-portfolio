package com.tarkeshwar.portfolio.service;

import com.tarkeshwar.portfolio.dto.ContactRequestDto;
import com.tarkeshwar.portfolio.entity.Contact;
import com.tarkeshwar.portfolio.repository.ContactRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class ContactService {

    private final ContactRepository contactRepository;
    private final EmailService emailService;

    public Contact saveContact(ContactRequestDto requestDto) {

        Contact contact = Contact.builder()
                .name(requestDto.getName())
                .email(requestDto.getEmail())
                .phoneNumber(requestDto.getPhoneNumber())
                .subject(requestDto.getSubject())
                .message(requestDto.getMessage())
                .createdAt(LocalDateTime.now())
                .build();

        Contact savedContact = contactRepository.save(contact);

        emailService.sendContactNotification(
                savedContact.getName(),
                savedContact.getEmail(),
                savedContact.getPhoneNumber(),
                savedContact.getSubject(),
                savedContact.getMessage()
        );

        return savedContact;
    }
}