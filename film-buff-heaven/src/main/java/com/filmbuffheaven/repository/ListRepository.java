package com.filmbuffheaven.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.filmbuffheaven.models.MovieList;

@Repository
public interface ListRepository extends JpaRepository<MovieList, Long> {
		 Optional<MovieList> findById(Long id);
}