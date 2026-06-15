package com.tarkeshwar.portfolio.controller;

import com.tarkeshwar.portfolio.dto.ProjectRequestDto;
import com.tarkeshwar.portfolio.entity.Project;
import com.tarkeshwar.portfolio.service.ProjectService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    public Project createProject(@Valid @RequestBody ProjectRequestDto requestDto) {
        return projectService.createProject(requestDto);
    }

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public Project getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id);
    }

    @PutMapping("/{id}")
    public Project updateProject(
            @PathVariable Long id,
            @Valid @RequestBody ProjectRequestDto requestDto
    ) {
        return projectService.updateProject(id, requestDto);
    }

    @DeleteMapping("/{id}")
    public String deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return "Project deleted successfully";
    }
}