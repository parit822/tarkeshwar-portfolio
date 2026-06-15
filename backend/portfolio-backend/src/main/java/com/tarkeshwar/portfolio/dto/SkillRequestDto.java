package com.tarkeshwar.portfolio.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class SkillRequestDto {

    @NotBlank(message = "Skill name is required")
    private String name;

    @NotBlank(message = "Skill category is required")
    private String category;

    @NotNull(message = "Proficiency is required")
    @Min(value = 0, message = "Proficiency must be minimum 0")
    @Max(value = 100, message = "Proficiency must be maximum 100")
    private Integer proficiency;
}