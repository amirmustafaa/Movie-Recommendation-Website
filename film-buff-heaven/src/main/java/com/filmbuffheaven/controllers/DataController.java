package com.filmbuffheaven.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.filmbuffheaven.repository.UserRepository;
import com.filmbuffheaven.models.MovieList;
import com.filmbuffheaven.models.User;
import com.filmbuffheaven.payload.request.ListRequest;
import com.filmbuffheaven.repository.ListRepository;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/data")
public class DataController {
	
	
	@Autowired
	ListRepository listRepository;
	
	@Autowired
	UserRepository userRepository;
	
	
	
	@PostMapping("/createlist")
	public ResponseEntity<?> createList( @RequestBody MovieList movieList) {
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		
		User userAccount = userRepository.findByUsername(userDetails.getUsername())
				.orElseThrow(() -> new RuntimeException("Error: User is not found."));
		
		listRepository.save(movieList);
		userAccount.setMovieLists(movieList);
		userRepository.save(userAccount);
		
		return ResponseEntity.ok("List Created");


	}
	
	@PostMapping("/getlist")
	public ResponseEntity<?> getList(@RequestBody ListRequest listRequest) {
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		
		MovieList movielist = listRepository.findById(listRequest.getListId()).orElseThrow(() -> new RuntimeException("Error: Movie List not found."));
		
		return ResponseEntity.ok(movielist);
	
		
		


	}
	
	

}
