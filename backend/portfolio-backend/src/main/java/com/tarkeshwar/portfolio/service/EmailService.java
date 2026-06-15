package com.tarkeshwar.portfolio.service;

import lombok.RequiredArgsConstructor;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendContactNotification(
            String name,
            String email,
            String phone,
            String subject,
            String message
    ) {
        SimpleMailMessage mail = new SimpleMailMessage();

        mail.setTo("parittarkeshwar04@gmail.com");
        mail.setSubject("New Portfolio Contact Form Submission");

        mail.setText(
                "Name: " + name + "\n" +
                        "Email: " + email + "\n" +
                        "Phone: " + phone + "\n" +
                        "Subject: " + subject + "\n\n" +
                        "Message:\n" + message
        );

        mailSender.send(mail);
    }
}