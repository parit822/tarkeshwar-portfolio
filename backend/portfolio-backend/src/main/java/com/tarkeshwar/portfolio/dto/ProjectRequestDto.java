package com.tarkeshwar.portfolio.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ProjectRequestDto {

    @NotBlank(message = "Project title is required")
    private String title;

    @NotBlank(message = "Project description is required")
    private String description;

    @NotBlank(message = "Tech stack is required")
    private String techStack;

    private String githubUrl;
    private String liveUrl;
    private String imageUrl;
}