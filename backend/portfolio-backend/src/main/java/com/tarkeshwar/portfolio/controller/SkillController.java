package com.tarkeshwar.portfolio.controller;

import com.tarkeshwar.portfolio.dto.SkillRequestDto;
import com.tarkeshwar.portfolio.entity.Skill;
import com.tarkeshwar.portfolio.service.SkillService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/skills")
@RequiredArgsConstructor
public class SkillController {

    private final SkillService skillService;

    @PostMapping
    public Skill createSkill(
            @Valid @RequestBody SkillRequestDto requestDto
    ) {
        return skillService.createSkill(requestDto);
    }

    @GetMapping
    public List<Skill> getAllSkills() {
        return skillService.getAllSkills();
    }

    // Get skill by ID
    @GetMapping("/{id}")
    public Skill getSkillById(@PathVariable Long id) {
        return skillService.getSkillById(id);
    }

    // Update skill
    @PutMapping("/{id}")
    public Skill updateSkill(
            @PathVariable Long id,
            @Valid @RequestBody SkillRequestDto requestDto
    ) {
        return skillService.updateSkill(id, requestDto);
    }

    // Delete skill
    @DeleteMapping("/{id}")
    public String deleteSkill(@PathVariable Long id) {
        skillService.deleteSkill(id);
        return "Skill deleted successfully";
    }
}