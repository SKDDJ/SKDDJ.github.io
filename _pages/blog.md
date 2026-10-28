---
layout: page
permalink: /blog/
title: blog
description: Notes moved from the previous site. Earlier posts remain at skddj.github.io/blog.
nav: true
nav_order: 4
pagination:
  enabled: true
  collection: posts
  permalink: /page/:num/
  per_page: 10
  sort_field: date
  sort_reverse: true
  trail:
    before: 1
    after: 3
---

{% if site.display_tags and site.display_tags.size > 0 or site.display_categories and site.display_categories.size > 0 %}

<div class="tag-category-list">
  <ul class="p-0 m-0">
    {% for tag in site.display_tags %}
      <li>
        <i class="fa-solid fa-hashtag fa-sm"></i> <a href="{{ tag | slugify | prepend: '/blog/tag/' | relative_url }}">{{ tag }}</a>
      </li>
      {% unless forloop.last %}
        <p>&bull;</p>
      {% endunless %}
    {% endfor %}
    {% if site.display_categories.size > 0 and site.display_tags.size > 0 %}
      <p>&bull;</p>
    {% endif %}
    {% for category in site.display_categories %}
      <li>
        <i class="fa-solid fa-tag fa-sm"></i> <a href="{{ category | slugify | prepend: '/blog/category/' | relative_url }}">{{ category }}</a>
      </li>
      {% unless forloop.last %}
        <p>&bull;</p>
      {% endunless %}
    {% endfor %}
  </ul>
</div>
{% endif %}

<ul class="post-list">
  {% if page.pagination.enabled %}
    {% assign postlist = paginator.posts %}
  {% else %}
    {% assign postlist = site.posts %}
  {% endif %}

  {% for post in postlist %}
    {% if post.external_source == blank %}
      {% assign read_time = post.content | number_of_words | divided_by: 180 | plus: 1 %}
    {% else %}
      {% assign read_time = post.feed_content | strip_html | number_of_words | divided_by: 180 | plus: 1 %}
    {% endif %}
    {% assign year = post.date | date: "%Y" %}
    {% assign tags = post.tags | join: "" %}
    {% assign categories = post.categories | join: "" %}

    <li>
      <h3>
        {% if post.redirect == blank %}
          <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        {% elsif post.redirect contains '://' %}
          <a class="post-title" href="{{ post.redirect }}" target="_blank">{{ post.title }}</a>
        {% else %}
          <a class="post-title" href="{{ post.redirect | relative_url }}">{{ post.title }}</a>
        {% endif %}
      </h3>
      <p>{{ post.description }}</p>
      <p class="post-meta">
        {{ read_time }} min read &nbsp; &middot; &nbsp;
        {{ post.date | date: '%B %d, %Y' }}
        {% if post.external_source %}
          &nbsp; &middot; &nbsp; {{ post.external_source }}
        {% endif %}
      </p>
      <p class="post-tags">
        <a href="{{ year | prepend: '/blog/' | prepend: site.baseurl }}">
          <i class="fa-solid fa-calendar fa-sm"></i> {{ year }}
        </a>
        {% if tags != "" %}
          &nbsp; &middot; &nbsp;
          {% for tag in post.tags %}
            <a href="{{ tag | slugify | prepend: '/blog/tag/' | prepend: site.baseurl }}">
              <i class="fa-solid fa-hashtag fa-sm"></i> {{ tag }}
            </a>
            {% unless forloop.last %}
              &nbsp;
            {% endunless %}
          {% endfor %}
        {% endif %}
        {% if categories != "" %}
          &nbsp; &middot; &nbsp;
          {% for category in post.categories %}
            <a href="{{ category | slugify | prepend: '/blog/category/' | prepend: site.baseurl }}">
              <i class="fa-solid fa-tag fa-sm"></i> {{ category }}
            </a>
            {% unless forloop.last %}
              &nbsp;
            {% endunless %}
          {% endfor %}
        {% endif %}
      </p>
    </li>
  {% endfor %}
</ul>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}
