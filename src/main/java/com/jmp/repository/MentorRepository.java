package com.jmp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.jmp.entity.Mentor;

public interface MentorRepository extends CrudRepository<Mentor, Integer> {

    @Query("SELECT mn FROM Mentor mn " +
            "WHERE mn.mainSkill=:skill " +
            "ORDER BY mn.level DESC")
    public List<Mentor> findBySkillAndOrderByLevel(@Param("skill") String skill);
}
