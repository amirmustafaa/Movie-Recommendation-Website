package com.filmbuffheaven.models;

import java.util.ArrayList;

public class MovieList {
	public MovieList(String name, ArrayList<String> entries) {
		super();
		this.name = name;
		this.entries = entries;
	}

	private String name;
	
	private ArrayList<String> entries;

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public ArrayList<String> getEntries() {
		return entries;
	}

	public void setEntries(ArrayList<String> entries) {
		this.entries = entries;
	}

}
