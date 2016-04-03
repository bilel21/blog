package org.example.ws.web.api;

import java.util.Collection;

import org.example.ws.model.Post;
import org.example.ws.service.PostService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PostController {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private PostService postService;

	@RequestMapping(value = "/api/posts", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Post>> getGreetings() {
		logger.info(" >>> Controller findAll Post");
		return new ResponseEntity<Collection<Post>>(postService.findAll(), HttpStatus.OK);
	}

	@RequestMapping(value = "/api/posts/{id}", method = RequestMethod.GET, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Post> getPost(@PathVariable("id") Long id) {
		logger.info("> getPost id:{}", id);

		Post post = postService.findOne(id);
		if (post == null) {
			return new ResponseEntity<Post>(HttpStatus.NOT_FOUND);
		}

		logger.info("< getPost id:{}", id);
		return new ResponseEntity<Post>(post, HttpStatus.OK);
	}

	@RequestMapping(value = "/api/posts", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Post> createPost(@RequestBody Post post) {
		logger.info("> createPost");
		Post savedPost = postService.create(post);
		logger.info("< createPost");
		return new ResponseEntity<Post>(savedPost, HttpStatus.CREATED);
	}

	@CrossOrigin(origins="http://loaclhost:9000", methods={RequestMethod.DELETE})
	@RequestMapping(value = "/api/posts/{id}", method = RequestMethod.DELETE)
	public ResponseEntity<Post> deletePost(@PathVariable("id") Long id) throws Exception {
		logger.info("> deletePost");

		postService.delete(id);

		logger.info("< deletePost");
		return new ResponseEntity<Post>(HttpStatus.NO_CONTENT);
	}
}
