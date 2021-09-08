package com.filmbuffheaven.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.filmbuffheaven.models.MovieList;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/data")
public class DataController {
	
	
	MovieList list;
	@PostMapping("/createlist")
	public ResponseEntity<?> createList( @RequestBody MovieList list  ) {
		return null;


	}
	
	

}
