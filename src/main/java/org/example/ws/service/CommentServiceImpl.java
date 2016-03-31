package org.example.ws.service;

import org.example.ws.model.Comment;
import org.example.ws.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommentServiceImpl implements CommentService {

	@Autowired
	CommentRepository commentRepository;
	
	@Override
	public Comment create(Comment comment) {
		Comment savedComment = commentRepository.save(comment);
		return savedComment;
	}

}
