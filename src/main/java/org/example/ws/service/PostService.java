package org.example.ws.service;

import java.util.List;

import org.example.ws.model.Post;

public interface PostService {

	List<Post> findAll();

	Post findOne(Long id);

	Post create(Post post);
}
