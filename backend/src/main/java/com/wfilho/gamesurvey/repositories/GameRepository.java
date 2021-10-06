package com.wfilho.gamesurvey.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.wfilho.gamesurvey.entities.Game;

@Repository
public interface GameRepository extends JpaRepository<Game, Long> {

}
