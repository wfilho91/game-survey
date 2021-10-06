package com.wfilho.gamesurvey.resources;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.wfilho.gamesurvey.dto.RecordDTO;
import com.wfilho.gamesurvey.dto.RecordInsertDTO;
import com.wfilho.gamesurvey.services.RecordService;

@RestController
@RequestMapping(value = "/records")
public class RecordResource {
	@Autowired
	private RecordService service;
	
	@PostMapping
	public ResponseEntity<RecordDTO>insert(@RequestBody RecordInsertDTO dto){
		RecordDTO newDto = service.insert(dto);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(newDto.getId()).toUri();
		return ResponseEntity.created(uri).body(newDto);
	}
}
