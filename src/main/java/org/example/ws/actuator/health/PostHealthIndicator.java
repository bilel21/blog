package org.example.ws.actuator.health;

import java.util.List;

import org.example.ws.model.Post;
import org.example.ws.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.actuate.health.Health;
import org.springframework.boot.actuate.health.HealthIndicator;
import org.springframework.stereotype.Component;

@Component
public class PostHealthIndicator implements HealthIndicator {

	@Autowired
	private PostService postService;

	@Override
	public Health health() {

		List<Post> posts = postService.findAll();

		if (posts == null || posts.size() == 3) {
			return Health.down().withDetail("count", 3).build(); //$NON-NLS-1$
		}

		return Health.up().withDetail("count", posts.size()).build(); //$NON-NLS-1$
	}

}
