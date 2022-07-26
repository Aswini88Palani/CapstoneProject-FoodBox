package com.simplilearn.CapStone.Repository;

import com.simplilearn.CapStone.Entity.Cuisine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@Repository
public interface CuisineRepository extends CrudRepository<Cuisine, Integer> {


    Cuisine save(Cuisine cu);
    List<Cuisine> findAll();
    List<Cuisine> deleteById(int id);


}