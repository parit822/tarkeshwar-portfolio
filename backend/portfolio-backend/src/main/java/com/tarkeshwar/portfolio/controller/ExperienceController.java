package com.tarkeshwar.portfolio.controller;

import com.tarkeshwar.portfolio.dto.ExperienceRequestDto;
import com.tarkeshwar.portfolio.entity.Experience;
import com.tarkeshwar.portfolio.service.ExperienceService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/experiences")
@RequiredArgsConstructor
public class ExperienceController {

    private final ExperienceService experienceService;

    // Create experience
    @PostMapping
    public Experience createExperience(
            @Valid @RequestBody ExperienceRequestDto requestDto
    ) {
        return experienceService.createExperience(requestDto);
    }

    // Get all experiences
    @GetMapping
    public List<Experience> getAllExperiences() {
        return experienceService.getAllExperiences();
    }

    // Get experience by ID
    @GetMapping("/{id}")
    public Experience getExperienceById(@PathVariable Long id) {
        return experienceService.getExperienceById(id);
    }

    // Update experience
    @PutMapping("/{id}")
    public Experience updateExperience(
            @PathVariable Long id,
            @Valid @RequestBody ExperienceRequestDto requestDto
    ) {
        return experienceService.updateExperience(id, requestDto);
    }

    // Delete experience
    @DeleteMapping("/{id}")
    public String deleteExperience(@PathVariable Long id) {
        experienceService.deleteExperience(id);
        return "Experience deleted successfully";
    }
}