package com.tarkeshwar.portfolio.service;

import com.tarkeshwar.portfolio.dto.SkillRequestDto;
import com.tarkeshwar.portfolio.entity.Skill;
import com.tarkeshwar.portfolio.repository.SkillRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.tarkeshwar.portfolio.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SkillService {

    private final SkillRepository skillRepository;

    // Create new skill
    public Skill createSkill(SkillRequestDto requestDto) {

        Skill skill = Skill.builder()
                .name(requestDto.getName())
                .category(requestDto.getCategory())
                .proficiency(requestDto.getProficiency())
                .build();

        return skillRepository.save(skill);
    }

    // Get all skills
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    // Get skill by ID
    public Skill getSkillById(Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Skill not found with id: " + id));
    }

    // Update existing skill
    public Skill updateSkill(Long id, SkillRequestDto requestDto) {

        Skill skill = getSkillById(id);

        skill.setName(requestDto.getName());
        skill.setCategory(requestDto.getCategory());
        skill.setProficiency(requestDto.getProficiency());

        return skillRepository.save(skill);
    }

    // Delete skill
    public void deleteSkill(Long id) {

        Skill skill = getSkillById(id);

        skillRepository.delete(skill);
    }
}