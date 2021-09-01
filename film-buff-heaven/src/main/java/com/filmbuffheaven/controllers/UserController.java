package com.filmbuffheaven.controllers;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/test")
public class UserController {

	@GetMapping("/all")
	public String allAccess() {
		return "Public Content.";
	}
	
	@GetMapping("/user")
	public String userAccess() {
		UserDetails userDetails =
				(UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		return userDetails.getUsername();
	}


}