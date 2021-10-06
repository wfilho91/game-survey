package com.wfilho.gamesurvey.services;

import java.time.Instant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.wfilho.gamesurvey.dto.RecordDTO;
import com.wfilho.gamesurvey.dto.RecordInsertDTO;
import com.wfilho.gamesurvey.entities.Game;
import com.wfilho.gamesurvey.entities.Record;
import com.wfilho.gamesurvey.repositories.GameRepository;
import com.wfilho.gamesurvey.repositories.RecordRepository;

@Service
public class RecordService {
	@Autowired
	private RecordRepository repository;
	
	@Autowired
	private GameRepository gameRepository;

	@Transactional
	public RecordDTO insert(RecordInsertDTO dto) {
		Record entity = new Record();
		
		entity.setName(dto.getName());
		entity.setAge(dto.getAge());
		entity.setMoment(Instant.now());
		
		Game game = gameRepository.getById(dto.getGameId());
		
		entity.setGame(game);
		
		entity = repository.save(entity);
		
		return new RecordDTO(entity);
	}
}
