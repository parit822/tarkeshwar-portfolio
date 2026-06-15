package com.tarkeshwar.portfolio.service;

import com.tarkeshwar.portfolio.dto.ExperienceRequestDto;
import com.tarkeshwar.portfolio.entity.Experience;
import com.tarkeshwar.portfolio.repository.ExperienceRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.tarkeshwar.portfolio.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ExperienceService {

    private final ExperienceRepository experienceRepository;

    // Create experience
    public Experience createExperience(ExperienceRequestDto requestDto) {

        Experience experience = Experience.builder()
                .companyName(requestDto.getCompanyName())
                .role(requestDto.getRole())
                .startDate(requestDto.getStartDate())
                .endDate(requestDto.getEndDate())
                .description(requestDto.getDescription())
                .build();

        return experienceRepository.save(experience);
    }

    // Get all experiences
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    // Get experience by ID
    public Experience getExperienceById(Long id) {

        return experienceRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Experience not found with id: " + id
                        ));
    }

    // Update experience
    public Experience updateExperience(Long id,
                                       ExperienceRequestDto requestDto) {

        Experience experience = getExperienceById(id);

        experience.setCompanyName(requestDto.getCompanyName());
        experience.setRole(requestDto.getRole());
        experience.setStartDate(requestDto.getStartDate());
        experience.setEndDate(requestDto.getEndDate());
        experience.setDescription(requestDto.getDescription());

        return experienceRepository.save(experience);
    }

    // Delete experience
    public void deleteExperience(Long id) {

        Experience experience = getExperienceById(id);

        experienceRepository.delete(experience);
    }
}