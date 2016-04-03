package org.example.ws.web.api;

import org.example.ws.model.Comment;
import org.example.ws.service.CommentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CommentController {

	Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	CommentService commentService;

	@RequestMapping(value = "/api/comments", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
		logger.info("> createComment");

		Comment savedComment = commentService.create(comment);

		logger.info("< createComment");
		return new ResponseEntity<Comment>(savedComment, HttpStatus.CREATED);
	}
}
