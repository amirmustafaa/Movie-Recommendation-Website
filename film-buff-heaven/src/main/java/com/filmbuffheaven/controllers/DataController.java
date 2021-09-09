package com.filmbuffheaven.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.filmbuffheaven.models.MovieList;
import com.filmbuffheaven.repository.ListRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/data")
public class DataController {
	
	
	@Autowired
	ListRepository listRepository;
	
	
	@PostMapping("/createlist")
	public ResponseEntity<?> createList( @RequestBody MovieList list) {
		
		listRepository.save(list);
		return ResponseEntity.ok("List Created");


	}
	
	

}
