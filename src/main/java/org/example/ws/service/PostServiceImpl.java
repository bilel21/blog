package org.example.ws.service;

import java.util.Date;
import java.util.List;

import org.example.ws.model.Post;
import org.example.ws.repository.PostRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PostServiceImpl implements PostService {

	private Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	private PostRepository postRepository;

	@Override
	public List<Post> findAll() {
		logger.info(" > findAllPosts");
		List<Post> list = postRepository.findAll();
		logger.info(" < findAllPosts");
		return list;
	}

	@Override
	public Post findOne(Long id) {
		logger.info(" > findPost");
		Post post = postRepository.getOne(id);
		logger.info(" < findPost");
		return post;
	}

	@Override
	public Post create(Post post) {
		logger.info(" > savePost");
		post.setUserName("Moi");
		post.setPublishDate(new Date());
		logger.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>> size " + post.getContent().length());
		Post savedPost = postRepository.save(post);
		logger.info(" < savePost");
		return savedPost;
	}
	
	@Transactional
    @Override
    public void delete(Long id) {
        logger.info("> delete {}", id);
        postRepository.delete(id);
        logger.info("< delete {}", id);
    }


}
