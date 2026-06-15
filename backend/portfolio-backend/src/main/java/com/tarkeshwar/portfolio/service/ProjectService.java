package com.tarkeshwar.portfolio.service;

import com.tarkeshwar.portfolio.dto.ProjectRequestDto;
import com.tarkeshwar.portfolio.entity.Project;
import com.tarkeshwar.portfolio.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import com.tarkeshwar.portfolio.exception.ResourceNotFoundException;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;

    public Project createProject(ProjectRequestDto requestDto) {
        Project project = Project.builder()
                .title(requestDto.getTitle())
                .description(requestDto.getDescription())
                .techStack(requestDto.getTechStack())
                .githubUrl(requestDto.getGithubUrl())
                .liveUrl(requestDto.getLiveUrl())
                .imageUrl(requestDto.getImageUrl())
                .build();

        return projectRepository.save(project);
    }

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Get project by ID
    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() ->
                        new ResourceNotFoundException("Project not found with id: " + id));
    }

    public Project updateProject(Long id, ProjectRequestDto requestDto) {
        Project project = getProjectById(id);

        project.setTitle(requestDto.getTitle());
        project.setDescription(requestDto.getDescription());
        project.setTechStack(requestDto.getTechStack());
        project.setGithubUrl(requestDto.getGithubUrl());
        project.setLiveUrl(requestDto.getLiveUrl());
        project.setImageUrl(requestDto.getImageUrl());

        return projectRepository.save(project);
    }

    public void deleteProject(Long id) {
        Project project = getProjectById(id);
        projectRepository.delete(project);
    }
}