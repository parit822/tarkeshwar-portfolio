package com.tarkeshwar.portfolio.repository;

import com.tarkeshwar.portfolio.entity.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}