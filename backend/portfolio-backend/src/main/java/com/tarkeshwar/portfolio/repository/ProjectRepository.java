package com.tarkeshwar.portfolio.repository;

import com.tarkeshwar.portfolio.entity.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}