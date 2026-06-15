package com.tarkeshwar.portfolio.repository;

import com.tarkeshwar.portfolio.entity.Skill;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SkillRepository extends JpaRepository<Skill, Long> {
}